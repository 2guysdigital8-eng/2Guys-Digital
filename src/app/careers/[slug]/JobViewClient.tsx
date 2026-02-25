"use client";

import { useState } from "react";
import Link from "next/link";
import CareersForm from "@/components/CareersForm";
import ContactForm from "@/components/ContactForm";

export default function JobViewClient({ job }: { job: any }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="pt-[73px] bg-[#efefef]">
            {/* Job Header */}
            <section className="py-24 px-6 md:px-12 border-b border-black/5 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <Link href="/careers" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#bff549] transition-colors mb-12">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Careers
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#bff549]">
                                {job.department} — {job.type}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                {job.title.split(' ')[0]} <br />
                                <span className="italic text-slate-400">{job.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <div className="flex items-center gap-4 mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    {job.location}
                                </span>
                            </div>
                        </div>

                        {!showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="bg-[#bff549] text-black h-16 px-12 flex items-center justify-center font-black uppercase tracking-widest text-xs -skew-x-12 hover:bg-[#efefef] transition-all shadow-[0_0_30px_rgba(191,245,73,0.15)] group"
                            >
                                <span className="inline-block skew-x-12 group-hover:scale-110 transition-transform">Apply Now</span>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Job Content */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
                <div className={`grid ${showForm ? 'md:grid-cols-1' : 'md:grid-cols-3'} gap-20`}>
                    <div className={`${showForm ? 'hidden' : 'md:col-span-2'} prose prose-slate max-w-none`}>
                        <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                            {job.fullDescription}
                        </div>
                    </div>

                    <div className={showForm ? 'w-full' : 'md:col-span-1'}>
                        {showForm ? (
                            <div id="apply-form" className="scroll-mt-32">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-black uppercase tracking-tighter text-black">Application Details</h2>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-black transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <CareersForm />
                            </div>
                        ) : (
                            <div className="p-8 border border-black/5 bg-white sticky top-32">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#bff549]">Our Process</h3>
                                <div className="space-y-6">
                                    {[
                                        { s: "01", t: "Application Review", d: "We review your work and fit." },
                                        { s: "02", t: "Technical Call", d: "A deep dive into your skills." },
                                        { s: "03", t: "Cultural Fit", d: "Meet the team and the vision." },
                                        { s: "04", t: "Final Offer", d: "Welcome to 2Guys Digital." },
                                    ].map(step => (
                                        <div key={step.s} className="flex gap-4">
                                            <span className="text-[10px] font-black text-slate-200">{step.s}</span>
                                            <div>
                                                <div className="text-sm font-bold uppercase tracking-widest mb-1 text-black">{step.t}</div>
                                                <div className="text-xs text-slate-500">{step.d}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                        setTimeout(() => {
                                            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}
                                    className="mt-12 w-full border border-black/10 hover:border-[#bff549] text-black h-14 flex items-center justify-center font-black uppercase tracking-widest text-xs -skew-x-12 transition-all group"
                                >
                                    <span className="inline-block skew-x-12 group-hover:text-[#bff549]">Quick Apply</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="border-t border-black/5 bg-black py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20 text-center relative z-20 overflow-hidden text-white">
                    <div className="absolute top-0 right-0 size-32 bg-[#bff549]/5 -rotate-45 translate-x-16 -translate-y-16" />
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none">Not Your <span className="italic text-[#bff549]">Fit?</span></h2>
                    <p className="text-slate-400 font-medium mb-16 text-lg">Send us your open application and we'll keep you in mind.</p>
                    <ContactForm theme="dark" />
                </div>
            </section>
        </div>
    );
}
