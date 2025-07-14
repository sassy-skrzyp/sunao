"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Heart, Target } from "lucide-react";
export default function BenefitsSection() {
  const benefits = [{
    icon: <TrendingUp size={48} data-magicpath-id="0" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "300%",
    title: "Faster Response Times",
    description: "Reduce customer wait times and improve satisfaction with instant, intelligent responses.",
    mpid: "bf99aa5a-5015-491a-98f0-f4d24683fcd5"
  }, {
    icon: <Clock size={48} data-magicpath-id="1" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "24/7",
    title: "Always Available",
    description: "Never miss a customer inquiry with round-the-clock automated assistance.",
    mpid: "527dc416-5b6b-4fad-b58c-ed11f1f9e97a"
  }, {
    icon: <Heart size={48} data-magicpath-id="2" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "95%",
    title: "Customer Satisfaction",
    description: "Maintain consistent, professional communication that customers love.",
    mpid: "05c5fce6-6c6b-4e21-aa0a-eb1dbdf4ee1f"
  }, {
    icon: <Target size={48} data-magicpath-id="3" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "80%",
    title: "Time Saved",
    description: "Free up your team to focus on complex issues while AI handles routine inquiries.",
    mpid: "e4c9b4b8-cc5a-4a05-bbbb-9087a82c0a3f"
  }] as any[];
  return <section id="benefits" className="py-32 px-8 md:px-16 lg:px-24 bg-gray-50" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.05em'
  }} data-magicpath-id="4" data-magicpath-path="BenefitsSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="5" data-magicpath-path="BenefitsSection.tsx">
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
      }} data-magicpath-id="6" data-magicpath-path="BenefitsSection.tsx">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 leading-tight" data-magicpath-id="7" data-magicpath-path="BenefitsSection.tsx">
            Transform your<br data-magicpath-id="8" data-magicpath-path="BenefitsSection.tsx" />
            customer experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="9" data-magicpath-path="BenefitsSection.tsx">
            See the measurable impact on your business and customer relationships
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" data-magicpath-id="10" data-magicpath-path="BenefitsSection.tsx">
          {benefits.map((benefit, index) => <motion.div key={index} className="text-center group" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="BenefitsSection.tsx">
              <div className="space-y-6" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="BenefitsSection.tsx">
                {/* Icon */}
                <div className="flex justify-center text-gray-700 group-hover:text-pink-500 transition-colors duration-300" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknwon" data-magicpath-id="13" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.icon}
                </div>
                
                {/* Metric */}
                <div className="text-5xl md:text-6xl font-normal text-black" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="metric:string" data-magicpath-id="14" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.metric}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-normal text-black" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="15" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="16" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.description}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-24" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="17" data-magicpath-path="BenefitsSection.tsx">
          <motion.button className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-normal transition-all duration-200 shadow-sm hover:shadow-md" whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="18" data-magicpath-path="BenefitsSection.tsx">
            Start your free trial
          </motion.button>
        </motion.div>
      </div>
    </section>;
}