import React from 'react';
import { Mail, Film } from 'lucide-react';

const reels = [
  {
    title: 'Commercial Reel',
    thumb:
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Narrative Reel',
    thumb:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Music Video Reel',
    thumb:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  }
];

export default function PortfolioContact() {
  return (
    <div className="relative bg-[#0a0e12]">
      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Portfolio</h2>
          <span className="text-xs uppercase tracking-widest text-blue-200/70">Selected Work</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reels.map((r) => (
            <a
              key={r.title}
              href={r.link}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={r.thumb}
                  alt={r.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white opacity-0 transition group-hover:opacity-100">
                <div>
                  <p className="text-sm font-semibold">{r.title}</p>
                  <p className="text-xs text-blue-200/80">Watch reel</p>
                </div>
                <Film className="h-5 w-5 text-yellow-300" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-[#0a0e12] to-[#0b0f14] py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.07),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let’s work together</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100/80">
            Have a project in mind? I’m currently available for freelance collaborations and studio gigs.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/20 px-6 py-3 text-sm font-semibold text-yellow-200 backdrop-blur transition hover:bg-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <p className="mt-4 text-xs text-blue-200/70">Response within 24 hours • Based in NY • Remote-friendly</p>
        </div>
      </section>
    </div>
  );
}
