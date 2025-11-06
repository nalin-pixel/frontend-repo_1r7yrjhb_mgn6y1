import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Camera } from 'lucide-react';

const HeroCover = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark gradient overlays to enhance legibility; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 px-4 py-2 text-xs tracking-wide text-zinc-300 shadow-sm backdrop-blur">
          <Camera className="h-4 w-4 text-emerald-400" />
          <span>Private & Yacht Event Photography — Côte d'Azur</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Timeless imagery for intimate moments and glamorous gatherings
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
          An elegant, minimalist portfolio crafted for discerning clientele.
          Based in the South of France with worldwide availability.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          >
            Reserve a Session
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-3 text-sm font-medium text-zinc-100 shadow-sm transition-colors hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
