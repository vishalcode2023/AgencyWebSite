import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import FooterSection from "./FooterSection";

const Cookies = () => {
  return (
    <>
      <TopNavBar />
      <section className="min-h-screen bg-black text-white px-6 py-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-6 animate-fadeIn">Cookies Policy</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 animate-fadeIn delay-75">
            Our website uses cookies to improve your experience, track usage statistics, and deliver personalized content.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg space-y-6">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>🍪 Essential cookies enable core functionality like navigation and access to secure areas.</li>
            <li>📊 Analytics cookies help us understand how users interact with our site.</li>
            <li>🎯 Personalization cookies tailor content and recommendations to your preferences.</li>
            <li>🧹 You can manage or delete cookies at any time via your browser settings.</li>
          </ul>
          <div className="bg-pink-900/10 border border-pink-500 text-pink-300 p-4 rounded-lg">
            <p className="text-sm">
              By using our site, you agree to our use of cookies as described in this policy.
            </p>
          </div>
          <p className="text-gray-400 text-center">
            Have questions or want to manage your cookie settings?
            <br />
            <a href="mailto:infobitspyre@gmail.com" className="text-pink-400 underline">infobitspyre@gmail.com</a>
          </p>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Cookies;