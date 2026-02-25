"use client";

import { useState } from "react";

interface CareersFormProps {
    title?: string;
    description?: string;
}

export default function CareersForm({
    title = "Let's Create Together",
    description = "Tell us what you're interested in and we'll get right back to you"
}: CareersFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="p-12 bg-white text-center border border-slate-200">
                <div className="size-16 bg-[#bff549]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[#bff549] text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black">Message Sent</h3>
                <p className="text-slate-500 text-sm mt-4">We've received your request and will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-12 lg:p-20 relative">
            <div className="absolute top-4 right-4 bg-[#f8e132] text-black px-4 py-1 font-black text-xl italic skew-x-[-15deg]">
                <span className="inline-block skew-x-[15deg]">C2</span>
            </div>

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4 italic leading-none">{title}</h2>
                <p className="text-slate-500 font-medium">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-black focus:border-[#f8e132] outline-none transition-colors"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-black focus:border-[#f8e132] outline-none transition-colors"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        required
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-black focus:border-[#f8e132] outline-none transition-colors"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-black focus:border-[#f8e132] outline-none transition-colors"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-slate-500 focus:border-[#f8e132] outline-none appearance-none transition-colors">
                        <option>Select Project Type</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>AI Automation</option>
                    </select>
                    <select className="w-full bg-[#f8f8f8] border border-slate-200 h-16 px-6 text-slate-500 focus:border-[#f8e132] outline-none appearance-none transition-colors">
                        <option>Select Budget</option>
                        <option>$10k - $25k</option>
                        <option>$25k - $50k</option>
                        <option>$50k+</option>
                    </select>
                </div>
                <textarea
                    required
                    placeholder="Tell us more about your project"
                    rows={6}
                    className="w-full bg-[#f8f8f8] border border-slate-200 p-6 text-black focus:border-[#f8e132] outline-none transition-colors resize-none"
                />

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#f8e132] text-black h-16 font-black uppercase tracking-widest italic hover:brightness-105 transition-all text-xl"
                >
                    {status === 'sending' ? 'Sending...' : 'submit message'}
                </button>

                <div className="relative pt-12 text-center">
                    <div className="absolute top-12 left-0 w-full h-px bg-slate-200" />
                    <span className="relative z-10 bg-white px-4 text-xs font-black uppercase tracking-widest text-black">or</span>

                    <div className="grid grid-cols-3 gap-8 mt-12">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</p>
                            <p className="font-black text-xs text-black">hello@c2-digital.com</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Call/Text</p>
                            <p className="font-black text-xs text-black">1 (305) 330 5981</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Toll Free</p>
                            <p className="font-black text-xs text-black">1 (855) 661-0016</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
