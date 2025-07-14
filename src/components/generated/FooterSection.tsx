"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
export default function FooterSection() {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features",
      mpid: "922e25dc-51f1-4a44-b92f-74b4834c800e"
    }, {
      name: "Benefits",
      href: "#benefits",
      mpid: "760e23d5-cb5d-4e41-b4d6-7ee34509a67e"
    }, {
      name: "Pricing",
      href: "#pricing",
      mpid: "e12850b6-a85a-4188-b7fa-815ce45d0625"
    }, {
      name: "API Documentation",
      href: "#",
      mpid: "71decc79-73b1-4ba5-a8fa-bcc6b521593c"
    }, {
      name: "Integrations",
      href: "#",
      mpid: "9ae6744f-38e6-4155-986f-44d8f6c4dfad"
    }],
    company: [{
      name: "About",
      href: "#",
      mpid: "aed022e5-7e5a-4d15-9489-29aea3c1e115"
    }, {
      name: "Blog",
      href: "#",
      mpid: "7b23c4f4-3b72-4c5b-a315-f0b82c2067b4"
    }, {
      name: "Careers",
      href: "#",
      mpid: "c6a48115-6d15-4e34-93f8-fa34edcda073"
    }, {
      name: "Press",
      href: "#",
      mpid: "98d6d7dc-ab15-48a5-84eb-ee3627a10d03"
    }, {
      name: "Contact",
      href: "#",
      mpid: "faeab080-d499-4a62-8d73-5718158b0d30"
    }],
    support: [{
      name: "Help Center",
      href: "#",
      mpid: "fc1d96e5-1588-4b14-9ab3-aedaa19193ab"
    }, {
      name: "Community",
      href: "#",
      mpid: "a5228545-8f88-4a83-bd97-e0f084c97486"
    }, {
      name: "Status",
      href: "#",
      mpid: "87f43a1f-c7bf-4ffc-952e-197a0e58d688"
    }, {
      name: "Security",
      href: "#",
      mpid: "46e069ff-78c0-4ba4-8005-c02e66305b1d"
    }, {
      name: "Privacy",
      href: "#",
      mpid: "44680c9d-78e6-4846-9659-66e1761ca39f"
    }]
  };
  const socialLinks = [{
    icon: <Twitter size={24} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Twitter",
    mpid: "2b660998-0e7f-4ce9-bd83-b9f8cff269b2"
  }, {
    icon: <Linkedin size={24} data-magicpath-id="1" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "LinkedIn",
    mpid: "d482ca7b-76bd-4469-ae3a-ab96263082f5"
  }, {
    icon: <Github size={24} data-magicpath-id="2" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "GitHub",
    mpid: "5002d915-bbac-4e6f-b456-2fa7673d4acd"
  }, {
    icon: <Mail size={24} data-magicpath-id="3" data-magicpath-path="FooterSection.tsx" />,
    href: "#",
    label: "Email",
    mpid: "e620cd99-bd3c-4f0f-92f5-d437d6d48307"
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