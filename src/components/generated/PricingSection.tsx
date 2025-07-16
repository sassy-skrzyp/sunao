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
    popular: false
  }, {
    name: "Professional",
    price: "99",
    period: "month",
    description: "Ideal for growing businesses",
    features: ["Up to 10,000 responses/month", "Advanced AI with learning", "Multi-platform integration", "Priority support", "Advanced analytics", "Custom brand voice", "Team collaboration"],
    popular: true
  }, {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: ["Unlimited responses", "Custom AI training", "Full API access", "Dedicated support", "Custom integrations", "Advanced security", "SLA guarantee", "White-label options"],
    popular: false
  }] as any[];
  return <section id="pricing" className="py-32 px-8 md:px-16 lg:px-24" style={{
    backgroundColor: '#f7f6f2',
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }}>
      <div className="max-w-7xl mx-auto">
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
      }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-8 leading-tight whitespace-nowrap" style={{
          letterSpacing: '-0.06em'
        }}>
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal" style={{
          letterSpacing: '-0.06em'
        }}>
            Choose the plan that fits your business needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
        }}>
              {/* Popular Badge */}
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-normal" style={{
              letterSpacing: '-0.06em'
            }}>
                    Most Popular
                  </span>
                </div>}

              <div className="space-y-8">
                {/* Plan Header */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-black" style={{
                letterSpacing: '-0.06em'
              }}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 font-normal" style={{
                letterSpacing: '-0.06em'
              }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    {plan.price !== "Custom" ? <>
                        <span className="text-5xl font-semibold text-black" style={{
                    letterSpacing: '-0.06em'
                  }}>
                          ${plan.price}
                        </span>
                        <span className="text-gray-600 font-normal" style={{
                    letterSpacing: '-0.06em'
                  }}>
                          /{plan.period}
                        </span>
                      </> : <span className="text-5xl font-semibold text-black" style={{
                  letterSpacing: '-0.06em'
                }}>
                        {plan.price}
                      </span>}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-3">
                        <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-normal" style={{
                    letterSpacing: '-0.06em'
                  }}>
                          {feature}
                        </span>
                      </li>)}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button className={`w-full py-4 rounded-full text-lg font-normal transition-all duration-200 ${plan.popular ? 'bg-pink-500 hover:bg-pink-600 text-white shadow-sm hover:shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-black'}`} style={{
              letterSpacing: '-0.06em',
              fontWeight: "600"
            }} whileHover={{
              scale: 1.02,
              y: -1
            }} whileTap={{
              scale: 0.98
            }}>
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
      }}>
          <p className="text-gray-600 mb-6 font-normal" style={{
          letterSpacing: '-0.06em'
        }}>
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-200 underline underline-offset-4 font-normal" style={{
          letterSpacing: '-0.06em'
        }}>
            View detailed feature comparison
          </a>
        </motion.div>
      </div>
    </section>;
}