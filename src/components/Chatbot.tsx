"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, X, Rocket, BrainCircuit } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "🤖 Welcome to Agentic World! Ask me anything about AI, technology, or Hooriya M. Fareed.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const generateBotReply = (message: string) => {
    const lowerMsg = message.toLowerCase();

    // Special greeting response
    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) return "👋 Hello, amazing human! Welcome to Agentic AI. How can I assist you today? 🚀";

    // Questions about website sections
    if (lowerMsg.includes("hero")) return "🚀 The Hero Section introduces Agentic AI mission to revolutionize AI-driven solutions.";
    if (lowerMsg.includes("explore")) return "🔍 Explore section lets you dive deep into AI models and real-world use cases.";
    if (lowerMsg.includes("technology")) return "🛠️ The Technology page explains the cutting-edge AI frameworks and innovations powering Agentic AI.";
    if (lowerMsg.includes("pricing")) return "💰 The Pricing page offers flexible plans for businesses and individuals who want to integrate AI.";
    if (lowerMsg.includes("contact")) return "📞 Need to talk to us? Visit our Contact page for inquiries and support.";

    // About Hooriya M. Fareed
    if (lowerMsg.includes("who made this") || lowerMsg.includes("creator")) return "🌍 This website was designed and developed by **Hooriya M. Fareed**, a skilled frontend developer passionate about AI and cutting-edge technology!";
    if (lowerMsg.includes("hooriya m. fareed")) return "👩‍💻 Hooriya M. Fareed is a frontend developer, AI enthusiast, and creator of **Agentic World**! She specializes in building futuristic, AI-powered applications.";
    
    // AI and Agentic AI-specific answers
    if (lowerMsg.includes("what is agentic ai")) return "🤖 **Agentic AI** is an advanced AI-driven system that offers automation, machine learning insights, and AI-powered assistance for various industries.";
    if (lowerMsg.includes("how does agentic ai work")) return "⚙️ **Agentic AI** leverages deep learning, neural networks, and automation tools to process information and provide intelligent solutions.";
    if (lowerMsg.includes("what can agentic ai do")) return "🚀 **Agentic AI** can analyze data, automate tasks, provide AI-powered chatbots, recommend solutions, and much more!";
    
    // General AI questions
    if (lowerMsg.includes("what is ai")) return "🧠 AI (**Artificial Intelligence**) is the simulation of human intelligence in machines, enabling them to learn, reason, and make decisions.";
    if (lowerMsg.includes("how does ai work")) return "⚡ AI works using **machine learning, neural networks, and deep learning** to recognize patterns, analyze data, and make predictions.";
    if (lowerMsg.includes("future of ai")) return "🚀 The future of AI includes **self-learning systems, automation, AI-powered assistants, and innovations in robotics, healthcare, and space exploration!**";
    
    return "🤖 Agentic AI is always evolving! Ask me anything about AI, Hooriya M. Fareed, or this website.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: generateBotReply(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Rotating Chatbot Button */}
      <motion.button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition relative"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      {/* Chatbox */}
      {isOpen && (
        <motion.div
          className="w-80 bg-black/90 text-white shadow-xl rounded-xl p-4 absolute bottom-16 right-0 border border-purple-400 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-64 overflow-y-auto space-y-2 p-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 rounded-lg w-fit max-w-[75%] flex items-center gap-2 ${
                  msg.sender === "bot"
                    ? "bg-purple-500 text-white self-start"
                    : "bg-gray-800 self-end"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {msg.sender === "bot" && <BrainCircuit size={20} />}
                {msg.sender === "user" && <Rocket size={18} className="text-pink-400" />}
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              className="w-full p-2 bg-gray-900 rounded-lg text-white outline-none"
              placeholder="Ask about AI, Agentic AI, or Hooriya M. Fareed..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600" onClick={handleSend}>
              <Send size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
