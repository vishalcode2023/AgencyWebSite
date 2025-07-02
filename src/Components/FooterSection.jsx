import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            LET'S WORK <br />
            TOGETHER <span className="text-pink-300">😊</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-lime-300 text-black font-bold px-6 py-3 rounded-full gap-3 hover:bg-lime-400 transition"
          >

            LET’S TALK
          </Link>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">EXPLORE</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/work" className="hover:underline">Work</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Say Hello */}
        <div>
          <h3 className="font-bold text-lg mb-4">SAY HELLO</h3>
          <p className="mb-2 text-sm text-lime-300 underline">
            <Link to="tel:+442891462888">+91 7259635086</Link>
          </p>
          <p className="mb-4 text-sm text-lime-300 underline">
            <Link to="mailto:infobitspyre@gmail.com">infobitspyre@gmail.com</Link>
          </p>
          <div className="flex gap-3 mt-2">
            {/* <Link to="#" className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700">
              <FaXTwitter />
            </Link> */}
            <Link to="https://www.instagram.com/bitspyre/" className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700">
              <FaInstagram />
            </Link>
            <Link to="#" className="bg-[#1f1f1f] p-2 rounded-full hover:bg-gray-700">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 BitSpyre Ltd &nbsp;</p>
        <div className="flex flex-wrap gap-4 underline">
          <Link to="/accessibility">Accessibility</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
