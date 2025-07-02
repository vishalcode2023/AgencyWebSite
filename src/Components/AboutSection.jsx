import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import InspirationSection from "./InspirationSection";
import WhyChooseUs from "./WhyChooseUs";
import FooterSection from "./FooterSection";

const AboutSection = () => {
  return (
    <>
    <section className="bg-black min-h-screen py-5 flex flex-col items-center justify-center text-white px-6 text-center">
      <TopNavBar/>
      {/* Label */}
      <div className="relative mb-0">
        <span className="bg-lime-200 text-black font-semibold px-4 py-1 rounded rotate-[-5deg] inline-block">
          WHO WE ARE
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
        PASSIONATE <br />
        <span className="text-pink-400">CREATORS</span> WITH PURPOSE{" "}
        <span className="inline-block align-middle ml-2 text-4xl">🚀</span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
        We’re a diverse team of innovators, designers, and developers committed
        to building digital experiences that inspire. Our mission is to bring
        creativity and strategy together to move your brand forward.
      </p>
    </section>
    <InspirationSection/>
    <WhyChooseUs/>
    <FooterSection/>
    </>
  );
};

export default AboutSection;
