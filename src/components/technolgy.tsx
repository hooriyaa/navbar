"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaLock, FaSatelliteDish } from "react-icons/fa";

const technologies = [
  {
    name: "Artificial Intelligence",
    description: "Cutting-edge AI models powering automation.",
    icon: FaRobot,
    glow: "hover:shadow-blue-500",
    color: "text-blue-400",
  },
  {
    name: "Machine Learning",
    description: "Training intelligent models for advanced analytics.",
    icon: FaBrain,
    glow: "hover:shadow-yellow-500",
    color: "text-yellow-400",
  },
  {
    name: "Blockchain",
    description: "Secure decentralized solutions for the future.",
    icon: FaLock,
    glow: "hover:shadow-green-500",
    color: "text-green-400",
  },
  {
    name: "Quantum Computing",
    description: "Revolutionizing computation with quantum mechanics.",
    icon: FaSatelliteDish,
    glow: "hover:shadow-purple-500",
    color: "text-purple-400",
  },
];

const Technologies = () => {
  const [rotations, setRotations] = useState(technologies.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleRotate = (index: number) => {
    setRotations((prev) => prev.map((r, i) => (i === index ? r + 360 : r)));
  };

  return (
    <section
      id="technology"
      className="relative w-full sm:pt-36 pb-28 pt-36 sm:min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-8 text-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
            }}
            animate={{
              y: ["100vh", "-10vh"],
              opacity: [0.1, 0.5, 0.1],
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
      <h1
        data-aos="fade-down"
        className="text-3xl md:text-5xl lg:text-6xl pb-4 font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse"
      >
        Technologies We Use
      </h1>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10 mt-10 w-full max-w-5xl">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              data-aos="zoom-in"
              className={`p-6 flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-105 ${tech.glow} hover:shadow-[0_0_20px]`}
            >
              <motion.div
                className="w-16 h-16 flex items-center justify-center cursor-pointer"
                animate={{ rotate: rotations[index] }}
                transition={{ duration: 0.5 }}
                onClick={() => handleRotate(index)}
              >
                <IconComponent
                  className={`${tech.color} w-12 h-12 sm:w-14 sm:h-14`}
                />
              </motion.div>
              <p className="mt-3 text-lg sm:text-xl font-bold text-white">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
