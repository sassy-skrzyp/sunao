"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Globe, Shield, Brain, Users, ChevronLeft, ChevronRight } from "lucide-react";
export default function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const features = [{
    icon: <MessageCircle size={32} data-magicpath-id="0" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Smart Responses",
    description: "AI-powered responses that understand context and maintain your brand voice across all customer interactions.",
    stats: "99.7% accuracy rate",
    mpid: "864d353f-14d9-478e-80f6-ebbb79f7d2e0"
  }, {
    icon: <Zap size={32} data-magicpath-id="1" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Instant Processing",
    description: "Real-time response generation that keeps your customers engaged without delays or waiting times.",
    stats: "<100ms response time",
    mpid: "71575989-9ba0-4f4b-9a8d-7255e2191970"
  }, {
    icon: <Globe size={32} data-magicpath-id="2" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Multi-Platform",
    description: "Seamless integration across email, chat, social media, and support platforms in one unified system.",
    stats: "50+ platforms supported",
    mpid: "6beb2316-cf94-48dc-af2a-6c76f522eef2"
  }, {
    icon: <Shield size={32} data-magicpath-id="3" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Privacy First",
    description: "Enterprise-grade security with end-to-end encryption and compliance with global privacy standards.",
    stats: "SOC 2 Type II certified",
    mpid: "b1ad4695-6657-475d-8b68-edfce2a2c639"
  }, {
    icon: <Brain size={32} data-magicpath-id="4" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Learning Engine",
    description: "Continuously improves response quality by learning from your successful customer interactions.",
    stats: "Improves 15% weekly",
    mpid: "86c55563-7497-4e1d-9277-f74d2522a19a"
  }, {
    icon: <Users size={32} data-magicpath-id="5" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Team Collaboration",
    description: "Enable your entire team to maintain consistent, professional communication standards.",
    stats: "Teams perform 40% better",
    mpid: "332459d6-a772-4c80-8b70-19ce8e75f9d7"
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
  return <section id="features" className="py-20 bg-gray-50" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }} data-magicpath-id="6" data-magicpath-path="FeaturesSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="7" data-magicpath-path="FeaturesSection.tsx">
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight whitespace-nowrap" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="9" data-magicpath-path="FeaturesSection.tsx">Features that deliver results<span className="text-pink-500 font-medium" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="10" data-magicpath-path="FeaturesSection.tsx">
              deliver results
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="11" data-magicpath-path="FeaturesSection.tsx">
            Everything you need to transform customer communications
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8" data-magicpath-id="12" data-magicpath-path="FeaturesSection.tsx">
          <button onClick={scrollLeft} disabled={!canScrollLeft} className={`p-3 rounded-full transition-all duration-300 ${canScrollLeft ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-pink-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} data-magicpath-id="13" data-magicpath-path="FeaturesSection.tsx">
            <ChevronLeft size={20} data-magicpath-id="14" data-magicpath-path="FeaturesSection.tsx" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2" data-magicpath-id="15" data-magicpath-path="FeaturesSection.tsx">
            {features.map((_, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-pink-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} data-magicpath-id="16" data-magicpath-path="FeaturesSection.tsx" />)}
          </div>

          <button onClick={scrollRight} disabled={!canScrollRight} className={`p-3 rounded-full transition-all duration-300 ${canScrollRight ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-pink-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} data-magicpath-id="17" data-magicpath-path="FeaturesSection.tsx">
            <ChevronRight size={20} data-magicpath-id="18" data-magicpath-path="FeaturesSection.tsx" />
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div ref={containerRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }} data-magicpath-id="19" data-magicpath-path="FeaturesSection.tsx">
          {features.map((feature, index) => <motion.div key={index} className="flex-none w-full max-w-4xl snap-center" initial={{
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
        }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="FeaturesSection.tsx">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FeaturesSection.tsx">
                <div className="p-8 md:p-12" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="FeaturesSection.tsx">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="FeaturesSection.tsx">
                    {/* Icon and Title */}
                    <div className="flex-1 space-y-6" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="FeaturesSection.tsx">
                      <div className="flex items-center gap-4" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="FeaturesSection.tsx">
                        <div className="text-pink-500 bg-pink-50 p-3 rounded-xl" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="26" data-magicpath-path="FeaturesSection.tsx">
                          {feature.icon}
                        </div>
                        <div data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="FeaturesSection.tsx">
                          <h3 className="text-2xl md:text-3xl font-medium text-black leading-tight" style={{
                        letterSpacing: '-0.06em'
                      }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="28" data-magicpath-path="FeaturesSection.tsx">
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-normal" style={{
                    letterSpacing: '-0.06em'
                  }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="29" data-magicpath-path="FeaturesSection.tsx">
                        {feature.description}
                      </p>

                      <div className="flex items-center gap-3 pt-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="FeaturesSection.tsx">
                        <div className="h-px bg-pink-200 flex-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="FeaturesSection.tsx"></div>
                        <span className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full" style={{
                      letterSpacing: '-0.06em'
                    }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="stats:unknown" data-magicpath-id="32" data-magicpath-path="FeaturesSection.tsx">
                          {feature.stats}
                        </span>
                        <div className="h-px bg-pink-200 flex-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="FeaturesSection.tsx"></div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-shrink-0 lg:w-64 h-48 bg-gray-50 rounded-xl flex items-center justify-center" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="FeaturesSection.tsx">
                      <div className="text-pink-300 scale-150" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="35" data-magicpath-path="FeaturesSection.tsx">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Feature Navigation */}
        <div className="mt-16 text-center" data-magicpath-id="36" data-magicpath-path="FeaturesSection.tsx">
          <p className="text-gray-500 mb-6 font-normal" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="37" data-magicpath-path="FeaturesSection.tsx">Explore all features</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3" data-magicpath-id="38" data-magicpath-path="FeaturesSection.tsx">
            {features.map((feature, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === currentIndex ? 'bg-pink-500 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm hover:shadow-md'}`} style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="39" data-magicpath-path="FeaturesSection.tsx">
                {feature.title}
              </button>)}
          </div>
        </div>
      </div>

      <style data-magicpath-id="40" data-magicpath-path="FeaturesSection.tsx">{`
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