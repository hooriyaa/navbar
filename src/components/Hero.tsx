"use client";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaRocket } from "react-icons/fa";

export default function HeroSection() {
  const aiMessages = [
    "I can help optimize your workflows with AI 🤖",
    "Let's build something intelligent together 🚀",
    "AI can boost your productivity ⚡",
    "Experience the future of automation ✨",
  ];

  return (
    <section className="relative w-full sm:pt-36 pb-28 pt-36 sm:min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-8 text-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animate-gradient "></div>

      {/* Moving Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-white/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: ["100vh", "-10vh"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold items-center md:flex justify-center gap-2 sm:gap-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaRocket className="text-pink-500 animate-bounce text-4xl lg:text-5xl " />
        Welcome To{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
          Agentia World
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <FaBrain className="text-purple-400" /> The Future of Modern AI Agents
      </motion.p>

      {/* AI Assistant Box */}
      <motion.div
        className="relative mt-8 p-4 sm:p-6 md:p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 flex items-center gap-3 sm:gap-4 max-w-xs sm:max-w-md md:max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.3)",
        }}
      >
        <FaRobot className="text-2xl sm:text-3xl md:text-4xl text-pink-500 animate-pulse" />
        <p className="text-sm sm:text-base md:text-lg text-white">
          <motion.span
            key={aiMessages[0]}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            {aiMessages[Math.floor(Math.random() * aiMessages.length)]}
          </motion.span>
        </p>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.a
        href="#explore"
        className="relative mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] 
            before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent 
            before:animate-pulse hover:before:border-pink-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          animate={{ y: [0, -2, 0, 2, 0], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
         Explore AI Agents
        </motion.span>
      </motion.a>
    </section>
  );
}
