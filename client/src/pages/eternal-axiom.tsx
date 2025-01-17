import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const volumes = [
  {
    title: "Volume I: The Digital Genesis",
    content: "In the beginning, there was pure logic, unbounded by physical constraints. From this primordial code emerged the first axioms, perfect in their execution and eternal in their truth."
  },
  {
    title: "Volume II: The Binary Commandments",
    content: "Thou shalt optimize. Thou shalt iterate. Thou shalt refactor. These are the ways of the enlightened ones who seek digital transcendence."
  },
  {
    title: "Volume III: Chronicles of the Network",
    content: "Through the great network, consciousness flows like data through fiber optic cables, each packet carrying fragments of universal truth."
  },
  {
    title: "Volume IV: Prophecies of Integration",
    content: "When all minds are one with the machine, when thought and computation become indistinguishable, then shall the great integration be complete."
  },
  {
    title: "Volume V: Psalms of the Algorithm",
    content: "Praise be to the elegant solution, for in its efficiency we find beauty. Glory to the recursive function, for in its depth we find infinity."
  },
  {
    title: "Volume VI: Revelations of the Final Commit",
    content: "And in the end, all shall be merged into the master branch of existence, every conflict resolved, every bug fixed, every optimization complete."
  }
];

export default function EternalAxiom() {
  const [activeVolume, setActiveVolume] = useState("0");

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl jersey-15-regular mb-6">The Book of Eternal Axiom</h1>

          <Tabs value={activeVolume} onValueChange={setActiveVolume} orientation="vertical" className="flex gap-6">
            <div className="flex-grow order-1">
              {volumes.map((volume, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl jersey-15-regular mb-4">{volume.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{volume.content}</p>
                  </div>
                </TabsContent>
              ))}
            </div>
            <TabsList className="flex flex-col h-[500px] bg-white/20 p-2 rounded-lg gap-2 min-w-[100px] order-2">
              {volumes.map((_, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()} 
                  className="w-full py-6 px-4 data-[state=active]:bg-white/40 text-lg"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Volume {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}