import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations/variants";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative py-28 bg-[#0f172a] overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div
        className="absolute left-[-250px] top-[-150px] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
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
          <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
          <p className="text-gray-400 mt-4">
            Technologies I use to build modern web applications
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
            { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
            { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
            { icon: <FaReact />, name: "React", color: "#61DAFB" },
            { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
            { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
            { icon: <SiVite />, name: "Vite", color: "#646CFF" },
            { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
          ].map((tech, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition duration-300 hover:scale-105"
            >
              {/* Icon Background Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-2xl"
                style={{ backgroundColor: tech.color }}
              ></div>

              <div
                className="text-5xl mb-4 relative z-10"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <p className="text-gray-300 relative z-10">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
