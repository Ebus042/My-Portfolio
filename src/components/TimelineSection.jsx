import { timelineData } from "../data/timeline";

const TimelineSection = () => {
  return (
    <section className="relative py-28 bg-[#0f172a] overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute left-[-200px] top-[-150px] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
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
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">My Journey</h2>
          <p className="text-gray-400 mt-4">
            A timeline of my growth as a Front-End Developer
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-white/10"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-16 mb-16 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:scale-110 transition">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md group-hover:border-blue-500/40 transition duration-300">
                <span className="text-blue-400 text-sm font-semibold">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
