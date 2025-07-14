"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Zap, Globe, Shield, Brain, Users, ChevronLeft, ChevronRight } from "lucide-react";
export default function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const features = [{
    icon: <MessageCircle size={48} data-magicpath-id="0" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Smart Responses",
    subtitle: "Chapter 1: The Beginning",
    description: "AI-powered responses that understand context and maintain your brand voice across all customer interactions.",
    narrative: "Every great conversation starts with understanding. Our AI doesn't just respond—it comprehends the nuance, emotion, and intent behind every customer message.",
    highlight: "Context-Aware Intelligence",
    stats: "99.7% accuracy rate",
    mpid: "6b8b11e5-32b9-4cbc-a56b-dc7ba2c59215"
  }, {
    icon: <Zap size={48} data-magicpath-id="1" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Instant Processing",
    subtitle: "Chapter 2: The Speed",
    description: "Real-time response generation that keeps your customers engaged without delays or waiting times.",
    narrative: "In a world where seconds matter, our lightning-fast processing ensures your customers never wait. Every response is delivered in milliseconds, not minutes.",
    highlight: "Real-Time Excellence",
    stats: "<100ms response time",
    mpid: "ba89240a-7b7d-46df-8876-848588d1c641"
  }, {
    icon: <Globe size={48} data-magicpath-id="2" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Multi-Platform",
    subtitle: "Chapter 3: The Connection",
    description: "Seamless integration across email, chat, social media, and support platforms in one unified system.",
    narrative: "Your customers are everywhere, and so are we. One unified system that speaks every language of modern communication, from social media to enterprise chat.",
    highlight: "Universal Integration",
    stats: "50+ platforms supported",
    mpid: "d5bdbbda-60a8-4dfe-894e-da28f710afe6"
  }, {
    icon: <Shield size={48} data-magicpath-id="3" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Privacy First",
    subtitle: "Chapter 4: The Trust",
    description: "Enterprise-grade security with end-to-end encryption and compliance with global privacy standards.",
    narrative: "Trust is earned through transparency and protection. Every conversation is secured with military-grade encryption, ensuring your data remains yours alone.",
    highlight: "Unbreakable Security",
    stats: "SOC 2 Type II certified",
    mpid: "8894b150-44ed-4dc9-947e-5b75fa75d480"
  }, {
    icon: <Brain size={48} data-magicpath-id="4" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Learning Engine",
    subtitle: "Chapter 5: The Evolution",
    description: "Continuously improves response quality by learning from your successful customer interactions.",
    narrative: "Like a master craftsman, our AI learns from every interaction, becoming more skilled and intuitive with each conversation it handles.",
    highlight: "Adaptive Intelligence",
    stats: "Improves 15% weekly",
    mpid: "67a0c107-42a2-4058-a136-19e001ebc277"
  }, {
    icon: <Users size={48} data-magicpath-id="5" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Team Collaboration",
    subtitle: "Chapter 6: The Unity",
    description: "Enable your entire team to maintain consistent, professional communication standards.",
    narrative: "Great teams move as one. Our platform ensures every team member speaks with the same voice, maintaining consistency across all customer touchpoints.",
    highlight: "Unified Excellence",
    stats: "Teams perform 40% better",
    mpid: "ccc1f8d0-58f6-4abd-a7d0-ecf8053ae382"
  }] as any[];
  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.scrollWidth / features.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };
  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.scrollWidth / features.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };
  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };
  const scrollRight = () => {
    if (currentIndex < features.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };
  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return <section id="features" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.02em'
  }} data-magicpath-id="6" data-magicpath-path="FeaturesSection.tsx">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="7" data-magicpath-path="FeaturesSection.tsx">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="8" data-magicpath-path="FeaturesSection.tsx">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight" data-magicpath-id="9" data-magicpath-path="FeaturesSection.tsx">
            The Story of
            <br data-magicpath-id="10" data-magicpath-path="FeaturesSection.tsx" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-medium" data-magicpath-id="11" data-magicpath-path="FeaturesSection.tsx">
              Perfect Communication
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="12" data-magicpath-path="FeaturesSection.tsx">
            Six chapters that transform how you connect with customers
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8" data-magicpath-id="13" data-magicpath-path="FeaturesSection.tsx">
          <button onClick={scrollLeft} disabled={!canScrollLeft} className={`p-3 rounded-full transition-all duration-300 ${canScrollLeft ? 'bg-white shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`} data-magicpath-id="14" data-magicpath-path="FeaturesSection.tsx">
            <ChevronLeft size={24} data-magicpath-id="15" data-magicpath-path="FeaturesSection.tsx" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2" data-magicpath-id="16" data-magicpath-path="FeaturesSection.tsx">
            {features.map((_, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} data-magicpath-id="17" data-magicpath-path="FeaturesSection.tsx" />)}
          </div>

          <button onClick={scrollRight} disabled={!canScrollRight} className={`p-3 rounded-full transition-all duration-300 ${canScrollRight ? 'bg-white shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`} data-magicpath-id="18" data-magicpath-path="FeaturesSection.tsx">
            <ChevronRight size={24} data-magicpath-id="19" data-magicpath-path="FeaturesSection.tsx" />
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div ref={containerRef} className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }} data-magicpath-id="20" data-magicpath-path="FeaturesSection.tsx">
          {features.map((feature, index) => <motion.div key={index} className="flex-none w-full max-w-5xl snap-center" initial={{
          opacity: 0,
          x: 100
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FeaturesSection.tsx">
              <div className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex lg:min-h-[600px]`} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="FeaturesSection.tsx">
                
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="FeaturesSection.tsx">
                  <div className="space-y-6" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="FeaturesSection.tsx">
                    {/* Chapter Indicator */}
                    <div className="flex items-center gap-4" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="FeaturesSection.tsx">
                      <div className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknwon" data-magicpath-id="26" data-magicpath-path="FeaturesSection.tsx">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:string" data-magicpath-id="27" data-magicpath-path="FeaturesSection.tsx">
                        {feature.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="28" data-magicpath-path="FeaturesSection.tsx">
                      {feature.title}
                    </h3>

                    {/* Highlight */}
                    <div className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="highlight:string" data-magicpath-id="29" data-magicpath-path="FeaturesSection.tsx">
                      {feature.highlight}
                    </div>

                    {/* Narrative */}
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="narrative:string" data-magicpath-id="30" data-magicpath-path="FeaturesSection.tsx">
                      {feature.narrative}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-4" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="FeaturesSection.tsx">
                      <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="FeaturesSection.tsx"></div>
                      <span className="text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-2 rounded-full" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="stats:string" data-magicpath-id="33" data-magicpath-path="FeaturesSection.tsx">
                        {feature.stats}
                      </span>
                      <div className="h-px bg-gradient-to-r from-purple-500 to-pink-500 flex-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="FeaturesSection.tsx"></div>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-8 md:p-12 lg:p-16" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="FeaturesSection.tsx">
                  <div className="relative" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="FeaturesSection.tsx">
                    {/* Large Icon Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl scale-150" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="FeaturesSection.tsx"></div>
                    
                    {/* Icon Container */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="FeaturesSection.tsx">
                      <div className="text-blue-500 scale-150 md:scale-200" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknwon" data-magicpath-id="39" data-magicpath-path="FeaturesSection.tsx">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="FeaturesSection.tsx"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse delay-1000" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="FeaturesSection.tsx"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="absolute top-6 right-6 text-6xl md:text-7xl font-light text-slate-200 select-none" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="FeaturesSection.tsx">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Chapter Navigation */}
        <div className="mt-16 text-center" data-magicpath-id="43" data-magicpath-path="FeaturesSection.tsx">
          <p className="text-slate-500 mb-6" data-magicpath-id="44" data-magicpath-path="FeaturesSection.tsx">Navigate the story</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4" data-magicpath-id="45" data-magicpath-path="FeaturesSection.tsx">
            {features.map((feature, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === currentIndex ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm hover:shadow-md'}`} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:string" data-magicpath-id="46" data-magicpath-path="FeaturesSection.tsx">
                {feature.subtitle}
              </button>)}
          </div>
        </div>
      </div>

      <style data-magicpath-id="47" data-magicpath-path="FeaturesSection.tsx">{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>;
}