import React from 'react';
import { Film, Scissors, Palette, Sliders } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Creative Editing',
    desc: 'Narrative, branded, and music content cut for emotion, rhythm, and clarity.'
  },
  {
    icon: Film,
    title: 'Trailer & Teasers',
    desc: 'High-impact cuts with dynamic pacing to build anticipation and drive clicks.'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    desc: 'Cinematic looks and clean color management tailored to your brand or story.'
  },
  {
    icon: Sliders,
    title: 'Sound & Finishing',
    desc: 'Sound design, titles, and finishing touches for a release-ready master.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0f14] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.06),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Services</h2>
          <span className="text-xs uppercase tracking-widest text-blue-200/70">Flexible Packages</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition group-hover:scale-110" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-600/30 to-yellow-400/20 p-2 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="relative mt-3 text-sm leading-relaxed text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
