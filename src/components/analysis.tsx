"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Analysis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Engagement",
        data: [30, 45, 60, 75, 90, 120],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4BC0C0",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#4BC0C0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    },
    interaction: {
      mode: "nearest" as const,
      intersect: false,
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <section id="analysis" className="relative py-20  w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-10 text-center overflow-hidden">
      {/* Particle Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/20 rounded-full"
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
        data-aos="fade-down"
        className="text-3xl md:text-5xl pt-14 lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ textShadow: "0px 0px 12px rgba(255, 0, 255, 0.8)" }}
      >
        AI-Powered Analysis
      </motion.h1>
      {/* Subheading */}
      <motion.p
        data-aos="fade-up"
        className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-2xl"
      >
        Unlock insights with AI-driven data visualization and predictive
        analytics.
      </motion.p>

      {/* Chart Section */}
      <motion.div
        data-aos="fade-up"
        className="w-full md:w-3/4 lg:w-3/4 xl:w-4/5 mt-12 p-6 bg-white/10 rounded-xl shadow-xl backdrop-blur-lg border border-white/20"
      >
        <div className="h-80 md:h-96">
          <Line data={data} options={options} />
        </div>
      </motion.div>
    </section>
  );
};

export default Analysis;
