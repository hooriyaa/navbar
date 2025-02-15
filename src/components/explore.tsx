"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaRobot, FaLightbulb, FaCogs, FaTimes } from "react-icons/fa";

const Explore = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="relative w-full py-16 bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
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


      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center items-center gap-3" data-aos="fade-up">
        Explore the Future of {" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          AI
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-2xl" data-aos="fade-up" data-aos-delay="300">
        Dive into the world of Agentic AI with cutting-edge innovations and intelligent automation.
      </p>

      {/* Feature Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 text-center" data-aos="flip-left">
          <FaRobot className="text-4xl text-pink-500 mb-4 animate-pulse" />
          <h3 className="text-xl font-bold">AI-Powered Agents</h3>
          <p className="text-gray-400 mt-2">Autonomous AI systems that learn, adapt, and optimize processes in real-time.</p>
        </div>
        
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 text-center" data-aos="flip-up" data-aos-delay="200">
          <FaLightbulb className="text-4xl text-purple-400 mb-4 animate-pulse" />
          <h3 className="text-xl font-bold">Intelligent Insights</h3>
          <p className="text-gray-400 mt-2">Predictive analytics and machine learning models to enhance decision-making.</p>
        </div>
        
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 text-center" data-aos="flip-right" data-aos-delay="400">
          <FaCogs className="text-4xl text-blue-400 mb-4 animate-spin-slow" />
          <h3 className="text-xl font-bold">Automation & Efficiency</h3>
          <p className="text-gray-400 mt-2">Streamlining operations and optimizing workflows with cutting-edge AI technology.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 flex gap-4 flex-col sm:flex-row" data-aos="fade-up" data-aos-delay="600">
        <Button
          variant="default"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:scale-110 transition-transform rounded-xl px-8 text-lg font-semibold tracking-wide py-5"
          onClick={handleButtonClick}
        >
          Get Started
        </Button>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition rounded-xl px-8 py-5 text-lg font-semibold tracking-wide"
          onClick={handleButtonClick}
        >
          📖 Learn More
        </Button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg w-96 text-center relative" data-aos="zoom-in">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setShowPopup(false)}>
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-2xl font-bold mb-4">🚀 Special AI Offer!</h2>
            <p className="text-gray-700 mb-4">Unlock the power of AI with our latest tools and insights. Get started today!</p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition" onClick={() => setShowPopup(false)}>
              Claim Offer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;