import React from "react";
import {
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaUserFriends,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseUs = () => {
 const features = [
  {
    icon: <FaLightbulb className="text-3xl text-black" />,
    title: "INNOVATIVE THINKING",
    desc: "We blend creativity and cutting-edge tech to solve real-world problems with smart, future-ready strategies.",
  },
  {
    icon: <FaRocket className="text-3xl text-black" />,
    title: "SPEED & AGILITY",
    desc: "From idea to execution, our workflows are designed to move fast, adapt quickly, and deliver results without compromise.",
  },
  {
    icon: <FaHandshake className="text-3xl text-black" />,
    title: "TRUSTED PARTNERSHIP",
    desc: "We don’t just deliver projects — we build lasting relationships based on trust, clarity, and shared goals.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-black" />,
    title: "USER-FIRST APPROACH",
    desc: "Every product we build starts with empathy for the end user, ensuring seamless experience and maximum impact.",
  },
  {
    icon: <FaCogs className="text-3xl text-black" />,
    title: "SCALABLE SOLUTIONS",
    desc: "Whether you're a startup or an enterprise, our solutions grow with you — flexible, maintainable, and built to last.",
  },
  {
    icon: <FaChartLine className="text-3xl text-black" />,
    title: "TRANSPARENT PROCESS",
    desc: "We keep you in the loop at every stage — clear timelines, honest updates, and full visibility into your project.",
  },
];


  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-lime-300 to-cyan-300 bg-clip-text text-transparent mb-4">
          WHY BRANDS CHOOSE US
        </h2>
        <p className="text-lg text-gray-300 mb-14 max-w-3xl mx-auto">
          Strategy-driven. Result-obsessed. Our process is built to create long-term value
          with agility, innovation, and trust at every step.
        </p>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {features.map((item, index) => (
            <div key={index} className="group">
              <div className="w-14 h-14 rounded-full bg-pink-400 flex items-center justify-center mb-4 shadow-lg transition-all group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
