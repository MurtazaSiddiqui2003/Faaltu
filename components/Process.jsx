import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="bg-cream-deep py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow mb-3">Our Process</p>
        <h2 className="font-display text-3xl md:text-4xl mb-16">From Concept to Celebration</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 relative">
          {processSteps.map(({ step, title, description }, i) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <span className="font-display text-gold text-sm mb-3">{step}</span>
              <div className="w-14 h-14 rounded-full bg-white border border-gold/30 flex items-center justify-center mb-4">
                <span className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-stone text-sm leading-relaxed max-w-[200px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
