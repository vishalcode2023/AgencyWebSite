import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkGallery = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746684029/Screenshot_2025-05-08_112902_kbgabi.png",
      title: "Swan Sorting Systems",
      caption:
        "Experience the next level of sorting technology with unmatched efficiency and accuracy.",
      extraStyle: "md:-mt-6",
      link: "https://www.swansorter.com/",
    },
    {
      img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746684534/Screenshot_2025-05-08_113755_pjsjnx.png",
      title: "ClickNGrow Company Website ",
      caption:
        "Innovative software solutions that drive your business forward and empower your growth.",
      extraStyle: "md:mt-6",
      link: "https://click-n-grow.vercel.app/",
    },
  ];

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: index * 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-12 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`text-center ${item.extraStyle}`}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </a>
            </div>
            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.caption}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        ref={ctaRef}
        className="mt-16 bg-[#111111] p-8 md:p-12 rounded-3xl text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          LIKE WHAT <br className="md:hidden" /> YOU SEE?{" "}
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-base sm:text-lg mb-6">
          Explore our portfolio and discover what we can achieve for you. Let’s
          create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-lime-300 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-lime-400 transition"
          >
            <span>👩‍💻</span> LET'S TALK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
