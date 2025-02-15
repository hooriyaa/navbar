"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Bot, Sparkles, Brain, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to artificial intelligence models that can make autonomous decisions, adapt to environments, and optimize tasks without direct human intervention.",
    icon: <Brain className="text-pink-400" size={22} />,
  },
  {
    question: "How does Agentic AI work?",
    answer:
      "Agentic AI operates using advanced machine learning, reinforcement learning, and neural networks to analyze data, predict outcomes, and act accordingly.",
    icon: <Sparkles className="text-purple-400" size={22} />,
  },
  {
    question: "What are the key applications of Agentic AI?",
    answer:
      "Agentic AI is used in robotics, autonomous systems, smart assistants, AI-driven research, financial analysis, and self-optimizing workflows.",
    icon: <Bot className="text-pink-400" size={22} />,
  },
  {
    question: "Is Agentic AI the same as traditional AI?",
    answer:
      "No. Traditional AI follows predefined rules, whereas Agentic AI can learn, adapt, and make real-time decisions based on evolving data.",
    icon: <ShieldCheck className="text-purple-400" size={22} />,
  },
  {
    question: "Can Agentic AI replace human intelligence?",
    answer:
      "Agentic AI enhances human intelligence rather than replacing it. It automates repetitive tasks, augments decision-making, and provides intelligent insights.",
    icon: <Brain className="text-pink-400" size={22} />,
  },
  {
    question: "How secure is Agentic AI?",
    answer:
      "Security depends on implementation. Ethical guidelines, robust encryption, and bias mitigation strategies are used to ensure responsible AI behavior.",
    icon: <ShieldCheck className="text-purple-400" size={22} />,
  },
];

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-black text-white">
     <div className="max-w-3xl mx-auto text-center">
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text drop-shadow-lg mb-6"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
     Frequently Asked Questions
  </motion.h2>
  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
  Get answers to common questions about  <span className="text-pink-400 font-semibold">Agentic AI</span>
  </p>
</div>


      <div className="max-w-3xl mx-auto mt-8 space-y-4" >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="relative p-5 border  rounded-xl border-gray-700  bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="flex justify-between items-center">
              <motion.h3
                className="text-lg font-semibold flex items-center gap-3 text-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                {faq.icon}
                {faq.question}
              </motion.h3>
              {openIndex === index ? (
                <ChevronUp className="text-pink-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </div>

            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
