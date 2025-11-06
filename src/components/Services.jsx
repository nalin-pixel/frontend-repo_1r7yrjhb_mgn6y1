import React from 'react';
import { Anchor, Glasses, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Anchor,
    title: 'Yacht Events',
    desc: 'Discreet, editorial coverage of onboard celebrations from sunrise departures to moonlit parties.'
  },
  {
    icon: Glasses,
    title: 'Private Occasions',
    desc: 'Intimate gatherings, anniversaries, and family milestones captured with refined subtlety.'
  },
  {
    icon: ShieldCheck,
    title: 'Confidentiality',
    desc: 'Strict NDA on request. Image handling and delivery aligned with high-profile expectations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-zinc-50/70 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 md:text-4xl">Expertise</h2>
        <p className="mt-2 max-w-2xl text-zinc-600">An elegant, minimal approach that lets your event take center stage.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-amber-600" />
              <h3 className="mt-4 text-lg font-medium text-zinc-800">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
