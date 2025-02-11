"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const links = ["About", "Services", "Projects", "Contact"];

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
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <Link href="/" className="hover:text-[#66d9ff] transition">{item}</Link>
                  </motion.li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {links.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="group relative">
                {item}
                <motion.span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#66d9ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
