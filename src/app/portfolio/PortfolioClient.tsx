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
        <div className="pt-[73px] bg-black">
            {/* Hero */}
            <section className="pt-24 pb-16 px-6 md:px-12 text-center border-b border-white/5">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter uppercase">Our Recent <span className="italic text-[#bff549]">Work</span></h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    We design and build high-performance digital products for brands looking to dominate their market through AI-driven innovation.
                </p>
            </section>

            <div className="relative">
                {/* Filter Bar - Sticky */}
                <header className="sticky top-[73px] z-20 py-8 px-6 md:px-12 bg-black/80 backdrop-blur-xl border-b border-white/5">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bff549]">Industry:</span>
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => setActiveIndustry(industry)}
                                    className={`h-10 px-6 text-[10px] font-black uppercase tracking-widest -skew-x-12 transition-all ${activeIndustry === industry
                                        ? "bg-[#bff549] text-black"
                                        : "bg-neutral-900 text-slate-500 hover:bg-neutral-800"
                                        }`}
                                >
                                    <span className="inline-block skew-x-12">{industry}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bff549]">Service:</span>
                            {services.map((service) => (
                                <button
                                    key={service}
                                    onClick={() => setActiveService(service)}
                                    className={`h-10 px-6 text-[10px] font-black uppercase tracking-widest -skew-x-12 transition-all ${activeService === service
                                        ? "bg-[#bff549] text-black"
                                        : "bg-neutral-900 text-slate-500 hover:bg-neutral-800"
                                        }`}
                                >
                                    <span className="inline-block skew-x-12">{service}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Case studies */}
                <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[500px]">
                    {filteredCaseStudies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                            {filteredCaseStudies.map((project) => (
                                <div key={project.id} className="group relative bg-black overflow-hidden flex flex-col">
                                    <Link href={`/portfolio/${project.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-neutral-900">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                        />
                                        {/* Overlay on hover - subtle darken for text legibility */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>

                                    <div className="p-8 border-t border-white/5 bg-neutral-900/30 flex flex-col grow text-white">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#bff549]">
                                            {project.industry}
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-[#bff549] transition-colors leading-none">
                                            {project.title.split(' ')[0]} <br />
                                            <span className="italic text-slate-400">{project.title.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                        <div className="mt-auto">
                                            <Link
                                                href={`/portfolio/${project.slug}`}
                                                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors"
                                            >
                                                <span>View Case Study</span>
                                                <span className="material-symbols-outlined text-[#bff549] text-sm transform group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Metric Badge */}
                                    <div className="absolute top-6 right-6 size-16 bg-[#bff549] rounded-full flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform z-10">
                                        <span className="text-black font-black text-sm">{project.metric}</span>
                                        <span className="text-black/60 text-[6px] font-bold uppercase tracking-tighter">Growth</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-40 text-center">
                            <h3 className="text-2xl font-bold mb-4 opacity-50 uppercase tracking-widest text-white">No matching case studies found</h3>
                            <button
                                onClick={() => { setActiveIndustry("All"); setActiveService("All"); }}
                                className="text-[#bff549] font-bold uppercase tracking-widest text-xs hover:underline"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </section>
            </div>

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
