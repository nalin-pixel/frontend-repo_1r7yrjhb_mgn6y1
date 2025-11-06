import React from 'react';
import NavBar from './components/NavBar';
import HeroCover from './components/HeroCover';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="font-['Inter','ui-sans-serif'] bg-white text-zinc-900">
      <NavBar />
      <HeroCover />
      <PortfolioGrid />
      <Services />
      <ContactCTA />
      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Côte Atelier — Private & Yacht Event Photography • South of France • Worldwide
        </div>
      </footer>
    </div>
  );
}

export default App;
