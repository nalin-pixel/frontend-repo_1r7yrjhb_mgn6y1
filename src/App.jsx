import React from 'react';
import NavBar from './components/NavBar';
import HeroCover from './components/HeroCover';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="font-['Inter','ui-sans-serif'] bg-neutral-950 text-zinc-100">
      <NavBar />
      <HeroCover />
      <PortfolioGrid />
      <Services />
      <ContactCTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} Côte Atelier — Private & Yacht Event Photography • South of France • Worldwide
        </div>
      </footer>
    </div>
  );
}

export default App;
