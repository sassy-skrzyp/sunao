"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features"
    }, {
      name: "Benefits",
      href: "#benefits"
    }, {
      name: "Pricing",
      href: "#pricing"
    }, {
      name: "API Documentation",
      href: "#"
    }, {
      name: "Integrations",
      href: "#"
    }],
    company: [{
      name: "About",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Press",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }],
    support: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Community",
      href: "#"
    }, {
      name: "Status",
      href: "#"
    }, {
      name: "Security",
      href: "#"
    }, {
      name: "Privacy",
      href: "#"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} />,
    href: "#",
    label: "Twitter"
  }, {
    icon: <Linkedin size={24} />,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: <Github size={24} />,
    href: "#",
    label: "GitHub"
  }, {
    icon: <Mail size={24} />,
    href: "#",
    label: "Email"
  }] as any[];
  return <footer className="bg-gray-900 text-white py-24 px-8 md:px-16 lg:px-24" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2 space-y-6" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-medium" style={{
            letterSpacing: '-0.06em'
          }}>
              sunao 素直
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md font-normal" style={{
            letterSpacing: '-0.06em'
          }}>
              Transform your customer communications with AI-powered responses that maintain your authentic voice across all platforms.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} className="text-gray-400 hover:text-pink-500 transition-colors duration-200" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} aria-label={social.label}>
                  {social.icon}
                </motion.a>)}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }}>
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
                letterSpacing: '-0.06em'
              }}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
                letterSpacing: '-0.06em'
              }}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut"
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }}>
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
                letterSpacing: '-0.06em'
              }}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div className="border-t border-gray-800 pt-12 mb-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }}>
          <div className="max-w-md mx-auto text-center space-y-6">
            <h4 className="text-xl font-medium" style={{
            letterSpacing: '-0.06em'
          }}>
              Stay updated
            </h4>
            <p className="text-gray-400 font-normal" style={{
            letterSpacing: '-0.06em'
          }}>
              Get the latest updates on new features and improvements.
            </p>
            <div className="flex space-x-4">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200 font-normal" style={{
              letterSpacing: '-0.06em'
            }} />
              <motion.button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-normal transition-colors duration-200" style={{
              letterSpacing: '-0.06em'
            }} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut"
      }} viewport={{
        once: true
      }}>
          <p className="text-gray-400 text-sm font-normal" style={{
          letterSpacing: '-0.06em'
        }}>© 2025 Sunao. All rights reserved.</p>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }}>
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }}>
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-normal" style={{
            letterSpacing: '-0.06em'
          }}>
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>;
}