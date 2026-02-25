"use client";

import { useState } from "react";

interface CareersFormProps {
    title?: string;
    description?: string;
}

export default function CareersForm({
    title = "General Application Apply Now",
    description = "Share your story with us and let's build something extraordinary together."
}: CareersFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [resumeName, setResumeName] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="p-12 bg-neutral-900 text-center border border-white/5">
                <div className="size-16 bg-[#bff549]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[#bff549] text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Application Received</h3>
                <p className="text-slate-400 text-sm mt-4">We've received your application and will review it shortly. Keep an eye on your inbox.</p>
            </div>
        );
    }

    return (
        <div className="bg-neutral-900 p-12 lg:p-20 relative border border-white/5">
            <div className="absolute top-4 right-4 bg-[#bff549] text-black px-4 py-1 font-black text-xl italic skew-x-[-15deg]">
                <span className="inline-block skew-x-[15deg]">C2 Digital</span>
            </div>

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 italic leading-none">{title}</h2>
                <p className="text-slate-400 font-medium">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-white/5 border border-white/10 h-16 px-6 text-white focus:border-[#bff549] outline-none transition-colors"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-white/5 border border-white/10 h-16 px-6 text-white focus:border-[#bff549] outline-none transition-colors"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        required
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full bg-white/5 border border-white/10 h-16 px-6 text-white focus:border-[#bff549] outline-none transition-colors"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full bg-white/5 border border-white/10 h-16 px-6 text-white focus:border-[#bff549] outline-none transition-colors"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        required
                        type="url"
                        placeholder="Portfolio / GitHub Link"
                        className="w-full bg-white/5 border border-white/10 h-16 px-6 text-white focus:border-[#bff549] outline-none transition-colors"
                    />
                    <div className="relative group">
                        <input
                            required
                            type="file"
                            id="resume-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setResumeName(e.target.files?.[0]?.name || '')}
                            className="hidden"
                        />
                        <label
                            htmlFor="resume-upload"
                            className="w-full bg-white/5 border border-white/10 h-16 px-6 flex items-center justify-between text-slate-400 group-hover:border-[#bff549] cursor-pointer transition-colors"
                        >
                            <span className="text-sm truncate pr-4">
                                {resumeName || "Upload Resume / CV (PDF)"}
                            </span>
                            <span className="material-symbols-outlined text-[#bff549]">upload_file</span>
                        </label>
                    </div>
                </div>
                <textarea
                    required
                    placeholder="Tell us more about yourself and your career goals..."
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 p-6 text-white focus:border-[#bff549] outline-none transition-colors resize-none"
                />

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#bff549] text-black h-16 font-black uppercase tracking-widest italic hover:brightness-105 transition-all text-xl"
                >
                    {status === 'sending' ? 'Sending Application...' : 'Submit Application'}
                </button>

                <div className="relative pt-12 text-center">
                    <div className="absolute top-12 left-0 w-full h-px bg-white/10" />
                    <span className="relative z-10 bg-neutral-900 px-4 text-xs font-black uppercase tracking-widest text-slate-500">or</span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Talent Team</p>
                            <p className="font-black text-xs text-white">careers@c2-digital.com</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Office Direct</p>
                            <p className="font-black text-xs text-white">1 (305) 330 5981</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Global Operations</p>
                            <p className="font-black text-xs text-white">1 (855) 661-0016</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
