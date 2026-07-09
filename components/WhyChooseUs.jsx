import { Lightbulb, Hammer, UserCheck, Search, BadgeCheck } from "lucide-react";
import { differentiators } from "@/lib/content";

const icons = {
  concept: Lightbulb,
  craft: Hammer,
  personal: UserCheck,
  detail: Search,
  execution: BadgeCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-deep py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow mb-3">Why Choose Sterling Bloom</p>
        <h2 className="font-display text-3xl md:text-4xl mb-14">Where Details Make the Difference</h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
          {differentiators.map(({ title, icon }) => {
            const Icon = icons[icon];
            return (
              <div key={title} className="flex flex-col items-center gap-4">
                <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-stone">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
