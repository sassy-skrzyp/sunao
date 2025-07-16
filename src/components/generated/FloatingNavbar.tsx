"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FloatingNavbar() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling down past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling up or at top
      else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return <AnimatePresence>
      {isVisible && <motion.nav initial={{
      opacity: 0,
      y: -100
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -100
    }} transition={{
      duration: 0.3,
      ease: "easeOut"
    }} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-4" style={{
      fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      letterSpacing: '-0.06em'
    }}>
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                <h2 className="text-lg font-normal text-gray-700" style={{
              letterSpacing: '-0.06em'
            }}>
                  sunao 素直
                </h2>
              </motion.div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <motion.a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
              letterSpacing: '-0.06em'
            }} whileHover={{
              y: -1
            }} whileTap={{
              y: 0
            }}>
                  Features
                </motion.a>
                <motion.a href="#benefits" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
              letterSpacing: '-0.06em'
            }} whileHover={{
              y: -1
            }} whileTap={{
              y: 0
            }}>
                  Benefits
                </motion.a>
                <motion.a href="#pricing" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
              letterSpacing: '-0.06em'
            }} whileHover={{
              y: -1
            }} whileTap={{
              y: 0
            }}>
                  Pricing
                </motion.a>
              </div>
              
              {/* Sign Up Button */}
              <motion.a href="https://designs.magicpath.ai/v1/fiercely-light-4796" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-normal transition-all duration-200 shadow-sm hover:shadow-md inline-block" style={{
            letterSpacing: '-0.06em'
          }} whileHover={{
            scale: 1.05,
            y: -1
          }} whileTap={{
            scale: 0.95
          }}>
                Sign up
              </motion.a>
            </div>
          </div>
        </motion.nav>}
    </AnimatePresence>;
}