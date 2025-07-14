"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features",
      mpid: "58f25dc8-852b-4c8a-86e3-0342eacc5f32"
    }, {
      name: "Benefits",
      href: "#benefits",
      mpid: "36aa62f5-999d-4d1e-a1c7-6fed81b56ac5"
    }, {
      name: "Pricing",
      href: "#pricing",
      mpid: "d5c00d6e-4211-4d7e-840a-e850d5ad1b50"
    }, {
      name: "API Documentation",
      href: "#",
      mpid: "00aaab07-69ca-49f6-b7f5-50f89c5c588d"
    }, {
      name: "Integrations",
      href: "#",
      mpid: "6d07c969-4936-4737-870a-75b56bf65839"
    }],
    company: [{
      name: "About",
      href: "#",
      mpid: "329ae592-57de-4c7d-9e61-57182d94cb72"
    }, {
      name: "Blog",
      href: "#",
      mpid: "41de97e0-e4aa-41f1-86f9-198448a2de5f"
    }, {
      name: "Careers",
      href: "#",
      mpid: "e2841698-f88c-44b1-9d59-2bf9f3e1c9ec"
    }, {
      name: "Press",
      href: "#",
      mpid: "0d920f94-03b8-4bb5-9282-cfd6b2fd310c"
    }, {
      name: "Contact",
      href: "#",
      mpid: "63ab40df-ff05-40f3-9a61-3565773adf7e"
    }],
    support: [{
      name: "Help Center",
      href: "#",
      mpid: "e4a2b068-3815-47dd-94cf-0bed160b36f6"
    }, {
      name: "Community",
      href: "#",
      mpid: "ce3c48c7-bbca-4777-b843-e4d0c5b3a8b4"
    }, {
      name: "Status",
      href: "#",
      mpid: "71d2cd18-2428-4b12-987d-8cf8a8bc192c"
    }, {
      name: "Security",
      href: "#",
      mpid: "935c66a1-318e-4135-a767-602764a9295a"
    }, {
      name: "Privacy",
      href: "#",
      mpid: "ed8f1f50-4ffe-4c31-94c4-b39b7c55b48c"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Twitter",
    mpid: "2975a544-ca1f-47d9-86b1-c4e9e7dbc2ea"
  }, {
    icon: <Linkedin size={24} data-magicpath-id="1" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "LinkedIn",
    mpid: "111e95b5-5979-4481-80cc-c15a0eabbde6"
  }, {
    icon: <Github size={24} data-magicpath-id="2" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "GitHub",
    mpid: "0950f55e-c474-487a-84f4-66e4ca2bc4ea"
  }, {
    icon: <Mail size={24} data-magicpath-id="3" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Email",
    mpid: "8323f321-86fc-4d40-a5e1-2dd7de611271"
  }] as any[];
  return <footer className="bg-gray-900 text-white py-24 px-8 md:px-16 lg:px-24" style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.05em'
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
            <h3 className="text-2xl font-normal" data-magicpath-id="8" data-magicpath-path="FooterSection.tsx">
              sunao 素直
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md" data-magicpath-id="9" data-magicpath-path="FooterSection.tsx">
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
            <h4 className="text-lg font-normal text-white" data-magicpath-id="13" data-magicpath-path="FooterSection.tsx">
              Product
            </h4>
            <ul className="space-y-3" data-magicpath-id="14" data-magicpath-path="FooterSection.tsx">
              {footerLinks.product.map((link, index) => <li key={index} data-magicpath-id="15" data-magicpath-path="FooterSection.tsx">
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
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
            <h4 className="text-lg font-normal text-white" data-magicpath-id="17" data-magicpath-path="FooterSection.tsx">
              Company
            </h4>
            <ul className="space-y-3" data-magicpath-id="18" data-magicpath-path="FooterSection.tsx">
              {footerLinks.company.map((link, index) => <li key={index} data-magicpath-id="19" data-magicpath-path="FooterSection.tsx">
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
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
            <h4 className="text-lg font-normal text-white" data-magicpath-id="21" data-magicpath-path="FooterSection.tsx">
              Support
            </h4>
            <ul className="space-y-3" data-magicpath-id="22" data-magicpath-path="FooterSection.tsx">
              {footerLinks.support.map((link, index) => <li key={index} data-magicpath-id="23" data-magicpath-path="FooterSection.tsx">
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
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
            <h4 className="text-xl font-normal" data-magicpath-id="26" data-magicpath-path="FooterSection.tsx">
              Stay updated
            </h4>
            <p className="text-gray-400" data-magicpath-id="27" data-magicpath-path="FooterSection.tsx">
              Get the latest updates on new features and improvements.
            </p>
            <div className="flex space-x-4" data-magicpath-id="28" data-magicpath-path="FooterSection.tsx">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200" data-magicpath-id="29" data-magicpath-path="FooterSection.tsx" />
              <motion.button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-normal transition-colors duration-200" whileHover={{
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
          <p className="text-gray-400 text-sm" data-magicpath-id="32" data-magicpath-path="FooterSection.tsx">
            © 2024 Sunao. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm" data-magicpath-id="33" data-magicpath-path="FooterSection.tsx">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>;
}