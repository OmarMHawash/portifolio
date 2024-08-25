"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/app/lib/data";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-20 pb-20 relative"
      >
        {/* Hero Section */}
        <section className="h-[90vh] flex flex-col justify-center items-center relative">
          <div className="w-11/12 lg:w-8/12 text-center">
            <h1 className="font-bold text-3xl md:text-5xl text-zinc-50 mb-4">
              Omar Hawash
            </h1>
            <p className="w-full md:text-xl p-4 text-zinc-50 mb-6">
              Full Stack Developer crafting web applications that enhance user
              experiences and streamline digital workflows.
            </p>
            <div className="flex flex-row justify-center gap-4">
              {socials.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-50 hover:text-zinc-300 transition-colors underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-50"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="w-11/12 lg:w-8/12 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4">
            About Me
          </h2>
          <p className="text-zinc-300">
            Passionate developer with a keen eye for design and a love for
            creating innovative solutions. With experience in both front-end and
            back-end technologies, I strive to build seamless and user-friendly
            applications that solve real-world problems.
          </p>
        </section>

        {/* Projects Section */}
        <section className="w-11/12 lg:w-8/12 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4">
            Projects
          </h2>
          <p className="text-zinc-300 mb-6">
            Explore my portfolio of projects, showcasing my skills in web
            development, design, and problem-solving.
          </p>
          <Link
            href="/projects"
            className="bg-zinc-700 text-zinc-50 px-6 py-2 rounded-md hover:bg-zinc-600 transition-colors inline-block"
          >
            View My Projects
          </Link>
        </section>

        {/* Contact Section */}
        <section className="w-11/12 lg:w-8/12 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-zinc-300 mb-4">
            Always open to new opportunities and collaborations. Feel free to
            reach out via LinkedIn!
          </p>
          <a
            href={socials.find((social) => social.title === "LinkedIn")?.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-50 text-zinc-900 px-6 py-2 rounded-md hover:bg-zinc-200 transition-colors inline-block"
          >
            Contact Me on LinkedIn
          </a>
        </section>
      </motion.div>
    </main>
  );
}
