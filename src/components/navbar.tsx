"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot, Cpu, BarChart, DollarSign, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Technology", icon: <Cpu size={20} className="text-purple-400" />, link: "#technology" },
    { name: "Analysis", icon: <BarChart size={20} className="text-purple-400" />, link: "#analysis" },
    { name: "Pricing", icon: <DollarSign size={20} className="text-purple-400" />, link: "#pricing" },
    { name: "Contact", icon: <Mail size={20} className="text-purple-400" />, link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo with Animated Robot Icon */}
        <motion.div 
          className="text-2xl font-bold text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ rotate: 20, scale: 1.2 }} transition={{ duration: 0.3 }}>
            <Bot size={28} className="text-purple-400" />
          </motion.div>
          <span className="text-purple-400">Agentia</span> World
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.a 
              key={index} 
              href={item.link} 
              className="text-white hover:text-purple-400 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a 
          href="#discover"
          className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <Bot size={22} />
          Discover More
        </motion.a>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-black/90 text-white absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className="text-lg flex items-center gap-2 hover:text-purple-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a 
              href="#discover"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Bot size={22} />
              Discover More
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

