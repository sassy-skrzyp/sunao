"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features",
      mpid: "293a3369-14b1-4216-a640-4767e3f27c4a"
    }, {
      name: "Benefits",
      href: "#benefits",
      mpid: "8987db4a-c2be-46cc-b60d-f9f1a8cfb921"
    }, {
      name: "Pricing",
      href: "#pricing",
      mpid: "a11f4384-bc30-4c93-bfe7-d7c15019c809"
    }, {
      name: "API Documentation",
      href: "#",
      mpid: "6eff4cf7-dfea-4335-8b1f-5364643a1f06"
    }, {
      name: "Integrations",
      href: "#",
      mpid: "d6e08343-b397-4844-ac60-d820f2ceecea"
    }],
    company: [{
      name: "About",
      href: "#",
      mpid: "fe16e7e4-a23c-4f33-9648-0b8d72702420"
    }, {
      name: "Blog",
      href: "#",
      mpid: "42b25e0b-eddb-4ff5-8f95-aa9c71f24df1"
    }, {
      name: "Careers",
      href: "#",
      mpid: "b0cfdb47-a62d-4e48-8a11-51411964c1d8"
    }, {
      name: "Press",
      href: "#",
      mpid: "47599a03-f814-4546-aa2b-3b27cd6e42f8"
    }, {
      name: "Contact",
      href: "#",
      mpid: "6429924e-fdf5-43a2-bfcd-fc3ae6150788"
    }],
    support: [{
      name: "Help Center",
      href: "#",
      mpid: "ad5dd333-f0a5-46a9-b824-9bd970e6a19e"
    }, {
      name: "Community",
      href: "#",
      mpid: "e6373397-4821-419b-b714-e4987bd923cd"
    }, {
      name: "Status",
      href: "#",
      mpid: "080ef934-8e02-41d3-a712-c2a97128a560"
    }, {
      name: "Security",
      href: "#",
      mpid: "1ada9d44-4de5-4613-8f46-e9ffe79a3785"
    }, {
      name: "Privacy",
      href: "#",
      mpid: "a01a81aa-6094-4555-a545-24bb2e03409c"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Twitter",
    mpid: "0e952910-210d-46c0-a5fb-681be38a9155"
  }, {
    icon: <Linkedin size={24} data-magicpath-id="1" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "LinkedIn",
    mpid: "7f34b1d3-c699-4822-8361-804a3adde5ec"
  }, {
    icon: <Github size={24} data-magicpath-id="2" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "GitHub",
    mpid: "daed4f37-db06-44be-b468-bf6b1b2a4a04"
  }, {
    icon: <Mail size={24} data-magicpath-id="3" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Email",
    mpid: "e8545304-bf5b-43f9-bcb2-adad8e16bd29"
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