"use client";

import { useState } from "react";

const links = ["Home", "About", "Services", "Work", "Process", "Packages", "Reviews", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#" className="font-display text-xl tracking-wide text-white">
          Sterling Bloom
          <span className="block text-[0.55rem] tracking-[0.3em] font-body font-light text-white/70 uppercase">
            Event Design &amp; Decor
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-white/90">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-gold-light transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block bg-gold hover:bg-gold-light transition-colors text-white text-sm font-medium tracking-wide px-6 py-3"
        >
          Book Consultation
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-charcoal/95 backdrop-blur px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/90 text-sm"
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="bg-gold text-white text-sm text-center px-6 py-3 mt-2">
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
