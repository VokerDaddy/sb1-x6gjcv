import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LiveStream } from './components/LiveStream';
import { Tokenomics } from './components/Tokenomics';
import { ChartSection } from './components/ChartSection';
import { FAQ } from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1A1A] text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
      <div className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-32">
          <About />
          <LiveStream />
          <Tokenomics />
          <ChartSection />
          <FAQ />
        </div>
        <footer className="text-center py-6 md:py-8 text-emerald-400 border-t border-emerald-900/20">
          <p className="font-medium tracking-wide text-sm md:text-base">$CAMP © 2024 | NO MORE RUG PULLS</p>
        </footer>
      </div>
    </div>
  );
}