"use client";

import React from "react";
import { Menu, User, Briefcase, Layers, Mail } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "/", icon: <User className="h-5 w-5 mr-2" /> },
  { name: "Services", href: "/", icon: <Briefcase className="h-5 w-5 mr-2" /> },
  { name: "Projects", href: "/", icon: <Layers className="h-5 w-5 mr-2" /> },
  { name: "Contact", href: "/", icon: <Mail className="h-5 w-5 mr-2" /> },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-[#0a192f] via-[#0f3057] to-[#00a8cc] p-4 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">MyBrand</Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
          <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent border">
              <Menu className="h-6 w-6 text-[#ffffff] hover:text-[#0f3057]" />
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[rgba(10,25,47,0.9)] backdrop-blur-lg border-r border-[#00a8cc] text-white">
              <ul className="space-y-6 mt-8 text-lg font-medium">
                {links.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Link href={item.href} className="relative group flex items-center">
                      {item.icon}
                      {item.name}
                      <motion.span 
                        className="absolute left-0 bottom-0 h-[2px] bg-[#66d9ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                        style={{ width: "45%" }} 
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {links.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
              <Link href={item.href} className="group relative">
                {item.name}
                <motion.span 
                  className="absolute left-0 bottom-0 h-[2px] bg-[#66d9ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ width: "100%" }} 
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;