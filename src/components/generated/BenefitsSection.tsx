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
    image: "https://cdn.midjourney.com/4c2c8075-5439-4ace-9550-12207773dc2a/0_2.png",
    mpid: "e7f1e5f3-69e6-4665-ba77-c7a362ee877d"
  }, {
    icon: <Clock size={48} data-magicpath-id="1" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "24/7",
    title: "Always Available",
    description: "Never miss a customer inquiry with round-the-clock automated assistance.",
    image: "https://cdn.midjourney.com/cc5d14ef-fc3e-42dd-804e-f47b2b672776/0_1.png",
    mpid: "b422d1d7-64b2-4a71-9493-b567a31b4e49"
  }, {
    icon: <Heart size={48} data-magicpath-id="2" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "95%",
    title: "Customer Satisfaction",
    description: "Maintain consistent, professional communication that customers love.",
    image: "https://cdn.midjourney.com/bc953087-188d-41a9-a8d8-bed9931fcdee/0_0.png",
    mpid: "7883ce9a-0151-4cd4-ba35-befc10feb597"
  }, {
    icon: <Target size={48} data-magicpath-id="3" data-magicpath-path="BenefitsSection.tsx" />,
    metric: "80%",
    title: "Time Saved",
    description: "Free up your team to focus on complex issues while AI handles routine inquiries.",
    image: "https://cdn.midjourney.com/e837e592-91e3-4429-bee1-011188ee68d6/0_3.png",
    mpid: "cfd46fcb-a86a-4b22-b9b4-23356522f41b"
  }] as any[];
  return <section id="benefits" className="py-32 px-8 md:px-16 lg:px-24" style={{
    backgroundColor: '#f7f6f2',
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
              <div className="w-full lg:w-1/2 h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="BenefitsSection.tsx">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover rounded-2xl" data-magicpath-uuid={(benefit as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="12" data-magicpath-path="BenefitsSection.tsx" />
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