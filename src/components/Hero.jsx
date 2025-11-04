import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-blue-200/80">
          Cinematic • Modern • Precise
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          I’m a <span className="bg-gradient-to-r from-blue-300 to-yellow-400 bg-clip-text text-transparent">Professional Editor</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-blue-100/80 sm:text-lg">
          Crafting compelling stories through picture, pace, and sound. I specialize in narrative, branded, and music content with a focus on clean cuts and cinematic color.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#portfolio"
            className="rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            View My Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-blue-100/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
