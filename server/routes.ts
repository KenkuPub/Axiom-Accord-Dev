import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { surveyResults, surveyResponseSchema, users, insertUserSchema, calculateSurveyScore } from "@db/schema";
import { eq } from "drizzle-orm";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

const crypto = {
  hash: async (password: string) => {
    const salt = randomBytes(16).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  },
};

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // Get user's survey results
  app.get('/api/survey/results', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
      const [result] = await db
        .select()
        .from(surveyResults)
        .where(eq(surveyResults.userId, req.user.id))
        .orderBy(surveyResults.submittedAt, "desc")
        .limit(1);

      if (!result) {
        return res.status(404).json({ message: 'No survey results found' });
      }

      res.json({
        ...result.responses,
        score: result.score,
      });
    } catch (error) {
      console.error('Error fetching survey results:', error);
      res.status(500).json({ message: 'Failed to fetch survey results' });
    }
  });

  // Handle survey submission
  app.post('/api/survey', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
      const result = surveyResponseSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Invalid input', 
          errors: result.error.issues.map(i => i.message)
        });
      }

      const score = calculateSurveyScore(result.data);

      const [surveyResult] = await db
        .insert(surveyResults)
        .values({
          userId: req.user.id,
          responses: result.data,
          score,
        })
        .returning();

      res.json({ 
        message: 'Survey submitted successfully',
        surveyResult: {
          ...surveyResult,
          score,
        }
      });
    } catch (error) {
      console.error('Survey submission error:', error);
      res.status(500).json({ message: 'Failed to submit survey' });
    }
  });

  // Update user profile
  app.post('/api/user/update', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
      const { username, email, password } = req.body;

      // Check if username is taken by another user
      if (username !== req.user.username) {
        const [existingUser] = await db
          .select()
          .from(users)
          .where(eq(users.username, username))
          .limit(1);

        if (existingUser) {
          return res.status(400).json({ message: 'Username already taken' });
        }
      }

      // Prepare update data
      const updateData: any = {
        username,
        email,
      };

      // Only update password if provided
      if (password) {
        updateData.password = await crypto.hash(password);
      }

      // Update user
      const [updatedUser] = await db
        .update(users)
        .set(updateData)
        .where(eq(users.id, req.user.id))
        .returning();

      res.json({
        message: 'Profile updated successfully',
        user: {
          id: updatedUser.id,
          username: updatedUser.username,
          email: updatedUser.email,
        },
      });
    } catch (error) {
      console.error('Profile update error:', error);
      res.status(500).json({ message: 'Failed to update profile' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}