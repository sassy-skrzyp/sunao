import React from 'react';
import { motion } from 'framer-motion';
const HeroSection: React.FC = () => {
  return <div className="min-h-screen bg-background text-foreground font-sans" style={{
    letterSpacing: '-0.05em'
  }} data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Navigation Bar */}
      <nav className="w-full px-6 md:px-12 lg:px-24 py-8" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
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
            <h2 className="text-xl font-medium text-foreground" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">sunao 素直</h2>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
            <motion.a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200" initial={{
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
            <motion.a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors duration-200" initial={{
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
            <motion.a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200" initial={{
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
          
          <motion.button className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium" initial={{
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
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-24" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[60vh]" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-foreground" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }} data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
              Own every<br data-magicpath-id="14" data-magicpath-path="HeroSection.tsx" />
              customer interaction
            </motion.h1>
            
            <motion.div className="space-y-4" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }} data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">
                Generate authentic, professional responses to any customer concern.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">
                Take control of your customer communications.
              </p>
            </motion.div>
            
            <motion.button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md" initial={{
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
          }} data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
              Try it for free
            </motion.button>
          </div>

          {/* Right Illustration Area */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden" data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
            {/* Abstract Background Shape */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/60 transform rotate-12 scale-110" initial={{
            opacity: 0,
            scale: 0.8,
            rotate: 0
          }} animate={{
            opacity: 1,
            scale: 1.1,
            rotate: 12
          }} transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "easeOut"
          }} data-magicpath-id="20" data-magicpath-path="HeroSection.tsx" />
            
            {/* Illustration Elements */}
            <motion.div className="absolute bottom-8 right-8 w-32 h-32 opacity-60" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 0.6,
            y: 0
          }} transition={{
            duration: 1,
            delay: 1.2,
            ease: "easeOut"
          }} data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">
              {/* Palm Tree */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-muted-foreground" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
                <path d="M50 80 L50 95 M45 85 L55 85" stroke="currentColor" strokeWidth="2" fill="none" data-magicpath-id="23" data-magicpath-path="HeroSection.tsx" />
                <path d="M50 80 Q35 70 25 65 Q40 75 50 80 Q65 70 75 65 Q60 75 50 80" data-magicpath-id="24" data-magicpath-path="HeroSection.tsx" />
                <path d="M50 80 Q40 65 30 55 Q45 70 50 80 Q60 65 70 55 Q55 70 50 80" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx" />
              </svg>
            </motion.div>
            
            {/* Person on Bench */}
            <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-16 opacity-70" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 0.7,
            y: 0
          }} transition={{
            duration: 1,
            delay: 1.4,
            ease: "easeOut"
          }} data-magicpath-id="26" data-magicpath-path="HeroSection.tsx">
              <svg viewBox="0 0 100 60" className="w-full h-full fill-muted-foreground" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
                {/* Bench */}
                <rect x="10" y="45" width="80" height="4" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx" />
                <rect x="15" y="35" width="4" height="15" data-magicpath-id="29" data-magicpath-path="HeroSection.tsx" />
                <rect x="81" y="35" width="4" height="15" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx" />
                {/* Person */}
                <circle cx="45" cy="25" r="6" data-magicpath-id="31" data-magicpath-path="HeroSection.tsx" />
                <rect x="40" y="30" width="10" height="15" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx" />
                {/* Laptop */}
                <rect x="50" y="35" width="15" height="8" data-magicpath-id="33" data-magicpath-path="HeroSection.tsx" />
              </svg>
            </motion.div>
          </div>
        </div>
      </main>
    </div>;
};
export default HeroSection;