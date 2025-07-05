import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FooterSection from "./FooterSection";
import TopNavBar from "../Routers/TopNavBar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await axios.post("https://agencywebsite-backend.onrender.com/api/contact", formData);

      if (res.status >= 200 && res.status < 300) {
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message.", { id: loadingToast });
      }
    } catch (err) {
      console.error("Axios Error:", err);
      toast.error("❌ Something went wrong!", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopNavBar />
      <div className="bg-black py-20 text-white min-h-screen flex flex-col">
        <section className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="relative mb-4">
            <span className="bg-lime-200 text-black font-semibold px-4 py-1 rounded rotate-[-5deg] inline-block shadow-md">
              CONTACT
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            LET’S <span className="text-[#FB64B6]">CONNECT</span> <br />
            & COLLABORATE 🤝
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
            Got a project in mind or just want to say hi? We’d love to hear from you.
            <br /> Let’s build something amazing together.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mt-12 space-y-6 text-left"
          >
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full bg-white/10 text-white placeholder-transparent px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB64B6] transition-all"
                placeholder="Your Name"
              />
              <label className="absolute left-5 top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FB64B6]">
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full bg-white/10 text-white placeholder-transparent px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB64B6] transition-all"
                placeholder="Your Email"
              />
              <label className="absolute left-5 top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FB64B6]">
                Your Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="peer w-full bg-white/10 text-white placeholder-transparent px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB64B6] transition-all"
                placeholder="Your Message"
              ></textarea>
              <label className="absolute left-5 top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FB64B6]">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FB64B6] hover:bg-pink-500 transition-all text-black font-bold py-4 rounded-lg shadow-md hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default ContactUs;
