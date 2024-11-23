import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FAQ() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent glow-text px-4">
          $CAMPing to 100M Market Cap!
        </h2>
      </div>

      <div className="text-center px-4">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent glow-text">
          Ready to Join the Movement?
        </h2>
        <p className="text-lg md:text-2xl text-emerald-200/90 mb-8 md:mb-12 max-w-3xl mx-auto">
          Together, we can camp our way to a brighter crypto future. Become a part of the $CAMP family today!
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
          <a 
            href="https://t.me/camp100MM"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
          >
            <i className="fa-brands fa-telegram mr-3 text-xl md:text-2xl group-hover:scale-110 transition-transform" />
            Join Our Telegram
          </a>
          <a 
            href="https://dexscreener.com/solana/altp3uxdo9xysl2cdt6dlxtfaeeerhnkvfbctydy7fwq"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.postimg.cc/v8qQrwjg/2024-11-23-00-30-Photoroom.png"
              alt="$CAMP"
              className="w-5 h-5 md:w-6 md:h-6 mr-3 rounded-full"
            />
            Buy $CAMP Now
            <ArrowUpRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}