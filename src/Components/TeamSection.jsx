import React from "react";
import { FaCheck } from "react-icons/fa";

const TeamSection = () => {
  const features = [
    {
      icon: <FaCheck />,
      title: "WE'RE ABOUT RESULTS",
      desc: "We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.",
    },
    {
      icon: <FaCheck />,
      title: "EXPERIENCED TEAM",
      desc: "In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)",
    },
    {
      icon: <FaCheck />,
      title: "QUALITY ASSURANCE",
      desc: "We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.",
    },
    {
      icon: <FaCheck />,
      title: "SUPPORT & AFTERCARE",
      desc: "We pride ourselves on delivering highly responsive support long after your website has been launched.",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
          A DEDICATED <br className="sm:hidden" />
          TEAM OF <span className="text-[#FB64B6]">PROFESSIONALS</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Passionate, driven, and always prepared to go the extra mile, we bring
          creativity and expertise to every project, guaranteeing your success.
        </p>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-[#2b2b2b] hover:shadow-lime-400/20 hover:-translate-y-1 transform transition duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-lime-300 text-black flex items-center justify-center text-lg font-bold mb-4 mx-auto shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
