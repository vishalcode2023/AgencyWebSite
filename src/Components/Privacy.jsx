import React from "react";
import TopNavBar from "../Routers/TopNavBar";
import FooterSection from "./FooterSection";

const Privacy = () => {
  return (
    <>
      <TopNavBar />
      <section className="min-h-screen bg-black text-white px-6 py-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-pink-500 mb-6 animate-fadeIn">Privacy Policy</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 animate-fadeIn delay-75">
            Your privacy is essential to us. This policy outlines how we collect, use, and protect your information while maintaining transparency and trust.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg space-y-6">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>🔐 We collect only necessary data like name, email, and usage insights.</li>
            <li>🛡️ All personal data is securely stored using encryption protocols.</li>
            <li>🚫 We do not sell or share your data with third-party advertisers.</li>
            <li>✍️ You can request to view, modify, or erase your data at any time.</li>
          </ul>
          <div className="bg-pink-900/10 border border-pink-500 text-pink-300 p-4 rounded-lg">
            <p className="text-sm">
              Our privacy practices are regularly reviewed and updated in compliance with global data protection laws such as GDPR.
            </p>
          </div>
          <p className="text-gray-400 text-center">
            Questions or data removal requests?
            <br />
            <a href="mailto:infobitspyre@gmail.com" className="text-pink-400 underline">infobitspyre@gmail.com</a>
          </p>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Privacy;