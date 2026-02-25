"use client";

import React from "react";

const services = [
    "LLM Integration.",
    "Neural Architecture.",
    "Data Pipelines.",
    "AI Strategy.",
    "Custom RAG Solutions.",
    "Agentic Workflows.",
];

export default function ScrollingServices() {
    return (
        <div className="py-20 bg-black overflow-hidden border-y border-white/5 select-none">
            <div className="flex whitespace-nowrap overflow-hidden group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] py-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12 px-6">
                            {services.map((service, index) => (
                                <span
                                    key={index}
                                    className={`text-6xl md:text-8xl font-black uppercase tracking-tighter ${index % 2 === 0
                                            ? "text-white"
                                            : "text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/40 border-outline"
                                        } hover:text-[#bff549] transition-colors duration-500`}
                                    style={{
                                        WebkitTextStroke: index % 2 !== 0 ? "1px rgba(255,255,255,0.2)" : "0",
                                    }}
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
}
