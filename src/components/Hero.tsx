"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        Hi, I’m <span className="text-purple-600">Muneeb Ali</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Cloud DevOps Engineer crafting scalable, secure, and automated infrastructure on AWS & Kubernetes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/MuneebResume.pdf"
          download
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
        >
          📄 View CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-purple-600 text-purple-700 rounded-xl hover:bg-purple-50 transition"
        >
          ✉️ Contact Me
        </a>
      </motion.div>

      <div className="relative w-44 h-44 md:w-56 md:h-56 mt-8">
        <Image
          src="/profile.jpg"
          alt="Muneeb Ali"
          fill
          className="rounded-full object-cover shadow-xl border-4 border-purple-400"
        />
      </div>
    </section>
  );
}
