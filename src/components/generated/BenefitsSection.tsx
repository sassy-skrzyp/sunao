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
    placeholder: "Chart Visualization",
    mpid: "306dc09e-612a-4746-8655-477bc033dfcc"
  }, {
    icon: <Clock size={48} data-magicpath-id="1" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "24/7",
    title: "Always Available",
    description: "Never miss a customer inquiry with round-the-clock automated assistance.",
    placeholder: "Process Diagram",
    mpid: "77b01ce6-211f-4f8a-bc09-516fd09570f7"
  }, {
    icon: <Heart size={48} data-magicpath-id="2" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "95%",
    title: "Customer Satisfaction",
    description: "Maintain consistent, professional communication that customers love.",
    placeholder: "Customer Journey",
    mpid: "43d0f93e-db23-43c4-bd9f-50e241c6371d"
  }, {
    icon: <Target size={48} data-magicpath-id="3" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "80%",
    title: "Time Saved",
    description: "Free up your team to focus on complex issues while AI handles routine inquiries.",
    placeholder: "Analytics Dashboard",
    mpid: "d57541ec-ea2d-4385-8e25-6dcd432212d3"
  }] as any[];
  return <section id="benefits" className="py-32 px-8 md:px-16 lg:px-24 bg-gray-50" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-8 leading-tight whitespace-nowrap" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="7" data-magicpath-path="BenefitsSection.tsx">
            Transform your customer experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="8" data-magicpath-path="BenefitsSection.tsx">
            See the measurable impact on your business and customer relationships
          </p>
        </motion.div>

        {/* Benefits Cards - Single Column with Alternating Layout */}
        <div className="space-y-32" data-magicpath-id="9" data-magicpath-path="BenefitsSection.tsx">
          {benefits.map((benefit, index) => <motion.div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="BenefitsSection.tsx">
              {/* Visual Placeholder */}
              <div className="w-full lg:w-1/2 h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-sm" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="BenefitsSection.tsx">
                <span className="text-gray-500 text-lg font-medium" style={{
              letterSpacing: '-0.06em'
            }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="placeholder:unknown" data-magicpath-id="12" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.placeholder}
                </span>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="BenefitsSection.tsx">
                {/* Icon */}
                <div className="flex justify-center lg:justify-start text-gray-700 group-hover:text-pink-500 transition-colors duration-300" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="14" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.icon}
                </div>
                
                {/* Metric */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black" style={{
              letterSpacing: '-0.06em'
            }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="metric:unknown" data-magicpath-id="15" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.metric}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-medium text-black" style={{
              letterSpacing: '-0.06em'
            }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="16" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal" style={{
              letterSpacing: '-0.06em'
            }} data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="17" data-magicpath-path="BenefitsSection.tsx">
                  {benefit.description}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-32" initial={{
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
      }} data-magicpath-id="18" data-magicpath-path="BenefitsSection.tsx">
          <motion.button className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-normal transition-all duration-200 shadow-sm hover:shadow-md" style={{
          letterSpacing: '-0.06em'
        }} whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="19" data-magicpath-path="BenefitsSection.tsx">
            Start your free trial
          </motion.button>
        </motion.div>
      </div>
    </section>;
}