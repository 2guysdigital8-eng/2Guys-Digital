"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { caseStudies } from "@/lib/constants";

export default function PortfolioPage() {
    const [activeIndustry, setActiveIndustry] = useState("All");
    const [activeService, setActiveService] = useState("All");

    const industries = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];
    const services = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.service)))];

    const filteredCaseStudies = caseStudies.filter((cs) => {
        const industryMatch = activeIndustry === "All" || cs.industry === activeIndustry;
        const serviceMatch = activeService === "All" || cs.service === activeService;
        return industryMatch && serviceMatch;
    });

    return (
        <div className="pt-[73px]">
            {/* Hero */}
            <section className="pt-24 pb-16 px-6 md:px-12 text-center border-b border-white/5">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter uppercase">Our Recent <span className="italic text-[#bff549]">Work</span></h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    We design and build high-performance digital products for brands looking to dominate their market through AI-driven innovation.
                </p>
            </section>

            {/* Filter bar */}
            <section className="py-10 px-6 md:px-12 border-b border-white/5 sticky top-[72px] bg-black/95 backdrop-blur-md z-40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bff549]">Industry:</span>
                        {industries.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveIndustry(f)}
                                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${activeIndustry === f
                                        ? "bg-[#bff549] text-black -skew-x-12"
                                        : "border border-white/10 hover:border-[#bff549]"
                                    }`}
                            >
                                <span className={activeIndustry === f ? "inline-block skew-x-12" : ""}>{f}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bff549]">Service:</span>
                        {services.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveService(f)}
                                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${activeService === f
                                        ? "bg-[#bff549] text-black -skew-x-12"
                                        : "border border-white/10 hover:border-[#bff549]"
                                    }`}
                            >
                                <span className={activeService === f ? "inline-block skew-x-12" : ""}>{f}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client logo color grid */}
            <section className="grid grid-cols-2 md:grid-cols-5 border-b border-white/5">
                {[
                    { bg: "#1a1a1a", light: true }, { bg: "#f8d849", light: false }, { bg: "#ff4da6", light: false },
                    { bg: "#9ec5e8", light: false }, { bg: "#ffffff", light: false }, { bg: "#1a1a1a", light: true },
                    { bg: "#dbd4c4", light: false }, { bg: "#ffffff", light: false }, { bg: "#f8ff00", light: false },
                    { bg: "#e4efdf", light: false },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="aspect-square flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer border-r border-b border-white/5 last:border-r-0"
                        style={{ backgroundColor: item.bg }}
                    >
                        <div className={`w-16 h-8 ${item.light ? "bg-white/20" : "bg-black/10"}`} />
                    </div>
                ))}
            </section>

            {/* Case studies */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-40 min-h-[60vh]">
                {filteredCaseStudies.length > 0 ? (
                    filteredCaseStudies.map((cs) => (
                        <div key={cs.id} className={`flex flex-col ${cs.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                            <div className="w-full lg:w-1/2 relative">
                                <div className="aspect-[4/3] overflow-hidden border border-white/10 group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt={cs.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        src={cs.img}
                                    />
                                    <div className={`absolute ${cs.metricPos} bg-[#bff549] text-black px-6 py-3 shadow-xl`}>
                                        <span className="block text-3xl font-black">{cs.metric}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{cs.metricLabel}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mb-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-[#bff549] text-sm fill-icon">star</span>
                                    ))}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">{cs.title}</h2>
                                <p className="text-slate-400 text-lg mb-8 italic leading-relaxed">&quot;{cs.quote}&quot;</p>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="size-12 bg-neutral-800 flex items-center justify-center font-bold text-[#bff549]">
                                        {cs.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase tracking-wider text-sm">{cs.author}</p>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">{cs.role}</p>
                                    </div>
                                </div>
                                <Link
                                    href={`/portfolio/${cs.slug}`}
                                    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] hover:text-[#bff549] transition-colors mt-8 -skew-x-12 inline-flex"
                                >
                                    <span className="inline-block skew-x-12">View Case Study</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform inline-block skew-x-12">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-40 text-center">
                        <h3 className="text-2xl font-bold mb-4 opacity-50 uppercase tracking-widest">No matching case studies found</h3>
                        <button
                            onClick={() => { setActiveIndustry("All"); setActiveService("All"); }}
                            className="text-[#bff549] font-bold uppercase tracking-widest text-xs hover:underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="mt-20 border-t border-white/5 bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute top-10 -right-10 bg-[#bff549] text-black px-20 py-2 rotate-45 font-black italic text-2xl z-10">C2</div>
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20 text-center relative z-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase">Let&apos;s <span className="italic text-[#bff549]">Create Together</span></h2>
                    <p className="text-slate-400 font-medium mb-16 text-xl">Tell us what you&apos;re interested in and we&apos;ll get right back to you</p>
                    <ContactForm theme="dark" />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 text-center">
                        {[
                            { label: "Email", value: "hello@2guysdigital.com" },
                            { label: "Call/Text", value: "1 (305) 555-5981" },
                            { label: "Toll Free", value: "1 (855) 661-0016" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-slate-500">{item.label}</p>
                                <p className="font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
