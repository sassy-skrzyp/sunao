"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Globe, Shield, Brain, Users } from "lucide-react";
export default function FeaturesSection() {
  const features = [{
    icon: <MessageCircle size={32} data-magicpath-id="0" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Smart Responses",
    description: "AI-powered responses that understand context and maintain your brand voice across all customer interactions.",
    mpid: "ef52530f-9b2b-4e49-9ef0-4fdb5c8203ac"
  }, {
    icon: <Zap size={32} data-magicpath-id="1" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Instant Processing",
    description: "Real-time response generation that keeps your customers engaged without delays or waiting times.",
    mpid: "23b79cda-a1b8-47c2-aee1-48f479db6c77"
  }, {
    icon: <Globe size={32} data-magicpath-id="2" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Multi-Platform",
    description: "Seamless integration across email, chat, social media, and support platforms in one unified system.",
    mpid: "9ed914b0-d9a7-43f5-8c24-1891680d86b7"
  }, {
    icon: <Shield size={32} data-magicpath-id="3" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Privacy First",
    description: "Enterprise-grade security with end-to-end encryption and compliance with global privacy standards.",
    mpid: "db1c7a44-6b05-468a-9a17-b1ffe0ccb89d"
  }, {
    icon: <Brain size={32} data-magicpath-id="4" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Learning Engine",
    description: "Continuously improves response quality by learning from your successful customer interactions.",
    mpid: "d1cff39b-8f37-4419-a4af-d0a251133e2d"
  }, {
    icon: <Users size={32} data-magicpath-id="5" data-magicpath-path="FeaturesSection.tsx" />,
    title: "Team Collaboration",
    description: "Enable your entire team to maintain consistent, professional communication standards.",
    mpid: "0f6b541e-0942-427b-a961-5908bc906c1d"
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
                <div className="text-gray-700 group-hover:text-pink-500 transition-colors duration-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="15" data-magicpath-path="FeaturesSection.tsx">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-normal text-black" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="16" data-magicpath-path="FeaturesSection.tsx">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="17" data-magicpath-path="FeaturesSection.tsx">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}