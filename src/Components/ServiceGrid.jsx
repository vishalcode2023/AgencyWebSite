import React from "react";

const services = [
  {
    title: "CREATE",
    color: "bg-pink-400",
    description:
      "Beautiful, intuitive interfaces that reflect your brand's voice and delight users.",
    items: ["Wireframes", "UI Design", "Brand Identity", "Accessibility"],
  },
  {
    title: "DEVELOP",
    color: "bg-lime-300",
    description:
      "Modern web solutions built for performance, scalability, and seamless experience.",
    items: [
      "Full-Stack Development",
      "CMS Integration",
      "Custom APIs",
      "Maintenance",
    ],
  },
  {
    title: "SCALE",
    color: "bg-cyan-400",
    description:
      "Marketing and optimization strategies that convert clicks into customers.",
    items: [
      "SEO Optimization",
      "Email Campaigns",
      "Funnel Strategy",
      "Social Media Ads",
    ],
  },
];

const ServiceGrid = () => {
  return (
    <div className="bg-black text-white py-20 px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#121212] rounded-3xl p-8 shadow-md border border-neutral-800"
          >
            <div
              className={`${service.color} text-black font-extrabold px-4 py-1 mb-4 inline-block text-lg rounded rotate-[-6deg]`}
            >
              {service.title}
            </div>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <ul className="space-y-4 border-t border-dashed border-gray-600 pt-4">
              {service.items.map((item, i) => (
                <li key={i} className="font-bold underline underline-offset-2">
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
