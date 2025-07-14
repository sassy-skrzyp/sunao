"use client";

import * as React from "react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return <div className="min-h-screen relative overflow-hidden" style={{
    backgroundImage: `url('https://cdn.midjourney.com/a6804604-8f31-468f-ad71-bdbf01efa3e2/0_0.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.05em'
  }} data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Navigation Bar */}
      <nav className="w-full px-8 md:px-16 lg:px-24 py-8 relative z-10" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <div className="flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            <h2 className="text-xl font-normal text-gray-700" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">sunao 素直</h2>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-16" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
            <motion.a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-normal" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut"
          }} data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
              Features
            </motion.a>
            <motion.a href="#benefits" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-normal" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              Benefits
            </motion.a>
            <motion.a href="#pricing" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-normal" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }} data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
              Pricing
            </motion.a>
          </div>
          
          <motion.button className="text-pink-500 hover:text-pink-600 transition-colors duration-200 font-normal" initial={{
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
        }} data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            Sign up
          </motion.button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="px-8 md:px-16 lg:px-24 py-16 md:py-24 relative z-10" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
        <div className="max-w-7xl mx-auto" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[60vh]" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
            {/* Left Content */}
            <div className="space-y-12 lg:space-y-16" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[0.9] text-black" initial={{
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
              letterSpacing: '-0.05em'
            }} data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">
                Own every<br data-magicpath-id="15" data-magicpath-path="HeroSection.tsx" />
                customer interaction
              </motion.h1>
              
              <motion.div className="space-y-6" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }} data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-normal" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">
                  Generate authentic, professional responses to any customer concern.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-normal" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
                  Take control of your customer communications.
                </p>
              </motion.div>
              
              <motion.button className="bg-pink-400 hover:bg-pink-500 text-black px-10 py-4 rounded-full text-lg font-normal transition-all duration-200 shadow-sm hover:shadow-md" initial={{
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
            }} data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
                Try it for free
              </motion.button>
            </div>

            {/* Right side - Background image handles the illustration */}
            <div className="relative h-96 lg:h-[500px]" data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">
              {/* This space is intentionally left for the background image to show through */}
            </div>
          </div>
        </div>
      </main>
    </div>;
}