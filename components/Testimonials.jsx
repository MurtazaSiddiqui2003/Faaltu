import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl">Kind Words From Our Clients</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(({ name, text, rating }) => (
          <div key={name} className="border border-stone/15 p-8">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-stone leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
            <p className="font-display italic text-gold">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
