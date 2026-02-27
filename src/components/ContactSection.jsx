import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#111827] overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute right-[-200px] bottom-[-200px] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-4">
            Let’s build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-400 mb-8">
              I’m open to freelance projects, collaborations, and full-time
              frontend opportunities.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                Email: <span className="text-blue-400">yourmail@email.com</span>
              </p>
              <p>Location: Nigeria</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-2xl">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="text-gray-300 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-[#0f172a] border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 bg-[#0f172a] border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-2 p-3 bg-[#0f172a] border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
