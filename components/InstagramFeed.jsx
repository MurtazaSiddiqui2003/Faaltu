import { InstagramIcon } from "./SocialIcons";
import { instagramHandle, instagramImages } from "@/lib/content";

export default function InstagramFeed() {
  return (
    <section className="bg-cream-deep py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow mb-2">Follow Us on Instagram</p>
        <p className="text-stone mb-8">{instagramHandle}</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {instagramImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} alt="Instagram post" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light transition-colors text-white text-sm font-medium tracking-wide px-7 py-3"
        >
          <InstagramIcon className="w-4 h-4" /> Follow
        </a>
      </div>
    </section>
  );
}
