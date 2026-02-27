import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 bg-[#111827] overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute left-[-200px] top-[-100px] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT SIDE - IMAGE / VISUAL */}
        <div className="flex-1 flex justify-center">
          <div className="relative p-4 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"></div>

            <img
              src="/src/assets/images/port-img.png"
              alt="Ebuka"
              className="w-[320px] rounded-2xl relative z-10"
            />
          </div>
        </div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I am a passionate Front-End Developer focused on building responsive
            and interactive web applications using modern technologies like
            React, Tailwind CSS, and JavaScript. I enjoy transforming complex
            problems into clean, user-friendly experiences.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* HTML */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-yellow-900 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <FaHtml5 className="text-3xl text-[#E34F26] group-hover:drop-shadow-[0_0_10px_#E34F26]" />
              <span className="text-gray-300">HTML5</span>
            </div>

            {/* CSS */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <FaCss3Alt className="text-3xl text-[#1572B6] group-hover:drop-shadow-[0_0_10px_#1572B6]" />
              <span className="text-gray-300">CSS3</span>
            </div>

            {/* JavaScript */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-yellow-500 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <FaJs className="text-3xl text-[#F7DF1E]" />
              <span className="text-gray-50">JavaScript</span>
            </div>

            {/* React */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <FaReact className="text-3xl text-[#61DAFB] group-hover:animate-spin" />
              <span className="text-gray-300">React</span>
            </div>

            {/* Tailwind */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <SiTailwindcss className="text-3xl text-[#38BDF8]" />
              <span className="text-gray-300">Tailwind CSS</span>
            </div>

            {/* Git */}
            <div className="group flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition duration-300">
              <FaGitAlt className="text-3xl text-[#F05032]" />
              <span className="text-gray-300">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
