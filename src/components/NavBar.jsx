import React from 'react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-zinc-100">Côte Atelier</a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#portfolio" className="transition-colors hover:text-white">Portfolio</a>
          <a href="#services" className="transition-colors hover:text-white">Expertise</a>
          <a href="#reserve" className="transition-colors hover:text-white">Reserve</a>
        </nav>
        <a href="#reserve" className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-emerald-600 md:text-sm">Book</a>
      </div>
    </header>
  );
};

export default NavBar;
