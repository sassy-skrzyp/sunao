"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features",
      mpid: "41dc9f8a-93b1-4639-b858-751a920b407d"
    }, {
      name: "Benefits",
      href: "#benefits",
      mpid: "4243e986-cea9-4f2d-8238-8299776c90d8"
    }, {
      name: "Pricing",
      href: "#pricing",
      mpid: "732d2ec1-df59-4c04-8d6d-d184eae2e3a9"
    }, {
      name: "API Documentation",
      href: "#",
      mpid: "c1902352-e820-4193-80e3-a752f4b0f1be"
    }, {
      name: "Integrations",
      href: "#",
      mpid: "7058045e-485a-475c-b55a-e996c3e6a94c"
    }],
    company: [{
      name: "About",
      href: "#",
      mpid: "cf2d4a96-9302-40cc-8ecd-19d8d60319f2"
    }, {
      name: "Blog",
      href: "#",
      mpid: "3310ebbe-c563-4a5c-b0d9-f152b2e2efc7"
    }, {
      name: "Careers",
      href: "#",
      mpid: "d43e94f5-fb22-4274-beac-6288ecbd3f69"
    }, {
      name: "Press",
      href: "#",
      mpid: "00562511-5309-4e8d-b6bf-34d0714cd1d8"
    }, {
      name: "Contact",
      href: "#",
      mpid: "6af466e4-0619-4b48-8535-e0bd7e3593f2"
    }],
    support: [{
      name: "Help Center",
      href: "#",
      mpid: "2e7dd12f-171b-4f22-b865-2e3146d0c0ef"
    }, {
      name: "Community",
      href: "#",
      mpid: "c9bd67f6-f57a-42e0-ac7b-069f595f5592"
    }, {
      name: "Status",
      href: "#",
      mpid: "fe7b9450-edb0-4744-8b4d-d1b9a5d69517"
    }, {
      name: "Security",
      href: "#",
      mpid: "ba4d0cbb-f8ae-4df8-85e4-59ee280cfcca"
    }, {
      name: "Privacy",
      href: "#",
      mpid: "bc2b4418-b94e-44ab-8b50-5e8b2e628aa9"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Twitter",
    mpid: "a23c33e1-3a70-4125-b2ce-2e060b28e99f"
  }, {
    icon: <Linkedin size={24} data-magicpath-id="1" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "LinkedIn",
    mpid: "dfb7c3ae-8001-4797-81c9-1138fd65bf8d"
  }, {
    icon: <Github size={24} data-magicpath-id="2" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "GitHub",
    mpid: "f144b93b-8828-4ecf-8302-0908da6ddb9f"
  }, {
    icon: <Mail size={24} data-magicpath-id="3" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Email",
    mpid: "86a516da-2aa3-4f22-8bf8-3431d52b70ae"
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