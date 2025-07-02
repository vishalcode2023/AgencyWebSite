import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const floatingMedia = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?q=80&w=1025&auto=format&fit=crop",
    className: "top-28 left-10 w-28 md:top-[60%] md:left-28 md:w-56",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop",
    className: "top-24 right-4 w-32 md:top-40 md:right-20 md:w-60",
  },
  {
    type: "video",
    src: "/Video/7308108-hd_1920_1080_24fps.mp4",
    className: "top-[75%] left-6 w-38 md:top-[20%] md:left-32 md:w-60",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=1170&auto=format&fit=crop",
    className: "bottom-16 right-5 w-32 md:bottom-32 md:right-30 md:w-54",
  },
];

const HeroSection = () => {
  const mediaRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    mediaRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          delay: i * 0.3,
          ease: "back.out(1.4)",
        }
      );

      gsap.to(el, {
        y: 10,
        duration: 3 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        delay: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-[100vh] bg-black text-white overflow-hidden flex items-center justify-center px-4">
      {/* Floating Media (Images + Video) */}
      {floatingMedia.map((item, i) => (
        item.type === "image" ? (
          <img
            key={i}
            src={item.src}
            alt=""
            className={`rounded-lg absolute ${item.className}`}
            ref={(el) => (mediaRefs.current[i] = el)}
          />
        ) : (
          <video
            key={i}
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className={`rounded-lg absolute ${item.className}`}
            ref={(el) => (mediaRefs.current[i] = el)}
          />
        )
      ))}

      {/* Main Content */}
      <div ref={textRef} className="text-center max-w-3xl z-10">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold md:leading-22">
          UNLEASH <br />
          <span className="text-pink-400">CREATIVITY</span> <br />
          TECHNOLOGY
        </h1>
        <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          Empowering startups and enterprises with cutting-edge tools and
          intelligent systems to achieve business success through digital
          transformation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
