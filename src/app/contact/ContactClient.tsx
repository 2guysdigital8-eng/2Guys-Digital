"use client";

import ContactForm from "@/components/ContactForm";

const protocol = [
    { num: "01", title: "Technical Audit", desc: "A rigorous 30-minute analysis of your current infrastructure and architectural debt." },
    { num: "02", title: "ROI Strategy", desc: "We engineer a high-fidelity roadmap focused on speed-to-market and AI-led efficiency." },
    { num: "03", title: "Alpha Launch", desc: "Rapid deployment cycles with bi-weekly deliverables and real-time Slack integration." },
];

export default function ContactClient() {
    return (
        <div className="pt-[73px]">
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {/* Hero text */}
                <div className="mb-24">
                    <h1 className="text-6xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter uppercase">
                        Let&apos;s <span className="italic text-[#bff549]">Build</span>
                    </h1>
                    <p className="text-slate-400 text-lg lg:text-2xl mt-8 max-w-2xl font-light">
                        Ready to scale your digital presence with enterprise-grade AI solutions? Tell us about your project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left — form */}
                    <div className="space-y-12">
                        <ContactForm theme="dark" />

                        <div className="pt-16 space-y-12">
                            <div className="flex flex-wrap gap-x-12 gap-y-6 grayscale opacity-40">
                                {["Forbes 500", "TechCrunch", "Y Combinator"].map((name) => (
                                    <span key={name} className="text-xs font-black uppercase tracking-[0.3em]">{name}</span>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-4">Operations</p>
                                    <ul className="space-y-2 text-sm text-slate-300 font-medium">
                                        <li>San Francisco, CA</li>
                                        <li>Austin, TX</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-4">Inquiries</p>
                                    <ul className="space-y-2 text-sm text-slate-300 font-medium">
                                        <li>hello@2guysdigital.com</li>
                                        <li>+1 (555) 942-0102</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — protocol + testimonial */}
                    <div className="space-y-20 lg:pl-12 border-l border-white/10">
                        <div className="space-y-12">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#bff549]">The Protocol</h3>
                            <div className="space-y-16">
                                {protocol.map((step) => (
                                    <div key={step.num} className="flex gap-8 group">
                                        <div className="flex-none text-4xl font-black text-white/10 group-hover:text-[#bff549] transition-colors">
                                            {step.num}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{step.title}</h4>
                                            <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial card */}
                        <div className="bg-[#0a0a0a] border border-white/10 p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <span className="material-symbols-outlined text-[80px]">format_quote</span>
                            </div>
                            <blockquote className="text-2xl font-light leading-snug text-white/90 mb-8 italic">
                                &quot;The level of technical expertise at 2Guys Digital is unmatched. They didn&apos;t just build our app; they scaled our entire AI infrastructure for enterprise scale.&quot;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 overflow-hidden grayscale bg-slate-800"
                                    style={{
                                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzOS283r76Vpzl5QNngeXsjXTEuEGW9DHg0Wa3mWf8phqxif5cfS9ki-8Q4UjhBf0cDFZVCCnH-97ba27CGe3017Qt7Eq0Xet_t5KRuTEvWqu_nBMkyGUBf_FZSvQABhdnK0rN_ZZs6TJMabFaND1TuKz9X3ExpT1BfGO2duLQMqULCdtt_Bq1WuIPu8E3fTc315swNa8t4M923a8X4wRwh322dUYCU4OKs1orkvf2vr6EwOinJIuP0ihWxLRP1tDIdezbvNRaL_M')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider">Marcus Chen</p>
                                    <p className="text-[10px] text-[#bff549] uppercase font-black tracking-widest">Founder, Velocity Fintech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
