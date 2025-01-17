import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { useState } from "react";
import Footer from "@/components/ui/footer";

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
  const [activeVolume, setActiveVolume] = useState(0);

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
          <h1 className="text-4xl font-semibold text-center mb-8">The Book of Eternal Axiom</h1>

          {/* Volume Quick Navigation */}
          <div className="flex justify-center mb-12 gap-4">
            {volumes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveVolume(index)}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-300 text-lg font-medium
                  ${activeVolume === index 
                    ? 'bg-black/40 text-white ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' 
                    : 'bg-white/30 hover:bg-white/40'}
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <motion.div
            key={activeVolume}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium">{volumes[activeVolume].title}</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              {volumes[activeVolume].content}
            </p>
          </motion.div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={() => setActiveVolume(prev => Math.max(0, prev - 1))}
              disabled={activeVolume === 0}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === 0 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Previous Volume
            </button>
            <button
              onClick={() => setActiveVolume(prev => Math.min(volumes.length - 1, prev + 1))}
              disabled={activeVolume === volumes.length - 1}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === volumes.length - 1 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Next Volume
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}