import React from 'react';

export function About() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent glow-text">
          The Campfire Story
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-emerald-200/90 mb-6 md:mb-8">
          Rugged but Resilient
        </p>
        <p className="text-lg md:text-2xl text-emerald-100/90 leading-relaxed mb-8 md:mb-12">
          It started as a dream—a guy camping with his dog, livestreaming his journey to a $100M market cap. 
          The community loved it, taking $CAMP to $2M MC. But then, the unthinkable happened: the dev rug pulled us. 
          Instead of letting the dream die, the campers took over. Now, we own $CAMP, united by a shared mission: NO MORE RUG PULLS.
        </p>
        <div className="relative group">
          <img 
            src="https://i.postimg.cc/tT52ZjX2/2024-11-23-05-10-33.jpg" 
            alt="Camping Scene" 
            className="rounded-2xl w-full shadow-2xl shadow-emerald-500/20 transform transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
}