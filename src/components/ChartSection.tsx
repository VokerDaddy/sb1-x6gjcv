import React from 'react';
import { LineChart, ArrowUpRight } from 'lucide-react';

export function ChartSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="bg-black/30 rounded-2xl p-4 md:p-8 border border-green-500/10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center">
            <LineChart className="text-green-400 mr-2" />
            <h2 className="text-xl md:text-2xl font-bold">Live Chart</h2>
          </div>
          <a 
            href="https://dexscreener.com/solana/altp3uxdo9xysl2cdt6dlxtfaeeerhnkvfbctydy7fwq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 flex items-center transition-colors"
          >
            Full Chart <ArrowUpRight className="ml-1" />
          </a>
        </div>
        
        <div className="relative rounded-xl overflow-hidden border border-gray-800">
          <iframe
            src="https://dexscreener.com/solana/altp3uxdo9xysl2cdt6dlxtfaeeerhnkvfbctydy7fwq?embed=1&theme=dark"
            style={{ width: '100%', height: '400px', minHeight: '400px' }}
            frameBorder="0"
            allowFullScreen
            title="$CAMP Price Chart"
            className="bg-[#1C1C1C] md:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}