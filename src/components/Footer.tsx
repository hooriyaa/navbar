"use client";

import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import robotImage from "../../public/robotImage.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#15002f] via-[#0a001a] to-black text-white py-12 px-8 sm:px-16 lg:px-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-transparent to-blue-900 opacity-20 blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section - Logo & Socials */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Agentic World
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-lg">
            Building the future with AI & Robotics. Stay connected and explore the next generation of innovation.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition text-2xl">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Middle Section - Email Subscription */}
        <div className="w-full max-w-md text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-300">Join Our AI Revolution</h3>
          <p className="text-gray-400 text-sm">Stay updated with AI trends & innovations.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-[#1a1a2e] border border-gray-700 focus:border-purple-500 text-white placeholder-gray-400 outline-none"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-r-lg text-white font-semibold hover:opacity-80 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section - Cute Robot Image */}
        <motion.div 
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-40 sm:w-48 md:w-56 lg:w-64"
        >
          <Image src={robotImage} alt="Robot Mascot" width={300} height={300} className="drop-shadow-xl" />
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-400 text-sm">
  {/* Product Section */}
  <div>
    <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">Product</h4>
    <ul className="space-y-2">
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Features</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Pricing</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">API</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Documentation</Link></li>
    </ul>
  </div>

  {/* Company Section */}
  <div>
    <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">Company</h4>
    <ul className="space-y-2">
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">About</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Blog</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Careers</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Contact</Link></li>
    </ul>
  </div>

  {/* Resources Section */}
  <div>
    <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">Resources</h4>
    <ul className="space-y-2">
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Community</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Support</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Privacy</Link></li>
      <li><Link href="/" className="hover:text-purple-400 hover:underline transition">Terms</Link></li>
    </ul>
  </div>
</div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-xs mt-8">
        <p>© {new Date().getFullYear()} Agentic World. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
