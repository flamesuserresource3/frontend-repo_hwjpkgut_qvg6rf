import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative isolate bg-[#0a0e12] py-20 text-blue-100">
      {/* background film-strip motif */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-[linear-gradient(90deg,transparent_0,transparent_92%,rgba(255,215,0,0.25)_92%,rgba(255,215,0,0.25)_94%,transparent_94%)]" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(90deg,transparent_0,transparent_92%,rgba(99,102,241,0.25)_92%,rgba(99,102,241,0.25)_94%,transparent_94%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            About Me
          </h2>
          <p className="mt-4 leading-relaxed text-blue-100/80">
            I’m a video editor with a decade of experience cutting commercials, trailers, music videos, and narrative films. My workflow blends precision editing with sound design, motion, and color to deliver polished, emotionally resonant stories.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-blue-100/80 sm:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Premiere Pro • Final Cut Pro</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">DaVinci Resolve • Color Grading</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Sound Design • Mix</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">Motion Graphics • Titles</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-400/10 blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
                alt="Editing timeline on a monitor"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-blue-200/70">A glimpse of my editing timeline – clean, organized, and story-first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
