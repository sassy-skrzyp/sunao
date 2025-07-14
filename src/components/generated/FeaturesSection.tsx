"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Globe, Shield, Brain, Users } from "lucide-react";
export default function FeaturesSection() {
  const features = [{
    icon: <MessageCircle size={32} data-magicpath-id="0" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Smart Responses",
    description: "AI-powered responses that understand context and maintain your brand voice across all customer interactions.",
    mpid: "5f8d6b20-e4c6-47f5-a706-71a0437673f2"
  }, {
    icon: <Zap size={32} data-magicpath-id="1" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Instant Processing",
    description: "Real-time response generation that keeps your customers engaged without delays or waiting times.",
    mpid: "e76ec98a-3963-4488-8690-a8b1b84de4ad"
  }, {
    icon: <Globe size={32} data-magicpath-id="2" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Multi-Platform",
    description: "Seamless integration across email, chat, social media, and support platforms in one unified system.",
    mpid: "1e530aa5-6cd2-43f5-b79c-472db734620d"
  }, {
    icon: <Shield size={32} data-magicpath-id="3" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Privacy First",
    description: "Enterprise-grade security with end-to-end encryption and compliance with global privacy standards.",
    mpid: "c4c3781e-de30-48f0-9e12-1c5ef2e77374"
  }, {
    icon: <Brain size={32} data-magicpath-id="4" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Learning Engine",
    description: "Continuously improves response quality by learning from your successful customer interactions.",
    mpid: "60226291-fd22-4f35-a835-309e3e949813"
  }, {
    icon: <Users size={32} data-magicpath-id="5" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Team Collaboration",
    description: "Enable your entire team to maintain consistent, professional communication standards.",
    mpid: "6cb6571d-2a07-455a-9d8e-47382b4d6e2c"
  }] as any[];
  return <section id="features" className="py-32 px-8 md:px-16 lg:px-24 bg-white" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.05em'
  }} data-magicpath-id="6" data-magicpath-path="FeaturesSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="7" data-magicpath-path="FeaturesSection.tsx">
        {/* Section Header */}
        <motion.div className="text-center mb-24" initial={{
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 leading-tight" data-magicpath-id="9" data-magicpath-path="FeaturesSection.tsx">
            Everything you need<br data-magicpath-id="10" data-magicpath-path="FeaturesSection.tsx" />
            for perfect communication
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="11" data-magicpath-path="FeaturesSection.tsx">
            Powerful features designed to transform how you connect with customers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16" data-magicpath-id="12" data-magicpath-path="FeaturesSection.tsx">
          {features.map((feature, index) => <motion.div key={index} className="group" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FeaturesSection.tsx">
              <div className="space-y-6" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="FeaturesSection.tsx">
                {/* Icon */}
                <div className="text-gray-700 group-hover:text-pink-500 transition-colors duration-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknwon" data-magicpath-id="15" data-magicpath-path="FeaturesSection.tsx">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-normal text-black" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="16" data-magicpath-path="FeaturesSection.tsx">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="17" data-magicpath-path="FeaturesSection.tsx">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}