"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Brain, Users, ChevronLeft, ChevronRight } from "lucide-react";
export default function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const features = [{
    icon: <MessageCircle size={32} />,
    title: "Smart Responses",
    description: "AI-powered responses that understand context and maintain your brand voice across all customer interactions.",
    stats: "99.7% accuracy rate",
    image: "https://imgur.com/uXRXU0Z.png"
  }, {
    icon: <Zap size={32} />,
    title: "Instant Processing",
    description: "Real-time response generation that keeps your customers engaged without delays or waiting times.",
    stats: "<100ms response time",
    image: "https://imgur.com/Zo7NGvN.png"
  }, {
    icon: <Brain size={32} />,
    title: "Learning Engine",
    description: "Continuously improves response quality by learning from your successful customer interactions.",
    stats: "Improves 15% weekly",
    image: "https://imgur.com/HAOvAo1.png"
  }, {
    icon: <Users size={32} />,
    title: "Team Collaboration",
    description: "Enable your entire team to maintain consistent, professional communication standards.",
    stats: "Teams perform 40% better",
    image: "https://imgur.com/Sb8TPDU.png"
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
  return <section id="features" className="py-20" style={{
    backgroundColor: '#f7f6f2',
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight whitespace-nowrap" style={{
          letterSpacing: '-0.06em'
        }}>Features that <span className="text-pink-500 font-medium" style={{
            letterSpacing: '-0.06em'
          }}>
              deliver results
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal" style={{
          letterSpacing: '-0.06em'
        }}>
            Everything you need to transform customer communications
          </p>
        </motion.div>

        {/* Feature Navigation */}
        <div className="mb-8 text-center">
          <p className="text-gray-500 mb-6 font-normal" style={{
          letterSpacing: '-0.06em'
        }}>Explore all features</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {features.map((feature, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === currentIndex ? 'bg-pink-500 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm hover:shadow-md'}`} style={{
            letterSpacing: '-0.06em'
          }}>
                {feature.title}
              </button>)}
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div ref={containerRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
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
        }}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Icon and Title */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-pink-500 bg-pink-50 p-3 rounded-xl" style={{
                      display: "none"
                    }}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-medium text-black leading-tight" style={{
                        letterSpacing: '-0.06em'
                      }}>
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-normal" style={{
                    letterSpacing: '-0.06em'
                  }}>
                        {feature.description}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <div className="h-px bg-pink-200 flex-1"></div>
                        <span className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full" style={{
                      letterSpacing: '-0.06em'
                    }}>
                          {feature.stats}
                        </span>
                        <div className="h-px bg-pink-200 flex-1"></div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-shrink-0 lg:w-80 h-64 bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={scrollLeft} disabled={!canScrollLeft} className={`p-3 rounded-full transition-all duration-300 ${canScrollLeft ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-pink-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
            <ChevronLeft size={20} />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {features.map((_, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-pink-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} />)}
          </div>

          <button onClick={scrollRight} disabled={!canScrollRight} className={`p-3 rounded-full transition-all duration-300 ${canScrollRight ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-pink-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
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