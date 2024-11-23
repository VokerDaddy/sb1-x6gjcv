import React from 'react';

export function Tokenomics() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent glow-text px-4">
          Transparent Tokenomics
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-emerald-200/90 mb-6 md:mb-8">Built by Campers for Campers</p>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-hidden rounded-xl border border-green-500/10 bg-black/30 min-w-[320px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-green-500/10">
                <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold text-green-400">Attribute</th>
                <th className="px-4 md:px-6 py-4 text-left text-sm font-semibold text-green-400">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Blockchain</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">Solana</td>
              </tr>
              <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Total Supply</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">1,000,000,000 CAMP</td>
              </tr>
              <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Available Supply</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">755,359,288 CAMP</td>
              </tr>
              <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Mintable</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">No</td>
              </tr>
              <tr className="border-b border-green-500/10 hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Freezable</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">No</td>
              </tr>
              <tr className="hover:bg-green-500/5 transition-colors cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-white font-medium">Mission</td>
                <td className="px-4 md:px-6 py-4 text-gray-300">NO MORE RUG PULLS—A crypto project you can trust.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}