import React from "react";

const InspirationSection = () => {
  return (
    <section className="bg-black py-24 px-6 flex justify-center items-center">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-xl text-center text-white">
    
        {/* Gradient Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-lime-300 to-cyan-300 bg-clip-text text-transparent mb-6">
          Vision Ignites Transformation
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6 transition duration-300 hover:text-gray-100">
          Our journey begins with ideas, shaped by courage and driven by heart.
          Every challenge is a canvas, every solution a brushstroke of creativity.
          We craft stories that don't just speak, they spark — and that spark
          changes everything.
        </p> 
      </div>
    </section>
  );
};

export default InspirationSection;
