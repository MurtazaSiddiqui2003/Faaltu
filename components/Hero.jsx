import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.svg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24">
        <div className="max-w-xl">
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
            Creating Meaningful Celebrations Through Thoughtful Design
          </h1>
          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
            Custom Event Design &amp; Decor for Weddings, Corporate Events &amp; Private Celebrations.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light transition-colors text-white text-sm font-medium tracking-wide px-7 py-4"
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              className="border border-white/60 hover:border-white transition-colors text-white text-sm font-medium tracking-wide px-7 py-4"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
