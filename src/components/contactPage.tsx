"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import robotImage from "../../public/robotImage.webp";

// Define form data structure
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Form Submission Handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xdknoaab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent Successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-30 blur-3xl"></div>

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

      {/* Toast Notification Container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Heading */}
      <motion.h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse text-center w-full max-w-3xl mt-12 md:mt-16"
      >
        Get in Touch with Us
      </motion.h1>

      {/* Subheading */}
      <p
        className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 text-center max-w-2xl"
        data-aos="fade-up"
      >
        We love to hear from you! Contact us for any inquiries or
        collaborations.
      </p>

      {/* Contact Section */}
      <motion.div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-6xl pt-12">
        {/* Contact Form */}
        <motion.div
          data-aos="fade-up"
          className="w-full md:w-1/2 bg-white/10 p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md border border-white/20"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {[
              {
                name: "name",
                type: "text",
                placeholder: "Your Name",
                error: errors.name?.message,
              },
              {
                name: "email",
                type: "email",
                placeholder: "Your Email",
                error: errors.email?.message,
              },
              {
                name: "subject",
                type: "text",
                placeholder: "Subject",
                error: errors.subject?.message,
              },
            ].map(({ name, type, placeholder, error }) => (
              <div key={name}>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name as keyof FormData, {
                    required: `${placeholder} is required`,
                  })}
                  className="w-full p-3 bg-black/40 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-pink-400 transition"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            ))}

            {/* Message Field */}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 bg-black/40 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white font-semibold tracking-wide hover:shadow-xl transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Robot Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Image
            src={robotImage}
            alt="Futuristic Robot"
            width={350}
            height={350}
            className="drop-shadow-xl max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
