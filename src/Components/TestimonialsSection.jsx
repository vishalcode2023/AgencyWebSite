import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      rating: 5,
      content:
        "“The SwanSorter team delivered beyond expectations. Their attention to detail and innovation helped us achieve a flawless product experience.”",
      name: "Mr.Shijo George",
      company: "SwanSorter Systems",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      rating: 5,
      content:
        "“We are amazed by the clarity and performance of our new website. Their support and collaboration was just excellent.”",
      name: "Mr. Vinayaka",
      company: "ClickNGo Technologies",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          SEE WHY OUR <br className="sm:hidden" /> CLIENTS{" "}
          <span className="text-pink-300">💖</span> US
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          We believe in getting the details right, keeping our promises,
          and always going the extra mile. It's how we work and why our clients trust us.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#1a1a1a] rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="text-lime-300 text-lg mb-2">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-gray-100 mb-6 text-sm sm:text-base">{t.content}</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base">{t.name}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
