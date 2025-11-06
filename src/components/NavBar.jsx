import React from 'react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-zinc-800">Côte Atelier</a>
        <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
          <a href="#portfolio" className="hover:text-zinc-900">Portfolio</a>
          <a href="#services" className="hover:text-zinc-900">Expertise</a>
          <a href="#reserve" className="hover:text-zinc-900">Reserve</a>
        </nav>
        <a href="#reserve" className="rounded-full bg-amber-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-amber-700 md:text-sm">Book</a>
      </div>
    </header>
  );
};

export default NavBar;
