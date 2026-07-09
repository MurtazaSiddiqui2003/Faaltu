import { Gem, Moon, Hand, Heart, Building2, Sparkles } from "lucide-react";
import { services } from "@/lib/content";

const icons = {
  rings: Gem,
  moon: Moon,
  hand: Hand,
  heart: Heart,
  building: Building2,
  sparkle: Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream-deep py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow mb-3">Our Services</p>
        <h2 className="font-display text-3xl md:text-4xl mb-14">Designed for Every Occasion</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {services.map(({ name, icon }) => {
            const Icon = icons[icon];
            return (
              <div key={name} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-stone">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
