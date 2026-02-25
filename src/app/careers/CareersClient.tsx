import Link from "next/link";
import { jobs } from "@/lib/constants";
import CareersForm from "@/components/CareersForm";

export default function CareersClient() {
    return (
        <div className="pt-[73px] bg-[#efefef]">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-6 md:px-12 text-center border-b border-black/5 bg-black text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                        Build the <br /><span className="italic text-[#bff549]">Impossible.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        We are looking for elite engineers, designers, and strategists who are obsessed with quality and driven by impact.
                        Come do the best work of your life.
                    </p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 px-6 md:px-12 bg-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-[#bff549]">Perks & Benefits</h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-black">Why Join <span className="italic text-[#bff549]">Us?</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
                        {[
                            { title: "Remote-First", desc: "Work from anywhere in the world. We care about output, not hours spent at a desk.", icon: "public" },
                            { title: "Competitive Comp", desc: "Top-tier salary, equity packages, and performance bonuses.", icon: "paid" },
                            { title: "Home Office Budget", desc: "$2,000 allowance to build your perfect remote setup.", icon: "computer" },
                            { title: "Continuous Learning", desc: "Annual stipend for courses, conferences, and books.", icon: "menu_book" },
                        ].map((benefit) => (
                            <div key={benefit.title} className="bg-white p-10 hover:bg-[#bff549]/5 transition-colors group">
                                <span className="material-symbols-outlined text-4xl mb-6 text-slate-600 group-hover:text-[#bff549] transition-colors">{benefit.icon}</span>
                                <h4 className="text-xl font-bold mb-3 text-black">{benefit.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-32 px-6 md:px-12 border-y border-black/5 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-black">Open <span className="italic text-[#bff549]">Roles</span></h2>
                        <p className="text-slate-600 max-w-lg mx-auto">Don't see a fit? Reach out anyway. We always have room for exceptional talent.</p>
                    </div>

                    <div className="space-y-4">
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <Link href={`/careers/${job.slug}`} key={job.title} className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-black/5 bg-[#efefef] hover:bg-white hover:border-[#bff549]/30 transition-all">
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2 text-black group-hover:text-[#bff549] transition-colors">{job.title}</h4>
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                                            <span>{job.department}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span>{job.location}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 md:mt-0 flex items-center justify-center size-12 border border-black/10 group-hover:border-[#bff549] bg-white group-hover:bg-[#bff549]/10 transition-colors">
                                        <span className="material-symbols-outlined text-[#bff549] -rotate-45 group-hover:rotate-0 transition-transform">arrow_forward</span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="py-20 px-12 border border-dashed border-black/10 bg-[#efefef]/50 text-center flex flex-col items-center">
                                <div className="size-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                                    <span className="material-symbols-outlined text-4xl text-slate-400">work_off</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-black">No open roles currently</h4>
                                <p className="text-slate-500 max-w-sm mx-auto mb-12">We are currently at capacity. Follow us or send a general application below to stay on our radar.</p>
                                <div className="flex gap-4">
                                    <div className="h-px w-12 bg-black/10 mt-2" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bff549]">Elite Talent Only</span>
                                    <div className="h-px w-12 bg-black/10 mt-2" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-32 px-6 md:px-12 bg-[#efefef]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-[#bff549]">Apply Now</h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black">General <span className="italic text-[#bff549]">Application</span></h3>
                    </div>
                    <CareersForm />
                </div>
            </section>
        </div>
    );
}
