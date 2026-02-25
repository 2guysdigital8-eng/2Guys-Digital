"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const phases = [
    { num: "01", icon: "search", title: "Discovery", desc: "Deep market intelligence and technical feasibility mapping to ensure zero-waste development cycles.", ai: "Automated competitive landscape analysis & requirements parsing.", highlight: false },
    { num: "02", icon: "account_tree", title: "Architecture", desc: "Structural mapping and database schema design built for infinite horizontal scalability.", ai: "LLM-assisted system diagram validation & edge-case modeling.", highlight: false },
    { num: "03", icon: "bolt", title: "Rapid Dev", desc: "High-velocity engineering sprints with daily builds and real-time stakeholder feedback loops.", ai: "Copilot-driven boilerplate & real-time unit test generation.", highlight: true },
    { num: "04", icon: "verified_user", title: "Quality Assurance", desc: "Rigorous security audits and performance stress testing to guarantee 99.99% uptime.", ai: "Continuous automated regression testing & security vulnerability scans.", highlight: false },
    { num: "05", icon: "rocket_launch", title: "Launch", desc: "Seamless blue-green deployment to production environments with zero downtime.", ai: "Edge-runtime optimization algorithms for global latency reduction.", highlight: false },
    { num: "06", icon: "trending_up", title: "Scale", desc: "Post-launch growth tracking and iterative feature expansion based on real-world data.", ai: "Real-time usage predictive scaling & user behavior modeling.", highlight: false },
];

