"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
export default function PricingSection() {
  const plans = [{
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small teams getting started",
    features: ["Up to 1,000 responses/month", "Basic AI responses", "Email integration", "Standard support", "Basic analytics"],
    popular: false,
    mpid: "49958183-b8ae-4c21-aafe-c4f92a9b9b3f"
  }, {
    name: "Professional",
    price: "99",
    period: "month",
    description: "Ideal for growing businesses",
    features: ["Up to 10,000 responses/month", "Advanced AI with learning", "Multi-platform integration", "Priority support", "Advanced analytics", "Custom brand voice", "Team collaboration"],
    popular: true,
    mpid: "95bc29d7-0b50-41a4-80d7-ae109549f800"
  }, {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: ["Unlimited responses", "Custom AI training", "Full API access", "Dedicated support", "Custom integrations", "Advanced security", "SLA guarantee", "White-label options"],
    popular: false,
    mpid: "c6c6670a-e3ba-41db-99e9-132123495e1e"
  }] as any[];
  return <section id="pricing" className="py-32 px-8 md:px-16 lg:px-24 bg-white" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.05em'
  }} data-magicpath-id="0" data-magicpath-path="PricingSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="PricingSection.tsx">
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
      }} data-magicpath-id="2" data-magicpath-path="PricingSection.tsx">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 leading-tight" data-magicpath-id="3" data-magicpath-path="PricingSection.tsx">
            Simple, transparent<br data-magicpath-id="4" data-magicpath-path="PricingSection.tsx" />
            pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="5" data-magicpath-path="PricingSection.tsx">
            Choose the plan that fits your business needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" data-magicpath-id="6" data-magicpath-path="PricingSection.tsx">
          {plans.map((plan, index) => <motion.div key={index} className={`relative bg-white rounded-2xl p-8 lg:p-10 border transition-all duration-300 hover:shadow-lg ${plan.popular ? 'border-pink-200 shadow-md ring-1 ring-pink-100' : 'border-gray-200 hover:border-gray-300'}`} initial={{
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
        }} data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="PricingSection.tsx">
              {/* Popular Badge */}
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="PricingSection.tsx">
                  <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-normal" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="PricingSection.tsx">
                    Most Popular
                  </span>
                </div>}

              <div className="space-y-8" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="PricingSection.tsx">
                {/* Plan Header */}
                <div className="space-y-4" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="PricingSection.tsx">
                  <h3 className="text-2xl font-normal text-black" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="12" data-magicpath-path="PricingSection.tsx">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="13" data-magicpath-path="PricingSection.tsx">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-2" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="PricingSection.tsx">
                  <div className="flex items-baseline space-x-2" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="PricingSection.tsx">
                    {plan.price !== "Custom" ? <>
                        <span className="text-5xl font-normal text-black" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="16" data-magicpath-path="PricingSection.tsx">
                          ${plan.price}
                        </span>
                        <span className="text-gray-600" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="17" data-magicpath-path="PricingSection.tsx">
                          /{plan.period}
                        </span>
                      </> : <span className="text-5xl font-normal text-black" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="18" data-magicpath-path="PricingSection.tsx">
                        {plan.price}
                      </span>}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="PricingSection.tsx">
                  <ul className="space-y-3" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="PricingSection.tsx">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="PricingSection.tsx">
                        <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="PricingSection.tsx" />
                        <span className="text-gray-700" data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="PricingSection.tsx">
                          {feature}
                        </span>
                      </li>)}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button className={`w-full py-4 rounded-full text-lg font-normal transition-all duration-200 ${plan.popular ? 'bg-pink-500 hover:bg-pink-600 text-white shadow-sm hover:shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-black'}`} whileHover={{
              scale: 1.02,
              y: -1
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-uuid={(plan as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="PricingSection.tsx">
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </motion.button>
              </div>
            </motion.div>)}
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="25" data-magicpath-path="PricingSection.tsx">
          <p className="text-gray-600 mb-6" data-magicpath-id="26" data-magicpath-path="PricingSection.tsx">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-200 underline underline-offset-4">
            View detailed feature comparison
          </a>
        </motion.div>
      </div>
    </section>;
}