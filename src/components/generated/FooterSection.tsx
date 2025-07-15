"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features",
      mpid: "edebc981-f548-49f7-ae28-d039ab4bf221"
    }, {
      name: "Benefits",
      href: "#benefits",
      mpid: "278245c2-3c5c-495b-b4ee-59a63dafc461"
    }, {
      name: "Pricing",
      href: "#pricing",
      mpid: "0e304537-a42f-4afd-b413-613b75576d42"
    }, {
      name: "API Documentation",
      href: "#",
      mpid: "71fbd261-6c77-4614-9654-6f58f8fb855c"
    }, {
      name: "Integrations",
      href: "#",
      mpid: "4745e7dc-edfc-41c4-9ac0-18cd26e14cba"
    }],
    company: [{
      name: "About",
      href: "#",
      mpid: "b75c50c7-4998-4f8e-9daf-20cc2a1a451c"
    }, {
      name: "Blog",
      href: "#",
      mpid: "9cb3d86a-b92a-4834-9eba-1428811e7ccd"
    }, {
      name: "Careers",
      href: "#",
      mpid: "d27a6d4b-b355-42d2-a77c-6aa773740881"
    }, {
      name: "Press",
      href: "#",
      mpid: "7e5927f1-d649-406b-9ba3-d9a9244cf11d"
    }, {
      name: "Contact",
      href: "#",
      mpid: "c1f133c1-eaf6-4ce4-a199-2bc808c0dede"
    }],
    support: [{
      name: "Help Center",
      href: "#",
      mpid: "282fa606-41ae-4261-b732-c88239696d7a"
    }, {
      name: "Community",
      href: "#",
      mpid: "2e2a2763-866a-4c5d-bf94-327fa2f51374"
    }, {
      name: "Status",
      href: "#",
      mpid: "0672f67c-39f3-4794-bc4f-a5964f020e2e"
    }, {
      name: "Security",
      href: "#",
      mpid: "73f1cb69-2010-40f6-a1be-cd85cb73e2db"
    }, {
      name: "Privacy",
      href: "#",
      mpid: "5dc1825a-0a30-4391-957c-4cd7057bbfeb"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Twitter",
    mpid: "1737ea7b-024f-451c-8647-4607593e96f3"
  }, {
    icon: <Linkedin size={24} data-magicpath-id="1" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "LinkedIn",
    mpid: "45d26fe3-dbb1-4078-a7ca-44e3c87686ab"
  }, {
    icon: <Github size={24} data-magicpath-id="2" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "GitHub",
    mpid: "89632a18-996e-4d11-8598-a34db9ee79fd"
  }, {
    icon: <Mail size={24} data-magicpath-id="3" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Email",
    mpid: "3b06f9ff-5b15-4848-8b67-65204150fac8"
  }] as any[];
  return <footer className="bg-gray-900 text-white py-24 px-8 md:px-16 lg:px-24" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.06em'
  }} data-magicpath-id="4" data-magicpath-path="FooterSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="5" data-magicpath-path="FooterSection.tsx">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16" data-magicpath-id="6" data-magicpath-path="FooterSection.tsx">
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
        }} data-magicpath-id="7" data-magicpath-path="FooterSection.tsx">
            <h3 className="text-2xl font-medium" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="8" data-magicpath-path="FooterSection.tsx">
              sunao 素直
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md font-normal" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="9" data-magicpath-path="FooterSection.tsx">
              Transform your customer communications with AI-powered responses that maintain your authentic voice across all platforms.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6" data-magicpath-id="10" data-magicpath-path="FooterSection.tsx">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} aria-label={social.label} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="11" data-magicpath-path="FooterSection.tsx">
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
        }} data-magicpath-id="12" data-magicpath-path="FooterSection.tsx">
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="13" data-magicpath-path="FooterSection.tsx">
              Product
            </h4>
            <ul className="space-y-3" data-magicpath-id="14" data-magicpath-path="FooterSection.tsx">
              {footerLinks.product.map((link, index) => <li key={index} data-magicpath-id="15" data-magicpath-path="FooterSection.tsx">
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
        }} data-magicpath-id="16" data-magicpath-path="FooterSection.tsx">
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="17" data-magicpath-path="FooterSection.tsx">
              Company
            </h4>
            <ul className="space-y-3" data-magicpath-id="18" data-magicpath-path="FooterSection.tsx">
              {footerLinks.company.map((link, index) => <li key={index} data-magicpath-id="19" data-magicpath-path="FooterSection.tsx">
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
        }} data-magicpath-id="20" data-magicpath-path="FooterSection.tsx">
            <h4 className="text-lg font-medium text-white" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="21" data-magicpath-path="FooterSection.tsx">
              Support
            </h4>
            <ul className="space-y-3" data-magicpath-id="22" data-magicpath-path="FooterSection.tsx">
              {footerLinks.support.map((link, index) => <li key={index} data-magicpath-id="23" data-magicpath-path="FooterSection.tsx">
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
      }} data-magicpath-id="24" data-magicpath-path="FooterSection.tsx">
          <div className="max-w-md mx-auto text-center space-y-6" data-magicpath-id="25" data-magicpath-path="FooterSection.tsx">
            <h4 className="text-xl font-medium" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="26" data-magicpath-path="FooterSection.tsx">
              Stay updated
            </h4>
            <p className="text-gray-400 font-normal" style={{
            letterSpacing: '-0.06em'
          }} data-magicpath-id="27" data-magicpath-path="FooterSection.tsx">
              Get the latest updates on new features and improvements.
            </p>
            <div className="flex space-x-4" data-magicpath-id="28" data-magicpath-path="FooterSection.tsx">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200 font-normal" style={{
              letterSpacing: '-0.06em'
            }} data-magicpath-id="29" data-magicpath-path="FooterSection.tsx" />
              <motion.button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-normal transition-colors duration-200" style={{
              letterSpacing: '-0.06em'
            }} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="30" data-magicpath-path="FooterSection.tsx">
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
      }} data-magicpath-id="31" data-magicpath-path="FooterSection.tsx">
          <p className="text-gray-400 text-sm font-normal" style={{
          letterSpacing: '-0.06em'
        }} data-magicpath-id="32" data-magicpath-path="FooterSection.tsx">
            © 2024 Sunao. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm" data-magicpath-id="33" data-magicpath-path="FooterSection.tsx">
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