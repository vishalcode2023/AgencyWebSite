import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        ease: "power4.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="max-w-5xl w-full text-center relative">
        {/* 🧠 Text Content */}
        <div ref={textRef}>
          <h2 className="text-4xl sm:text-8xl font-black mb-4">BUILT TO</h2>
          <h2 className="text-4xl sm:text-8xl font-black mb-4 flex items-center justify-center gap-3 ">
            <span className="text-[#FB64B6]">ELEVATE</span>BRANDS
          </h2>
          <h2 className="text-4xl sm:text-6xl font-black mb-6">THROUGH DESIGN & STRATEGY</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            We blend design, technology, and innovation to craft digital experiences that ignite growth, inspire action, and set your brand apart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
