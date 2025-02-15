"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";


const plans = [
  {
    name: "Basic",
    price: "$499",
    duration: "/month",
    features: [
      "Access to 2 AI Agents",
      "Core Neural Processing",
      "24/7 Customer Support",
      "Weekly Performance Analytics",
      "Basic API Integration",
    ],
    buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg",
    borderColor: "border-purple-600",
  },
  {
    name: "Pro",
    price: "$999",
    duration: "/month",
    features: [
      "Deploy up to 10 AI Agents",
      "Advanced Neural Computing",
      "Priority Customer Support",
      "Real-time Data Insights",
      "Custom API Access",
      "Enhanced Security Protocols",
    ],
    buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg",
    borderColor: "border-blue-600",
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    duration: "",
    features: [
      "Unlimited AI Agent Deployment",
      "Comprehensive Neural Suite",
      "Dedicated AI Consultant",
      "Advanced Analytics Dashboard",
      "Tailored AI Development",
      "Full API Capabilities",
      "Enterprise-Grade Security",
      "Custom AI Model Training",
    ],
    buttonColor: "bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-lg",
    borderColor: "border-green-600",
  },
];

export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
        <section id="pricing" className="relative w-full py-20 px-6 bg-black text-white text-center">
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6"
        data-aos="fade-up"
      >
        Flexible Pricing for Every Need
      </h2>
      <p
        className="text-gray-400 text-lg mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Power up your AI capabilities with a plan that fits your ambitions.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-xl border ${plan.borderColor} shadow-xl transition-all duration-300 bg-gray-900 hover:scale-105`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-white">
              {plan.price}{" "}
              <span className="text-lg font-normal text-gray-400">
                {plan.duration}
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-300 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${plan.buttonColor}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>

    </>

  );
}
