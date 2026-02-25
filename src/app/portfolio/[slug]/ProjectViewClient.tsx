"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ProjectViewClient({ project }: { project: any }) {
    return (
        <div className="pt-[73px]">
            {/* Project Hero */}
            <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-6 flex gap-1 justify-center">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[#bff549] text-sm fill-icon">star</span>
                        ))}
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                        {project.title.split(' ')[0]} <br />
                        <span className="italic text-[#bff549]">{project.title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        <div className="text-center">
                            <span className="block text-4xl font-black text-[#bff549]">{project.metric}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{project.metricLabel}</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="text-center">
                            <span className="block text-sm font-bold uppercase tracking-widest mb-1">Industry</span>
                            <span className="text-slate-400 text-xs font-bold uppercase">{project.industry}</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="text-center">
                            <span className="block text-sm font-bold uppercase tracking-widest mb-1">Service</span>
                            <span className="text-slate-400 text-xs font-bold uppercase">{project.service}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-20">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">The <span className="text-[#bff549] italic">Challenge</span></h2>
                            <p className="text-slate-400 text-xl leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="aspect-video bg-neutral-900 border border-white/10 overflow-hidden relative group">
                            <img
                                src={project.img}
                                alt="Process"
                                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Technical <span className="text-[#bff549] italic">Execution</span></h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                We implemented a hyper-responsive frontend architecture using Next.js and Tailwind CSS, coupled with a robust AI processing layer. The system handles complex data streams with sub-100ms latency, providing real-time value to the end users.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                {["Next.js 14", "D3.js Visualization", "AI Prediction Engine", "Edge Runtime", "Tailwind Design", "Zero-Trust Auth"].map(tech => (
                                    <li key={tech} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#bff549]">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="p-8 border border-white/5 bg-neutral-900/50">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#bff549]">Impact</h3>
                            <div className="space-y-8">
                                <div>
                                    <div className="text-4xl font-black mb-1">{project.metric}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{project.metricLabel}</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black mb-1">40%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Efficiency Increase</div>
                                </div>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-12 w-full bg-[#bff549] text-black h-14 flex items-center justify-center font-black uppercase tracking-widest text-xs -skew-x-12 hover:bg-white transition-colors"
                            >
                                <span className="inline-block skew-x-12">Visit Project</span>
                            </a>
                        </div>

                        <div className="p-8 border border-white/5 italic text-slate-400 leading-relaxed text-sm">
                            &quot;{project.quote}&quot;
                            <div className="mt-6 flex items-center gap-4 not-italic">
                                <div className="size-10 bg-[#bff549] text-black flex items-center justify-center font-black text-xs">
                                    {project.initials}
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-white tracking-widest">{project.author}</div>
                                    <div className="text-[10px] font-bold uppercase text-slate-600 tracking-widest">{project.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pagination / Next Project */}
            <section className="py-32 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">
                    <Link href="/portfolio" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Portfolio
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/5 bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 p-12 lg:p-20 text-center relative z-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase">Ready to <span className="italic text-[#bff549]">Scale?</span></h2>
                    <p className="text-slate-400 font-medium mb-16 text-xl text-center">Let&apos;s build your next success story together.</p>
                    <ContactForm theme="dark" />
                </div>
            </section>
        </div>
    );
}
