import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="hero-gradient absolute inset-0 z-0" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 md:mb-12">
          <div className="w-48 h-48 md:w-72 md:h-72 mx-auto rounded-full shadow-[0_0_100px_rgba(74,222,128,0.2)] overflow-hidden bg-black border-4 border-emerald-500/20 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://i.postimg.cc/v8qQrwjg/2024-11-23-00-30-Photoroom.png" 
              alt="$CAMP Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-4 mb-8 md:mb-12">
          <h1 className="text-6xl md:text-8xl font-bold glow-text bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
            $CAMP
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-emerald-200/90">
            Together We Rise!
          </p>
        </div>
        
        <p className="text-lg md:text-2xl mb-8 md:mb-12 text-emerald-200/90 leading-relaxed max-w-3xl mx-auto">
          From a rugged past to a brighter future, $CAMP is more than a token—it's a global movement. 
          Join the campers as we prove that the power of community can overcome anything.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-8 md:mb-12">
          <a 
            href="https://t.me/camp100MM"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
          >
            <i className="fa-brands fa-telegram mr-3 text-xl md:text-2xl group-hover:scale-110 transition-transform" />
            Join the Campfire Now
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

        <div className="glass-card py-3 px-4 md:py-4 md:px-6 rounded-xl inline-block">
          <p className="text-sm md:text-lg font-bold text-emerald-300">CA: <span className="text-white font-mono break-all">Czj7k1FnEGV6qUjPSZaxRnRauBzAmmkfFA9snmCopump</span></p>
        </div>
      </div>
    </div>
  );
}