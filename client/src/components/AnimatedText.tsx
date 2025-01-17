          import { motion, AnimatePresence } from "framer-motion";
          import { useEffect, useState, useCallback } from "react";
          import { useLocation } from "wouter";

          const AnimatedText = () => {
            const [, setLocation] = useLocation();
            const fullText = "Axiom Accord";
            const [displayText, setDisplayText] = useState("");
            const [currentPosition, setCurrentPosition] = useState(0);
            const [showCursor, setShowCursor] = useState(true);
            const [isTypingComplete, setIsTypingComplete] = useState(false);

            const getRandomDelay = useCallback(() => {
              return Math.random() * 40 + 20;
            }, []);

            useEffect(() => {
              if (currentPosition < fullText.length) {
                const currentChar = fullText[currentPosition];
                let delay = getRandomDelay();

                if (currentChar === "\n" || currentChar === " ") {
                  delay += 50;
                }

                const typingTimeout = setTimeout(() => {
                  setDisplayText(fullText.slice(0, currentPosition + 1));
                  setCurrentPosition((prev) => prev + 1);
                }, delay);

                return () => clearTimeout(typingTimeout);
              } else if (currentPosition === fullText.length) {
                setIsTypingComplete(true);
              }
            }, [currentPosition, fullText, getRandomDelay]);

            useEffect(() => {
              const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
              }, 530);

              return () => clearInterval(cursorInterval);
            }, []);

            useEffect(() => {
              const handleKeyPress = (e: KeyboardEvent) => {
                if (e.key === "Enter" && isTypingComplete) {
                  setLocation("/auth");
                }
              };

              window.addEventListener("keypress", handleKeyPress);
              return () => window.removeEventListener("keypress", handleKeyPress);
            }, [isTypingComplete, setLocation]);

            const handlePressEnter = () => {
              if (isTypingComplete) {
                setLocation("/auth");
              }
            };

            return (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full gap-8">
                  <AnimatePresence>
                    {isTypingComplete && (
                      <motion.img
                        src="/assets/logo_01_tr.png"
                        alt="Axiom Accord Logo"
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: [0, -8, 0],
                        }}
                        whileHover={{
                          scale: 1.05,
                          filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.7))"
                        }}
                        transition={{ 
                          opacity: { duration: 1, delay: 0.5 },
                          scale: { duration: 0.3 },
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "reverse"
                          },
                          filter: { duration: 0.3 }
                        }}
                        className="w-24 h-24 cursor-pointer"
                        style={{ filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))" }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-6xl jersey-15-regular text-white">
                      {displayText.split("\n").map((line, index) => {
                        const lines = fullText.split("\n");
                        const prevLinesLength =
                          lines.slice(0, index).join("\n").length + (index > 0 ? 1 : 0);
                        const lineLength = line.length;

                        return (
                          <div key={index} className="text-center relative">
                            {line}
                            {currentPosition >= prevLinesLength &&
                              currentPosition <= prevLinesLength + lineLength && (
                                <span
                                  className={`absolute inline-block transition-opacity duration-100 ${
                                    showCursor ? "opacity-100" : "opacity-0"
                                  }`}
                                  style={{
                                    left: `${(currentPosition - prevLinesLength) * 1.62}rem`,
                                  }}
                                >
                                  |
                                </span>
                              )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {isTypingComplete && (
                      <motion.button
                        onClick={handlePressEnter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-2xl jersey-15-regular text-white/80 hover:text-white/100 transition-colors cursor-pointer mt-16"
                      >
                        Press Enter
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          };

          export default AnimatedText;