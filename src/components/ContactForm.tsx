"use client";

import { useState } from "react";

interface ContactFormProps {
    theme?: "light" | "dark";
}

export default function ContactForm({ theme = "dark" }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const isLight = theme === "light";
    const inputClass = isLight
        ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
        : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg placeholder:text-white/30 uppercase tracking-widest font-medium";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            formData.append("_captcha", "false");
            formData.append("_subject", "New Contact Form Submission");

            const response = await fetch("https://formsubmit.co/ajax/2guys.digital8@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
            } else {
                console.error("Form submission failed");
                setStatus('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus('idle');
            alert("Something went wrong. Please try again.");
        }
    };

    if (status === 'success') {
        return (
            <div className={`p-12 text-center border ${isLight ? "bg-slate-50 border-slate-200" : "bg-neutral-900 border-white/5"}`}>
                <div className="size-16 bg-[#bff549]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-[#bff549] text-3xl">check_circle</span>
                </div>
                <h3 className={`text-2xl font-black uppercase tracking-tighter ${isLight ? "text-slate-900" : "text-white"}`}>Message Received</h3>
                <p className={`text-sm mt-4 ${isLight ? "text-slate-600" : "text-slate-400"}`}>We&apos;ve received your message and will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="firstName" className={inputClass} placeholder={isLight ? "First Name" : "YOUR NAME"} type="text" />
                {!isLight && <input required name="workEmail" className={inputClass} placeholder="WORK EMAIL" type="email" />}
                {isLight && <input required name="lastName" className={inputClass} placeholder="Last Name" type="text" />}
            </div>
            {isLight && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="phone" className={inputClass} placeholder="Your Phone Number" type="tel" />
                    <input required name="email" className={inputClass} placeholder="Your Email" type="email" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                    required
                    name="projectType"
                    className={
                        isLight
                            ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
                            : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg text-white uppercase tracking-widest font-medium"
                    }
                >
                    <option value="" className="text-black">{isLight ? "Select Project Type" : "PROJECT TYPE"}</option>
                    <option value="AI Automation" className="text-black">AI Automation</option>
                    <option value="Web Platform" className="text-black">Web Platform</option>
                    <option value="Mobile App" className="text-black">Mobile App</option>
                    <option value="SaaS Development" className="text-black">SaaS Development</option>
                </select>
                <select
                    required
                    name="budget"
                    className={
                        isLight
                            ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
                            : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg text-white uppercase tracking-widest font-medium"
                    }
                >
                    <option value="" className="text-black">{isLight ? "Select Budget" : "BUDGET RANGE"}</option>
                    <option value="$10k – $25k" className="text-black">$10k – $25k</option>
                    <option value="$25k – $50k" className="text-black">$25k – $50k</option>
                    <option value="$50k – $100k" className="text-black">$50k – $100k</option>
                    <option value="$100k+" className="text-black">$100k+</option>
                </select>
            </div>
            <textarea
                required
                name="message"
                className={
                    isLight
                        ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none px-6 py-4 text-black transition-colors"
                        : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg placeholder:text-white/30 uppercase tracking-widest font-medium resize-none"
                }
                placeholder={isLight ? "Tell us more about your project" : "TELL US ABOUT YOUR GOALS"}
                rows={isLight ? 5 : 3}
            />
            <div className="flex items-start gap-3">
                <input
                    required
                    name="agreedToTexts"
                    className="mt-1 rounded-none accent-[#bff549]"
                    type="checkbox"
                />
                <p className={`text-[10px] leading-relaxed uppercase font-bold ${isLight ? "text-slate-500" : "text-white/40"}`}>
                    I agree to receive communications by text message. You may opt-out by replying STOP.
                </p>
            </div>
            <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-5 text-sm font-black uppercase tracking-[0.2em] transition-all -skew-x-12 disabled:opacity-50 disabled:cursor-not-allowed ${isLight
                    ? "bg-[#bff549] text-black hover:brightness-105"
                    : "bg-[#bff549] text-black hover:scale-[1.02]"
                    }`}
            >
                <div className="skew-x-12 flex items-center justify-center gap-4">
                    {status === 'sending' ? (
                        <>
                            <span className="size-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            <span>{isLight ? "Sending..." : "SENDING..."}</span>
                        </>
                    ) : isLight ? "Submit Message" : (
                        <>
                            LET&apos;S WORK TOGETHER
                            <span className="material-symbols-outlined">east</span>
                        </>
                    )}
                </div>
            </button>
        </form>
    );
}
