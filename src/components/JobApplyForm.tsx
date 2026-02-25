"use client";

import { useState } from "react";

interface JobApplyFormProps {
    jobTitle: string;
    onClose?: () => void;
}

export default function JobApplyForm({ jobTitle, onClose }: JobApplyFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="p-12 bg-neutral-900 border border-[#bff549]/30 text-center">
                <div className="size-16 bg-[#bff549]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[#bff549] text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase">Application Received</h3>
                <p className="text-slate-400 text-sm">We've received your application for the {jobTitle} position. Our team will review it and get back to you soon.</p>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="mt-8 text-xs font-black uppercase tracking-widest border-b border-[#bff549] pb-1 hover:text-[#bff549] transition-colors"
                    >
                        Close
                    </button>
                )}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-neutral-900 border border-white/10 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-[#efefef]/5 border-b border-white/10 p-4 outline-none focus:border-[#bff549] transition-colors text-white"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Address</label>
                    <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#efefef]/5 border-b border-white/10 p-4 outline-none focus:border-[#bff549] transition-colors text-white"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Portfolio / GitHub Link</label>
                    <input
                        required
                        type="url"
                        placeholder="https://..."
                        className="w-full bg-[#efefef]/5 border-b border-white/10 p-4 outline-none focus:border-[#bff549] transition-colors text-white"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Resume Link (Drive/Dropbox)</label>
                    <input
                        required
                        type="url"
                        placeholder="https://..."
                        className="w-full bg-[#efefef]/5 border-b border-white/10 p-4 outline-none focus:border-[#bff549] transition-colors text-white"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Why are you a fit for this role?</label>
                <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-[#efefef]/5 border-b border-white/10 p-4 outline-none focus:border-[#bff549] transition-colors text-white resize-none"
                />
            </div>

            <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full bg-[#bff549] text-black h-16 flex items-center justify-center font-black uppercase tracking-[0.2em] text-xs -skew-x-12 hover:bg-[#efefef] transition-all disabled:opacity-50"
            >
                <div className="skew-x-12 flex items-center gap-2">
                    {status === 'sending' ? (
                        <>
                            <span className="size-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <span>Submit Application</span>
                    )}
                </div>
            </button>
        </form>
    );
}
