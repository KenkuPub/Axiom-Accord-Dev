import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import messages from '../lib/messages.json';

const AnimatedSubheader = ({ showCursor, isTypingComplete }) => {
  const [displaySubText, setDisplaySubText] = useState("");
  const [currentSubPosition, setCurrentSubPosition] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!isTypingComplete) return;

    if (!currentMessage) {
      setCurrentMessage(messages.messages[Math.floor(Math.random() * messages.messages.length)].text);
      return;
    }

    if (isErasing) {
      if (displaySubText.length === 0) {
        setIsErasing(false);
        setCurrentMessage(messages.messages[Math.floor(Math.random() * messages.messages.length)].text);
        return;
      }

      const eraseTimeout = setTimeout(() => {
        setDisplaySubText(prev => prev.slice(0, -1));
      }, 50);

      return () => clearTimeout(eraseTimeout);
    }

    if (currentSubPosition < currentMessage.length) {
      const typingTimeout = setTimeout(() => {
        setDisplaySubText(currentMessage.slice(0, currentSubPosition + 1));
        setCurrentSubPosition(prev => prev + 1);
      }, Math.random() * 150 + 50);

      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setIsErasing(true);
        setCurrentSubPosition(0);
      }, 6000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentSubPosition, currentMessage, isErasing, displaySubText, isTypingComplete]);

  if (!isTypingComplete) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute w-full flex justify-center text-3xl jersey-15-regular text-white/80"
      style={{ top: '100%' }}
    >
      <div className="text-center relative">
        <div className="inline-block relative">
          {displaySubText}
          <span
            className={`absolute inset-0 left-full pl-1 ${
              showCursor && isTypingComplete ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedText = () => {
  const [, setLocation] = useLocation();
  const fullText = "Axiom Accord";
  const [displayText, setDisplayText] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);
  const [isLogoZooming, setIsLogoZooming] = useState(false);
  const logoRef = useRef(null);

  const navigateToAuth = useCallback(() => {
    if (!isTypingComplete) return;

    setIsLogoZooming(true);

    // Wait for zoom animation before navigating
    setTimeout(() => {
      setLocation("/auth");
    }, 500); // Match this with the zoom duration
  }, [isTypingComplete, setLocation]);

  const getRandomDelay = useCallback(() => {
    return Math.random() * 150 + 50;
  }, []);

  // Effect for logo animation
  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setLogoAnimationComplete(true);
    }, 3500);

    return () => clearTimeout(logoTimeout);
  }, []);

  // Effect to start text animation after logo
  useEffect(() => {
    if (logoAnimationComplete) {
      const textStartTimeout = setTimeout(() => {
        setShowTextAnimation(true);
      }, 500);

      return () => clearTimeout(textStartTimeout);
    }
  }, [logoAnimationComplete]);

  // Effect for typing animation
  useEffect(() => {
    if (!showTextAnimation) return;

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
  }, [currentPosition, fullText, getRandomDelay, showTextAnimation]);

  // Effect for cursor blinking
  useEffect(() => {
    if (!showTextAnimation) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showTextAnimation]);

  // Effect for Enter key navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isTypingComplete) {
        navigateToAuth();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [isTypingComplete, navigateToAuth]);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <AnimatePresence>
            <motion.img
              ref={logoRef}
              src="/assets/logo_01_lgtr.png"
              alt="Axiom Accord Logo"
              className="w-64 h-64 cursor-pointer"
              onClick={navigateToAuth}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isLogoZooming ? 5 : (logoAnimationComplete ? [1, 1.05, 1] : 1),
              }}
              whileHover={{
                filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 0.7))"
              }}
              transition={{ 
                opacity: { duration: 3, delay: 1 },
                scale: { 
                  duration: isLogoZooming ? 0.5 : 4,
                  delay: 0,
                  repeat: isLogoZooming ? 0 : Infinity,
                  ease: "easeInOut",
                  repeatType: isLogoZooming ? "none" : "reverse"
                },
                filter: { duration: 1.0 }
              }}
              style={{ 
                filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                zIndex: isLogoZooming ? 1000 : 10
              }}
            />
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showTextAnimation ? 1 : 0 }}
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-full md:w-3/4"
        >
          <div className="text-6xl jersey-15-regular text-white">
            <div className="text-center relative w-full">
              {displayText}
              {currentPosition <= displayText.length && (
                <span
                  className={`absolute inline-block transition-opacity duration-100 top-[-3px] ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: `${currentPosition * 1.62}rem`,
                  }}
                >
                  |
                </span>
              )}
            </div>
          </div>
          <AnimatedSubheader showCursor={showCursor} isTypingComplete={isTypingComplete} />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedText;