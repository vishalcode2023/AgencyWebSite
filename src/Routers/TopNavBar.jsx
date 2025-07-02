import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

const TopNavBar = () => {
  const logoRef = useRef(null);
  const talkRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      const isDesktop = window.innerWidth >= 768;

      gsap.to(headerRef.current, {
        borderRadius: y > 50 ? 24 : 32,
        duration: 0.4,
        ease: "power1.out",
      });

      if (isDesktop) {
        gsap.to(logoRef.current, {
          x: y > 50 ? 150 : 0,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(talkRef.current, {
          x: y > 50 ? -150 : 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50 px-4 py-2 transition-all duration-300 ${
          scrolled ? "bg-[#1f1f1f] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
          {/* Logo */}
          <div ref={logoRef}>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1750778298/Logo_pvg3nc.jpg"
                alt="Logo"
                className="w-32 h-20 object-contain rounded-full transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wide">
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div
              ref={talkRef}
              className="hidden md:flex items-center gap-2 bg-lime-300 text-black px-5 py-2 rounded-full font-bold text-sm transition hover:bg-lime-400"
            >
              <FaUser className="border border-lime-800 rounded-full p-1 text-2xl" />
              <Link to="/contact">LET'S TALK</Link>
            </div>

            {/* Mobile menu toggle */}
            <div
              ref={menuRef}
              className="md:hidden text-2xl font-bold transition-transform duration-300 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <HiOutlineMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-40 md:hidden flex flex-col justify-center items-center px-8 gap-6 text-white text-3xl font-extrabold tracking-tight shadow-xl transition-all duration-300">
          <Link to="/work" onClick={() => setMenuOpen(false)}>
            WORK
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>

          {/* LET'S TALK Button */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex items-center bg-lime-200 text-black text-base font-bold px-5 py-3 rounded-full gap-2 hover:bg-lime-300 transition"
          >
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            LET'S TALK
          </Link>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
