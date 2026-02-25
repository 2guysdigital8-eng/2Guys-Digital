"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const teamMembers = [
    { name: "Alex Mercer", role: "Co-Founder & CEO", initials: "AM" },
    { name: "David Chen", role: "Co-Founder & CTO", initials: "DC" },
    { name: "Sarah Jenkins", role: "Head of AI Engineering", initials: "SJ" },
    { name: "Marcus Thorne", role: "VP of Product", initials: "MT" },
];

const values = [
    { title: "Radical Transparency", desc: "We believe in extreme transparency with our clients, code, and processes. No black boxes." },
    { title: "Engineering Excellence", desc: "We don't just write code; we architect systems designed for the next decade of scale." },
    { title: "Velocity Driven", desc: "Speed is a feature. We deliver enterprise-grade solutions faster by leveraging advanced AI workflows." },
];

export default function AboutClient() {
    return (
        <div className="pt-[73px]">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-6 md:px-12 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                        Building the <br /><span className="italic text-[#bff549]">Future of Digital.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        We are a collective of rogue engineers, AI specialists, and designers obsessed with pushing the boundaries of what&apos;s possible on the web.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto border-l-4 border-[#bff549] pl-8 md:pl-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#bff549] mb-4">Our Story</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        We started with a simple belief: <span className="italic text-slate-400">most enterprise software is too slow, too boring, and too fragile.</span>
                    </h3>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                        <p>
                            Founded in 2021 by two engineers tired of the bureaucratic red tape of big tech, 2Guys Digital was born out of a desire to build uncompromised digital products. We didn't want to just build websites; we wanted to engineer high-performance engines for growth.
                        </p>
                        <p>
                            Today, we are a global team of over 30 experts. We've replaced bloated legacy systems with sleek, AI-native architectures for Fortune 500s and ambitious startups alike. Our secret isn't magic; it's a relentless focus on modern fundamentals and aesthetic precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-32 px-6 md:px-12 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">The <span className="italic text-[#bff549]">Collective</span></h2>
                            <p className="text-slate-400 max-w-lg text-lg">The minds behind the machines.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="bg-black p-10 hover:bg-neutral-900 transition-colors group">
                                <div className="aspect-square bg-neutral-800 mb-8 flex items-center justify-center border border-white/5 group-hover:border-[#bff549]/30 transition-colors">
                                    <span className="text-5xl font-black text-slate-700 group-hover:text-[#bff549] transition-colors">{member.initials}</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                                <p className="text-sm text-[#bff549] font-bold uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 px-6 md:px-12 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-slate-500">How We Operate</h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Our Core <span className="italic text-[#bff549]">Values</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <div key={v.title} className="p-10 border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
                                <div className="absolute -top-4 -right-4 text-8xl font-black text-white/5 group-hover:text-[#bff549]/10 transition-colors select-none">
                                    0{i + 1}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">{v.title}</h4>
                                <p className="text-slate-400 leading-relaxed relative z-10">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/5 bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20 text-center relative z-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase">Ready to <span className="italic text-[#bff549]">Scale?</span></h2>
                    <p className="text-slate-400 font-medium mb-16 text-xl">Let's discuss how our team can accelerate your growth.</p>
                    <ContactForm theme="dark" />
                </div>
            </section>
        </div>
    );
}
