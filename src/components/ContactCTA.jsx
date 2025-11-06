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
    <section id="reserve" className="relative overflow-hidden bg-white py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/60 via-transparent to-amber-50/60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 md:text-4xl">Reserve a Session</h2>
            <p className="mt-3 max-w-xl text-zinc-600">
              Based in the South of France with worldwide availability. Open to collaborations for
              commercial projects and professional endeavors.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-amber-600" /> Côte d'Azur • Monaco • Cannes • Saint-Tropez • Worldwide</div>
              <a href="mailto:d.lobello240295@gmail.com" className="flex items-center gap-2 hover:text-zinc-900">
                <Mail className="h-4 w-4 text-amber-600" /> d.lobello240295@gmail.com
              </a>
              <a href="tel:+3383724912" className="flex items-center gap-2 hover:text-zinc-900">
                <Phone className="h-4 w-4 text-amber-600" /> +33 83 72 49 12
              </a>
              <a
                href="https://instagram.com/lobellodavide"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-zinc-900"
              >
                <Instagram className="h-4 w-4 text-amber-600" /> @lobellodavide
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-600">Name</label>
                <input required type="text" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-600">Email</label>
                <input required type="email" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-600">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-600">Event Type</label>
                <select className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20">
                  <option>Private Event</option>
                  <option>Yacht Event</option>
                  <option>Commercial / Collaboration</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-zinc-600">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20" placeholder="Dates, location, expectations" />
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600/30 disabled:cursor-not-allowed disabled:opacity-60"
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
