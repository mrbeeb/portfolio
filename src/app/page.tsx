"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-24 px-6">

      {/* HERO */}
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

      {/* ABOUT */}
      <section id="about" className="bg-white/70 p-8 rounded-2xl shadow-xl backdrop-blur">
        <h3 className="text-3xl font-bold text-center">About Me</h3>
        <p className="mt-4 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          I specialize in IaC, CI/CD, and cloud-native architectures. I enjoy reverse-engineering how tools work
          under the hood — from Linux binaries to the Kubernetes API server — and turning that knowledge into
          production-ready systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white/70 p-8 rounded-2xl shadow-xl backdrop-blur">
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {/* Netflix Card */}
          <a href="https://www.linkedin.com/posts/iammuneebali_devops-cloud-aws-activity-7347196651893133312-cHg0" 
             target="_blank" 
             className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white/90 p-6">
            <h4 className="text-xl font-semibold">Netflix Clone with CI/CD</h4>
            <p className="text-gray-600 mt-2">
              Three-tier AWS architecture, ALB + ASG, and zero-downtime GitHub Actions pipeline.
            </p>
            <span className="text-purple-600 hover:underline mt-3 inline-block">🔗 View Post</span>
          </a>

          {/* FYP Card */}
          <a href="https://www.linkedin.com/posts/iammuneebali_honoured-to-showcase-our-final-year-project-activity-7331964911150960640-l8z4" 
             target="_blank" 
             className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white/90 p-6">
            <h4 className="text-xl font-semibold">Intrusion Detection & Lockdown (FYP)</h4>
            <p className="text-gray-600 mt-2">
              ESP32-CAM + AWS Rekognition + SNS OTP; automated multi-layer response on failed auth.
            </p>
            <span className="text-purple-600 hover:underline mt-3 inline-block">🔗 View Post</span>
          </a>

          {/* Java App Card */}
          <a href="https://www.linkedin.com/posts/iammuneebali_linux-kubernetes-java-activity-7230557380583841792-HePL" 
             target="_blank" 
             className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white/90 p-6">
            <h4 className="text-xl font-semibold">Java App on Kubernetes</h4>
            <p className="text-gray-600 mt-2">
              Containerized Java application deployed on Kubernetes with CI/CD pipeline.
            </p>
            <span className="text-purple-600 hover:underline mt-3 inline-block">🔗 View Post</span>
          </a>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-white/70 p-8 rounded-2xl shadow-xl backdrop-blur">
        <h3 className="text-3xl font-bold text-center">Experience</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border bg-white/70 shadow">
            <h4 className="text-xl font-semibold">DevOps Engineer — ICT Vision</h4>
            <p className="text-gray-600">06/2023 – Present • Multan</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>HA clusters with load balancing & failover</li>
              <li>Linux security hardening (SELinux, firewalls, access control)</li>
              <li>Optimized Dockerfiles & CI/CD pipelines</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-white/70 shadow">
            <h4 className="text-xl font-semibold">FYP — Cloud Security System</h4>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Face verification with AWS Rekognition</li>
              <li>SNS for OTP; automated lockdown triggers</li>
              <li>ESP32-CAM integration with AWS APIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white/70 p-10 rounded-2xl shadow-xl backdrop-blur">
        <h3 className="text-3xl font-bold text-center">Contact</h3>
        <p className="text-gray-700 mt-3 text-center">Let’s collaborate or talk about infra!</p>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-6 space-y-4 max-w-md mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-xl"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Links */}
        <div className="mt-6 space-y-1 text-center">
          <a className="text-purple-700 hover:underline block" href="mailto:iammuneebali@gmail.com">📧 iammuneebali@gmail.com</a>
          <a className="text-purple-700 hover:underline block" target="_blank" href="https://linkedin.com/in/iammuneebali">💼 linkedin.com/in/iammuneebali</a>
          <a className="text-purple-700 hover:underline block" target="_blank" href="https://github.com/mrbeeb">👨‍💻 github.com/mrbeeb</a>
        </div>
      </section>

    </div>
  );
}