export default function ProcessClient() {
    return (
        <div className="pt-[73px]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#bef547]/20 bg-[#bef547]/5 text-[#bef547] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-[#bef547] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 bg-[#bef547]" />
                        </span>
                        Enterprise Engineering Standards
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
                        Engineered for <br />
                        <span className="italic text-[#bef547]">Exponential ROI.</span>
                    </h1>
                    <p className="text-lg lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Moving beyond traditional development. We deploy a high-velocity, AI-augmented roadmap designed to ship enterprise-grade products in record time.
                    </p>
                </div>
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(190,245,71,0.15),transparent_70%)]" />
                </div>
            </section>

            {/* 6-phase Roadmap - Redesigned as a Journey */}
            <section className="py-32 px-6 lg:px-20 border-t border-white/5 bg-black relative overflow-hidden">
                {/* Background path line */}
                <div className="absolute left-1/2 top-40 bottom-40 w-px bg-gradient-to-b from-[#bef547]/0 via-[#bef547]/20 to-[#bef547]/0 hidden lg:block" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-1 border border-[#bef547]/30 text-[#bef547] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            The Delivery Journey
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 uppercase">
                            Our 6-Phase <span className="italic text-[#bff549]">Roadmap</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            A high-precision engineering path from initial intelligence to global scale, optimized for maximum velocity and zero-waste execution.
                        </p>
                    </div>

                    <div className="space-y-12 lg:space-y-0 relative">
                        {phases.map((p, i) => (
                            <div key={p.num} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} mb-20 lg:mb-32`}>
                                {/* Node Dot */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#bef547] rounded-full z-20 hidden lg:block shadow-[0_0_15px_rgba(190,245,71,0.5)]" />

                                {/* Content Card */}
                                <div className="w-full lg:w-[45%]">
                                    <div className={`p-8 lg:p-12 border border-white/5 bg-neutral-900/50 backdrop-blur-sm hover:border-[#bef547]/30 transition-all duration-500 group relative ${p.highlight ? "ring-1 ring-[#bef547]/20 shadow-[0_0_30px_rgba(190,245,71,0.05)]" : ""}`}>
                                        <div className="flex justify-between items-start mb-8">
                                            <span className="text-[#bef547] font-black text-xs tracking-[0.4em] italic opacity-50">{p.num}</span>
                                            <span className={`material-symbols-outlined text-3xl transition-transform group-hover:scale-110 duration-500 ${p.highlight ? "text-[#bef547]" : "text-[#bef547]/30"}`}>{p.icon}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 tracking-tight uppercase">{p.title}</h3>
                                        <p className="text-slate-400 text-base leading-relaxed mb-8">{p.desc}</p>

                                        <div className={`pt-8 border-t ${p.highlight ? "border-[#bef547]/20" : "border-white/10"}`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px w-8 bg-[#bef547]/40" />
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#bef547] font-black">AI Augmentation</span>
                                            </div>
                                            <p className="text-sm text-slate-300 leading-relaxed font-medium italic">&quot;{p.ai}&quot;</p>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#bef547]/0 group-hover:border-[#bef547]/40 transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#bef547]/0 group-hover:border-[#bef547]/40 transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Connector for Mobile (Empty space for desktop layout) */}
                                <div className="hidden lg:block lg:w-[10%] shrink-0" />

                                {/* Visual Cue / Detail */}
                                <div className="w-full lg:w-[45%] hidden lg:flex items-center justify-center">
                                    <div className="text-[10rem] font-black text-white/[0.02] select-none uppercase tracking-tighter">
                                        {p.title.split(' ')[0]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance case study */}
            <section className="py-24 px-6 lg:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6 text-[#bef547]">
                                <span className="material-symbols-outlined">analytics</span>
                                <span className="text-sm font-bold tracking-widest uppercase">Performance Case Study</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tighter">Optimizing <span className="italic text-[#bff549]">for Scale</span></h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Our technical stack is engineered for measurable results. By integrating AI-hybrid workflows, we&apos;ve redefined the industry standard for time-to-market.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: "speed", value: "Sub-100ms", label: "Global Response Time" },
                                    { icon: "encrypted", value: "Zero-Trust", label: "Enterprise Security Layer" },
                                ].map((item) => (
                                    <div key={item.value} className="flex items-center gap-4 p-4 border border-white/5 bg-[#efefef]/5">
                                        <div className="size-12 bg-[#bef547]/10 flex items-center justify-center text-[#bef547]">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold">{item.value}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden aspect-square lg:aspect-[4/5] bg-neutral-900 border border-white/10 shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="High Tech"
                                    className="w-full h-full object-cover opacity-60 grayscale"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq-f4uF-pFgnYtmetCbugj3flI9RCPlmVqHAd3PIVzbhh8BKkbCBCxXOpwWYIP7WvkBn12RqLOZbqXB3TCZJhmFlPVyNfNC2N9CpRSeT-T-O0d52lpBhI9zx577ztKgDrL5idD5LFKK86zLstS_lulBobdUQvpEshcyEl_N4bcn_U8GxTP2RLeZAAuDJ_rIEEQ4HiQsNHnbQYK-PsN2zIWF1Em5l3Is5tmR7RTMRNFgi-zNZ8AoVsZHuyBJ-X5QUhJjThV2z22N0Y"
                                />
                                <div className="absolute bottom-10 -left-6 lg:-left-12 bg-black border border-white/10 p-8 max-w-[280px] shadow-2xl backdrop-blur-xl z-20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="size-10 bg-[#bef547]/20 flex items-center justify-center text-[#bef547]">
                                            <span className="material-symbols-outlined">bolt</span>
                                        </div>
                                        <span className="text-4xl font-bold tracking-tight text-white">40%</span>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">Average reduction in time-to-market using our AI-hybrid workflow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-20 bg-black text-white">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4">Let&apos;s <span className="italic text-[#bff549]">Create Together</span></h2>
                        <p className="text-slate-400 text-lg">Tell us what you&apos;re interested in and we&apos;ll get right back to you.</p>
                    </div>
                    <ContactForm theme="dark" />
                    <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {[
                            { label: "Email", value: "hello@2guys-digital.com", href: "mailto:hello@2guys-digital.com" },
                            { label: "Call/Text", value: "+1 (305) 330 5981", href: "tel:+13053305981" },
                            { label: "Toll Free", value: "+1 (855) 661 0016", href: "tel:+18556610016" },
                        ].map((item) => (
                            <div key={item.label}>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">{item.label}</span>
                                <a className="font-bold hover:text-[#bef547] transition-colors" href={item.href}>{item.value}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
