import React from 'react';
import { Dog, Flame } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-4xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent glow-text px-4">
          Someone is $CAMPing AT ALL TIMES
        </h2>
      </div>

      <div className="bg-black/30 rounded-2xl p-4 md:p-8 border border-green-500/10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center">
            <Flame className="text-red-500 mr-2" />
            <h2 className="text-xl md:text-2xl font-bold">Live from the Campsite</h2>
          </div>
        </div>
        
        <div className="relative w-full rounded-xl overflow-hidden bg-black">
          <div className="aspect-video">
            <iframe 
              src="https://player.kick.com/campingto100milmcap"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              title="$CAMP Live Stream"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <span className="text-red-500 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            LIVE NOW
          </span>
        </div>
      </div>
    </section>
  );
}