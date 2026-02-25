"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const services = [
    { num: "01", icon: "language", title: "Web Systems", desc: "High-performance platforms optimized for hyper-conversion and global enterprise reach.", roi: "+40% Conversion" },
    { num: "02", icon: "memory", title: "AI Engineering", desc: "Custom LLM workflows designed to automate complexity and scale operational output.", roi: "50% Efficiency" },
    { num: "03", icon: "phone_iphone", title: "Mobile Platforms", desc: "Scalable native solutions for iOS and Android built on future-proof architecture.", roi: "2X Retention" },
    { num: "04", icon: "grid_view", title: "UI/UX Systems", desc: "Precision-engineered interfaces that define brand identity and drive behavior.", roi: "30% CLV Boost" },
];

const techStats = [
    { value: "150ms", label: "Edge Performance", icon: "bolt", desc: "Average edge response time across our global deployments." },
    { value: "SOC 2", label: "Security First", icon: "security", desc: "Enterprise-grade security protocols baked into every line of code." },
    { value: "100%", label: "AI Native", icon: "psychology", desc: "New builds feature native LLM integrations for autonomous workflows." },
];

export default function ServicesClient() {
    return (
        <div className="pt-[73px]">
            {/* Hero */}
            <section className="px-6 lg:px-20 pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#bff549]/30 bg-[#bff549]/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-[#bff549] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 bg-[#bff549]" />
                        </span>
                        <span className="text-[#bff549] text-[10px] font-bold uppercase tracking-widest">Enterprise Ready</span>
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        SERVICES BUILT <br /><span className="text-[#bff549] italic">FOR SCALE</span>
                    </h1>
                    <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                        We engineer high-performance digital ecosystems. By leveraging advanced AI integrations and user-centric design, we deliver solutions that drive measurable ROI.
                    </p>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-10 overflow-hidden border-y border-white/5 bg-white/[0.02]">
                <div className="flex">
                    <div className="marquee-track text-6xl lg:text-8xl font-black uppercase whitespace-nowrap opacity-20">
                        <span className="pr-12">Development.</span>
                        <span className="text-outline pr-12">Maintenance.</span>
                        <span className="pr-12">Integration.</span>
                        <span className="text-outline pr-12">Scale.</span>
                        <span className="pr-12">Development.</span>
                        <span className="text-outline pr-12">Maintenance.</span>
                        <span className="pr-12">Integration.</span>
                        <span className="text-outline pr-12">Scale.</span>
                    </div>
                </div>
            </div>

            {/* Services 2×2 */}
            <section className="px-6 lg:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {services.map((s, i) => (
                        <div key={s.num} className={`group bg-black p-12 lg:p-20 hover:bg-[#bff549]/5 transition-colors ${i >= 2 ? "border-t border-white/10" : ""} ${i % 2 === 1 ? "border-l border-white/10" : ""}`}>
                            <div className="mb-8 flex justify-between items-start">
                                <span className="text-[#bff549] font-bold text-4xl">{s.num}</span>
                                <span className="material-symbols-outlined text-white/20 group-hover:text-[#bff549] transition-colors text-5xl">{s.icon}</span>
                            </div>
                            <h3 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tighter group-hover:text-[#bff549] transition-colors">{s.title}</h3>
                            <p className="text-slate-400 text-lg mb-8 max-w-sm">{s.desc}</p>
                            <div className="pt-8 border-t border-white/10">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">ROI Metric</p>
                                <p className="text-3xl font-black text-[#bff549]">{s.roi}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical prowess */}
            <section className="px-6 lg:px-20 py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4">Technical <span className="italic text-[#bff549]">Prowess</span></h2>
                            <p className="text-slate-400 max-w-lg text-lg">Our stack is built for the demands of tomorrow&apos;s enterprise.</p>
                        </div>
                        <div className="text-right">
                            <span className="text-6xl font-black text-[#bff549]">2025</span>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Current Standard</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {techStats.map((t) => (
                            <div key={t.value} className="bg-[#0a0a0a] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-6xl">{t.icon}</span>
                                </div>
                                <h4 className="text-4xl font-bold mb-4">{t.value}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.desc}</p>
                                <div className="text-[10px] uppercase font-bold text-[#bff549] tracking-widest">{t.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Workflow */}
            <section className="px-6 lg:px-20 py-32">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 relative">
                        <div className="aspect-square bg-white/5 overflow-hidden border border-white/10 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="AI Workflow" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZXsBQVHbNs01FYNj8JNQZtzaTBSxN4_YBSOrhvhAchb7TRnCKoh9l15MP_FVFT8IEygfMXR4ddwQl_0bJc7nbLRWi_RKct_65lZrd5FrBjf5u7BcM3IVOfJBI2nlu9arWTXbK-oYDvYv6HkHUogQN4JVuTp09_GKuWsCVIs-pvf0Llll3gHDk4G7VZc9loS9TwVa3jvtqnrd3QT0u1RZp32EbF9rPtuhOgU5fWfDdrjINr30ZmkucOy02i9KY9qV03yFXzaR5Oao" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="size-10 bg-[#bff549] flex items-center justify-center text-black">
                                            <span className="material-symbols-outlined font-bold">bolt</span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black">40%</h4>
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Time-to-market reduction</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">&quot;Our partnership transformed our operational efficiency. Their AI-hybrid workflow is a competitive advantage.&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#bff549] font-bold uppercase tracking-[0.3em] text-xs mb-6">Service Deep Dive</p>
                        <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]">AI WORKFLOW <br /><span className="italic text-[#bff549]">AUTOMATION</span></h2>
                        <div className="space-y-8 mb-10">
                            {[
                                { title: "Custom LLM Training", desc: "We train models on your proprietary data to ensure brand consistency and data privacy." },
                                { title: "Legacy System Bridge", desc: "Connecting modern AI capabilities with your existing ERP and CRM ecosystems." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-6">
                                    <div className="size-8 bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[#bff549] text-sm">check</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/portfolio" className="inline-flex bg-[#bff549] text-black px-10 py-5 font-black uppercase tracking-widest items-center gap-3 hover:scale-105 transition-transform -skew-x-12 mt-8">
                            <span className="inline-flex items-center gap-3 skew-x-12">
                                View Case Studies
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 lg:px-20 py-32 bg-black text-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 p-12 lg:p-20">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 uppercase">Let&apos;s build <br /><span className="italic text-[#bff549]">together.</span></h2>
                            <p className="text-slate-400 text-xl">Tell us about your next project and we&apos;ll show you how we can accelerate your growth.</p>
                        </div>
                        <ContactForm theme="dark" />
                        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
                            <div><p className="text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Email</p><a className="text-xl font-bold hover:text-[#bff549] transition-colors" href="mailto:hello@2guysdigital.com">hello@2guysdigital.com</a></div>
                            <div><p className="text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Location</p><p className="text-xl font-bold">Global / Remote</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
