import React from 'react';

const images = [
  // High-quality unsplash placeholders representing private and yacht events
  { src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1600&auto=format&fit=crop', alt: 'Elegant table setting at a private event' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop', alt: 'Yacht party at sunset along the Côte d\'Azur' },
  { src: 'https://images.unsplash.com/photo-1603298576121-586c2d880e59?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwYXR8ZW58MHwwfHx8MTc2MjQyMTk3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Black tie event details' },
  { src: 'https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?q=80&w=1600&auto=format&fit=crop', alt: 'Champagne and canapés on a yacht deck' },
  { src: 'https://images.unsplash.com/photo-1603298576121-586c2d880e59?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwYXR8ZW58MHwwfHx8MTc2MjQyMTk3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Intimate ceremony by the sea' },
  { src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop', alt: 'Candid moments during a celebration' },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 md:text-4xl">Portfolio</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Curated highlights from private soirées and yacht gatherings across the Riviera.
          </p>
        </div>
        <div className="hidden text-sm text-zinc-500 md:block">Neutral palette • Minimal black • Elevated finish</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <figure key={idx} className="group relative overflow-hidden rounded-xl bg-zinc-100 shadow-sm">
            <img
              src={img.src}
              alt={img.alt}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-zinc-900/30 to-transparent p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
