import { Flower, Crown, Gem } from "lucide-react";
import { packages } from "@/lib/content";

const icons = [Flower, Crown, Gem];

export default function Packages() {
  return (
    <section id="packages" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Packages</p>
        <h2 className="font-display text-3xl md:text-4xl">Choose Your Experience</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map(({ name, tagline, popular }, i) => {
          const Icon = icons[i];
          return (
            <div
              key={name}
              className={`relative border p-10 text-center flex flex-col items-center ${
                popular ? "border-gold shadow-lg shadow-gold/10" : "border-stone/20"
              }`}
            >
              {popular && (
                <span className="absolute top-0 right-0 bg-gold text-white text-[0.65rem] tracking-wider uppercase px-4 py-1">
                  Most Popular
                </span>
              )}
              <Icon className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-2xl mb-3">{name}</h3>
              <p className="text-stone text-sm leading-relaxed mb-8">{tagline}</p>
              <a
                href="#contact"
                className="border border-gold text-gold hover:bg-gold hover:text-white transition-colors text-xs tracking-wide uppercase px-6 py-3"
              >
                Request Pricing
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
