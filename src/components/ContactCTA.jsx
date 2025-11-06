import React, { useState } from 'react';
import { Globe2, Mail, Phone, Instagram } from 'lucide-react';

const ContactCTA = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-neutral-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Reserve a Session</h2>
            <p className="mt-3 max-w-xl text-zinc-400">
              Based in the South of France with worldwide availability. Open to collaborations for
              commercial projects and professional endeavors.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-emerald-400" /> Côte d'Azur • Monaco • Cannes • Saint-Tropez • Worldwide</div>
              <a href="mailto:d.lobello240295@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-emerald-400" /> d.lobello240295@gmail.com
              </a>
              <a href="tel:+3383724912" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-emerald-400" /> +33 83 72 49 12
              </a>
              <a
                href="https://instagram.com/lobellodavide"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-emerald-400" /> @lobellodavide
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-400">Name</label>
                <input required type="text" className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-400">Email</label>
                <input required type="email" className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-400">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-400">Event Type</label>
                <select className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                  <option>Private Event</option>
                  <option>Yacht Event</option>
                  <option>Commercial / Collaboration</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-400">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Dates, location, expectations" />
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Request Sent ✓' : 'Request Availability'}
            </button>
            <p className="mt-3 text-center text-xs text-zinc-500">We reply within 24 hours. NDA on request.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
