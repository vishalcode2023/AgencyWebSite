import React from "react";
import FooterSection from "./FooterSection";
import TopNavBar from "../Routers/TopNavBar";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <TopNavBar />

      <div className="bg-black  text-white px-4 py-20 text-center">
        <h1 className="text-4xl my-16 md:text-6xl font-bold">
          <span className="text-pink-500">Join</span> Our Journey
        </h1>

        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-gray-400">
          We're building something <span className="text-pink-400 font-medium">extraordinary</span>.
          While we're not hiring right now, we always welcome passionate creators and innovators.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 text-left">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">🌟 Our Culture</h2>
            <p className="text-gray-300">
              We encourage creativity, value collaboration, and celebrate small and big wins alike.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 text-left">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">🔮 Future Opportunities</h2>
            <p className="text-gray-300">
              No roles available now, but we’re always looking for passionate individuals to join us in the future.
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 text-center">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">📬 Contact Us</h2>
            <p className="text-gray-300 mb-4">
              Have a question or want to say hello? We'd love to hear from you.
            </p>
            <Link to='/contact' className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full transition">
              Email Us
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Careers;
