"use client";

import * as React from "react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return <div className="min-h-screen relative overflow-hidden" style={{
    backgroundImage: `url('https://cdn.midjourney.com/a6804604-8f31-468f-ad71-bdbf01efa3e2/0_0.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    // Changed from 'center -100px' to 'center bottom' to crop from top instead
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }}>
      {/* Navigation Bar */}
      <nav className="w-full px-8 md:px-16 lg:px-24 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }}>
            <h2 className="text-xl font-normal text-gray-700" style={{
            letterSpacing: '-0.06em'
          }}>sunao 素直</h2>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-16">
            <motion.a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut"
          }}>
              Features
            </motion.a>
            <motion.a href="#benefits" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}>
              Benefits
            </motion.a>
            <motion.a href="#pricing" className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }}>
              Pricing
            </motion.a>
          </div>
          
          <motion.button className="text-pink-500 hover:text-pink-600 transition-colors duration-200 font-normal" style={{
          letterSpacing: '-0.06em',
          fontWeight: "700"
        }} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut"
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => {
          window.open('https://designs.magicpath.ai/v1/fiercely-light-4796', '_blank');
        }}>
            Sign up
          </motion.button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="px-8 md:px-16 lg:px-24 py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[65vh]">
            {/* Left Content */}
            <div className="space-y-12 lg:space-y-16" style={{
            flexDirection: "column",
            display: "block"
          }}>
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] text-black" initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }} style={{
              letterSpacing: '-0.06em',
              fontWeight: "600",
              width: "900px",
              maxWidth: "900px",
              textAlign: "left",
              justifyContent: "flex-start",
              paddingTop: "0px",
              marginTop: "120px",
              marginBottom: "24px"
            }}>Own <em>every</em><br />customer interaction</motion.h1>
              
              <motion.div className="space-y-2" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }} style={{
              marginBottom: "24px"
            }}>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-normal" style={{
                width: "900px",
                maxWidth: "900px",
                lineHeight: "1.5",
                letterSpacing: '-0.06em'
              }}>
                  Generate authentic, professional responses to any customer concern.
                  <br />
                  Take control of your customer communications.
                </p>
              </motion.div>
              
              <motion.button className="bg-pink-400 hover:bg-pink-500 text-black px-10 py-4 rounded-full text-lg font-normal transition-all duration-200 shadow-sm hover:shadow-md" style={{
              letterSpacing: '-0.06em',
              fontWeight: "700"
            }} initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }} whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }}>
                Try it for free
              </motion.button>
            </div>

            {/* Right side - Background image handles the illustration */}
            <div className="relative h-96 lg:h-[500px]">
              {/* This space is intentionally left for the background image to show through */}
            </div>
          </div>
        </div>
      </main>
    </div>;
}