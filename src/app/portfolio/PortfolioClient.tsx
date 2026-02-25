"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const caseStudies = [
    {
        id: "nexus",
        title: "NEXUS ANALYTICS",
        metric: "+147%",
        metricLabel: "Revenue Growth",
        metricPos: "top-6 right-6",
        quote: "2Guys Digital transformed our complex data into a seamless user experience. The AI-driven predictive models they implemented have completely shifted how our enterprise clients interact with their data.",
        author: "John D. Moore",
        role: "CTO, Nexus SaaS",
        initials: "JD",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdEJskWovU84Xq0CrLF77kQdM7kMFZ0tE9uxN10CMofwdUIEY8yDJDwWpsl0yV9ysJxmpte2Pmak6Pt6kzl93LruELTtHG8wgS76SamIHhwpadr-g-hVUxADCknYokFOsVvIEhqSSg6nxwtXQv8X8lC4VilFysqCuPR_KwUPHYQosMZ0ZqX-_TycCGzxsqPXRgkiKyg-n7l5mfzKny7y_efTAGzkM9PdcFIo7ENROOPRBcB310wAsnOQdETPhoHgPZBhzr-W3hpEc",
        reverse: false,
    },
    {
        id: "vault",
        title: "VAULT MOBILE",
        metric: "+120%",
        metricLabel: "User Retention",
        metricPos: "top-6 left-6",
        quote: "A high-stakes project delivered with surgical precision. The security features and intuitive flow helped us secure our Series B funding within months of launch.",
        author: "Sarah Chen",
        role: "Founder, Vault Finance",
        initials: "SC",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFu3RoG3pr3bl8IZfBZWqCdD5vxJTIo6UgIE4GKlkmu9fkrcSciWrErbUhcajvWkSGm0hvpONf-Uht4LItYwoJTz4sJAJiZji0Xk6T4G-WpCSsUzrWqYXW2Ld4gtIfQ4SfeQs-mZltoQPNrA9l4rhWn0lytzHmIXb7JG64sbIUE80CBJwaqKMsuAwnvv6Y74ioBXMkVI7gZkahg0IzC9FnrwfNiKVGZg2jW0E7MfpghBjzc9Zpd2L-qJxMwFnbFw92mUagnsaDwcg",
        reverse: true,
    },
];

export default function PortfolioPage() {
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
                        <button className="px-4 py-1.5 bg-[#bff549] text-black text-xs font-bold uppercase tracking-wider -skew-x-12">
                            <span className="inline-block skew-x-12">All</span>
                        </button>
                        {["E-commerce", "Fintech", "SaaS"].map((f) => (
                            <button key={f} className="px-4 py-1.5 border border-white/10 text-xs font-bold uppercase tracking-wider hover:border-[#bff549] transition-colors">{f}</button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bff549]">Service:</span>
                        {["Development", "AI Integration", "UI/UX Design"].map((f) => (
                            <button key={f} className="px-4 py-1.5 border border-white/10 text-xs font-bold uppercase tracking-wider hover:border-[#bff549] transition-colors">{f}</button>
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
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-40">
                {caseStudies.map((cs) => (
                    <div key={cs.id} className={`flex flex-col ${cs.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] overflow-hidden border border-white/10 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt={cs.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src={cs.img}
                                />
                                <div className={`absolute ${cs.metricPos} bg-[#bff549] text-black px-6 py-3`}>
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{cs.title}</h2>
                            <p className="text-slate-400 text-lg mb-8 italic">&quot;{cs.quote}&quot;</p>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="size-12 bg-neutral-800 flex items-center justify-center font-bold">
                                    {cs.initials}
                                </div>
                                <div>
                                    <p className="font-bold uppercase tracking-wider text-sm">{cs.author}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{cs.role}</p>
                                </div>
                            </div>
                            <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] hover:text-[#bff549] transition-colors mt-8 -skew-x-12">
                                <span className="inline-block skew-x-12">View Case Study</span>
                                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform inline-block skew-x-12">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                ))}
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
