"use client";

import React from "react";

export default function BentoStats() {
    return (
        <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#bff549]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                            Quantifiable <span className="italic text-[#bff549]">Excellence</span>
                        </h2>
                        <p className="text-slate-500 text-lg">Our impact is measured in the success and scale of global enterprises.</p>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-600 block mb-2">Real-time Data</span>
                        <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#bff549]/30" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
                    {/* AI Deployments - Large 2x1 */}
                    <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden -skew-x-2">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-[#bff549]">psychology</span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bff549] to-transparent -translate-x-full group-hover:animate-scan" />
                        <div>
                            <span className="text-7xl font-black text-[#bff549] tracking-tighter block mb-2">100+</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise AI Deployments</span>
                        </div>
                        <p className="text-slate-600 text-xs max-w-xs group-hover:text-slate-400 transition-colors">Scaling autonomous intelligence across cloud and edge infrastructures.</p>
                    </div>

                    {/* Industry Experts - 1x1 */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden hover:bg-[#bff549]/5 transition-colors">
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl">groups</span>
                        </div>
                        <span className="text-5xl font-black text-white tracking-tighter group-hover:text-[#bff549] transition-colors">30+</span>
                        <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Elite Team</span>
                            <span className="text-sm font-bold text-white tracking-tight">Industry Experts</span>
                        </div>
                    </div>

                    {/* Up-time - 1x1 */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden hover:bg-[#bff549]/5 transition-colors">
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl">speed</span>
                        </div>
                        <span className="text-5xl font-black text-white tracking-tighter group-hover:text-[#bff549] transition-colors">99.9%</span>
                        <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Reliability</span>
                            <span className="text-sm font-bold text-white tracking-tight">Guaranteed Up-time</span>
                        </div>
                    </div>

                    {/* Global Offices - 1x1 */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden hover:bg-[#bff549]/5 transition-colors">
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl">public</span>
                        </div>
                        <span className="text-5xl font-black text-white tracking-tighter group-hover:text-[#bff549] transition-colors">10</span>
                        <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Footprint</span>
                            <span className="text-sm font-bold text-white tracking-tight">Global Offices</span>
                        </div>
                    </div>

                    {/* Industries Served - 1x1 */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden hover:bg-[#bff549]/5 transition-colors">
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl">category</span>
                        </div>
                        <span className="text-5xl font-black text-white tracking-tighter group-hover:text-[#bff549] transition-colors">15+</span>
                        <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-1">Versatility</span>
                            <span className="text-sm font-bold text-white tracking-tight">Sector Coverage</span>
                        </div>
                    </div>

                    {/* Completed Projects - Large 2x1 */}
                    <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden skew-x-2">
                        <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-[#bff549]">rocket_launch</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bff549] to-transparent translate-x-full group-hover:animate-scan-rev" />
                        <div className="text-right">
                            <span className="text-7xl font-black text-[#bff549] tracking-tighter block mb-2">250+</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Success Stories</span>
                        </div>
                        <p className="text-slate-600 text-xs ml-auto text-right max-w-xs group-hover:text-slate-400 transition-colors">Delivering high-stakes digital transformations for industry leaders.</p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
          @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes scan-rev {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
          .animate-scan-rev {
            animation: scan-rev 3s linear infinite;
          }
        `}</style>
        </section>
    );
}
