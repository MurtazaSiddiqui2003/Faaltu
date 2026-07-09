"use client";

import { useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/content";

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <div className="text-center mb-10">
        <p className="eyebrow mb-3">Featured Work</p>
        <h2 className="font-display text-3xl md:text-4xl">A Glimpse of Our Creations</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs tracking-wide uppercase px-5 py-2 border transition-colors ${
              active === cat
                ? "bg-gold border-gold text-white"
                : "border-stone/30 text-stone hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block bg-gold hover:bg-gold-light transition-colors text-white text-sm font-medium tracking-wide px-8 py-4"
        >
          View More Work
        </a>
      </div>
    </section>
  );
}
