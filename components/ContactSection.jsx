"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Tell us about your event and our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+14371234567"
              className="bg-gold hover:bg-gold-light transition-colors text-sm font-medium tracking-wide px-7 py-4"
            >
              Book a Consultation
            </a>
            <a
              href="https://wa.me/14371234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white transition-colors text-sm font-medium tracking-wide px-7 py-4"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your Name" className="bg-white/5 border border-white/20 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold" />
          <input name="email" type="email" required placeholder="Email Address" className="bg-white/5 border border-white/20 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold" />
          <input name="phone" placeholder="Phone Number" className="bg-white/5 border border-white/20 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold" />
          <input name="eventDate" type="date" className="bg-white/5 border border-white/20 px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-gold" />
          <select name="eventType" className="sm:col-span-2 bg-white/5 border border-white/20 px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-gold">
            <option value="">Event Type</option>
            <option>Wedding</option>
            <option>Nikkah</option>
            <option>Mehndi</option>
            <option>Engagement</option>
            <option>Corporate Event</option>
            <option>Private Celebration</option>
          </select>
          <textarea name="message" rows={4} placeholder="Your Message" className="sm:col-span-2 bg-white/5 border border-white/20 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="sm:col-span-2 bg-gold hover:bg-gold-light transition-colors text-sm font-medium tracking-wide px-7 py-4 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="sm:col-span-2 text-sm text-gold-light">Thanks — we&apos;ll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="sm:col-span-2 text-sm text-red-400">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
