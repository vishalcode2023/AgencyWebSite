import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import ServiceGrid from "./ServiceGrid";
import TestimonialsSection from "./TestimonialsSection";
import FooterSection from "./FooterSection";

const Services = () => {
  return (
    <>
      <section className="bg-black min-h-[100vh] flex flex-col items-center justify-center text-white px-6 text-center">
        <TopNavBar />
        <div className="relative mb-4">
          <span className="bg-lime-200 text-black font-semibold px-4 py-1 rounded rotate-[-5deg] inline-block">
            SERVICES
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          DELIVERING <br />
          <span className="text-pink-400">RESULTS</span> FOR <br />
          TOP BRANDS{" "}
          <span className="inline-block align-middle ml-2 text-4xl">😊</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
          Bold ideas. Smarter strategies. Game-changing results.
          <br />
          Let’s elevate your brand and unlock its full potential.
        </p>
      </section>
      <ServiceGrid />
      <TestimonialsSection/>
      <FooterSection />
    </>
  );
};

export default Services;
