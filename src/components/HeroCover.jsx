import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Camera } from 'lucide-react';

const HeroCover = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs tracking-wide text-zinc-600 shadow-sm backdrop-blur">
          <Camera className="h-4 w-4 text-amber-600" />
          <span>Private & Yacht Event Photography — Côte d'Azur</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-800 sm:text-5xl md:text-6xl">
          Timeless imagery for intimate moments and glamorous gatherings
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
          An elegant, minimalist portfolio presentation crafted for discerning clientele. 
          Based in the South of France with worldwide availability.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600/30"
          >
            Reserve a Session
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
