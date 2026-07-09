import { InstagramIcon, FacebookIcon, PinterestIcon } from "./SocialIcons";
import { contactInfo } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-display text-white text-lg mb-2">Sterling Bloom</p>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Event Design &amp; Decor</p>
          <p className="leading-relaxed">
            Creating meaningful celebrations through thoughtful design and effortless execution.
          </p>
        </div>

        <div>
          <p className="text-white mb-4">Quick Links</p>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-gold-light">About Us</a></li>
            <li><a href="#work" className="hover:text-gold-light">Our Work</a></li>
            <li><a href="#packages" className="hover:text-gold-light">Packages</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white mb-4">Contact Us</p>
          <ul className="space-y-2">
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>

        <div>
          <p className="text-white mb-4">Let&apos;s Stay Connected</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold">
              <PinterestIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Sterling Bloom Decor. All Rights Reserved.
      </div>
    </footer>
  );
}
