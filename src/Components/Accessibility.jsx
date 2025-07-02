import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import FooterSection from "./FooterSection";

const Accessibility = () => {
  return (
    <>
      <TopNavBar />
      <section className="min-h-screen bg-black  text-white px-6 py-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-6 animate-fadeIn">Accessibility Statement</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 animate-fadeIn delay-75">
            At BitSpyre Ltd, we believe technology should be accessible to all. We are committed to building inclusive experiences and continuously improving the accessibility of our website for everyone — including people with disabilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg space-y-6">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>🔑 Fully keyboard-navigable interface and features.</li>
            <li>🦯 Compatible with major screen readers for better voice feedback.</li>
            <li>🔍 High contrast design with scalable, readable fonts.</li>
            <li>🖼️ Alt-text on all essential images for visual aid support.</li>
            <li>📝 Clear labels and accessible input fields for forms.</li>
          </ul>
          <div className="bg-pink-900/10 border border-pink-500 text-pink-300 p-4 rounded-lg">
            <p className="text-sm">
              We are constantly testing and refining to meet WCAG 2.1 Level AA guidelines.
            </p>
          </div>
          <p className="text-gray-400 text-center">
            Encountering an issue? We’d love to hear from you:
            <br />
            <a href="mailto:support@bitspyre.com" className="text-pink-400 underline">infobitspyre@gmail.com</a>
          </p>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Accessibility;