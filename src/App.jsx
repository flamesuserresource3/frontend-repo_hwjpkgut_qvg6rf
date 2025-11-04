import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PortfolioContact from './components/PortfolioContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e12] text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e12]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Editor</span>
            <span className="text-blue-100">.Pro</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <PortfolioContact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0e12] py-6 text-center text-xs text-blue-200/70">
        © {new Date().getFullYear()} Editor.Pro — All rights reserved.
      </footer>
    </div>
  );
}
