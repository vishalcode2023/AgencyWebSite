import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import WorkGallery from "./WorkGallery";
import FooterSection from "./FooterSection";

const AboutHero = () => {
  return (
    <>
      <section className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
        {/* Label */}
        <TopNavBar />
        <div className="relative mb-0">
          <span className="bg-lime-200 text-black font-semibold px-4 py-1 rounded rotate-[-5deg] inline-block">
            CULTURE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          WE'RE OBSESSED <br />
          WITH <span className="text-[#FB64B6]">EXCELLENCE</span>
          <span className="inline-block align-middle ml-2 text-4xl">💡</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
          We believe every detail matters — from code to design to
          collaboration.
          <br />
          Our mission? Deliver brilliance at every step, for every client, every
          time.
        </p>
      </section>
      <WorkGallery/>
      <FooterSection/>
    </>
  );
};

export default AboutHero;
