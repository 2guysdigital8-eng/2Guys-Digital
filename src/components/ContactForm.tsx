"use client";

interface ContactFormProps {
    theme?: "light" | "dark";
}

export default function ContactForm({ theme = "dark" }: ContactFormProps) {
    const isLight = theme === "light";
    const inputClass = isLight
        ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
        : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg placeholder:text-white/30 uppercase tracking-widest font-medium";

    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className={inputClass} placeholder={isLight ? "First Name" : "YOUR NAME"} type="text" />
                {!isLight && <input className={inputClass} placeholder="WORK EMAIL" type="email" />}
                {isLight && <input className={inputClass} placeholder="Last Name" type="text" />}
            </div>
            {isLight && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input className={inputClass} placeholder="Your Phone Number" type="tel" />
                    <input className={inputClass} placeholder="Your Email" type="email" />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                    className={
                        isLight
                            ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
                            : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg text-white/50 uppercase tracking-widest font-medium"
                    }
                >
                    <option>{isLight ? "Select Project Type" : "PROJECT TYPE"}</option>
                    <option>AI Automation</option>
                    <option>Web Platform</option>
                    <option>Mobile App</option>
                    <option>SaaS Development</option>
                </select>
                <select
                    className={
                        isLight
                            ? "w-full bg-slate-50 border border-slate-200 focus:border-[#bff549] focus:outline-none h-14 px-6 text-black transition-colors"
                            : "w-full bg-transparent border-0 border-b border-white/20 py-4 focus:outline-none focus:border-[#bff549] transition-colors text-lg text-white/50 uppercase tracking-widest font-medium"
                    }
                >
                    <option>{isLight ? "Select Budget" : "BUDGET RANGE"}</option>
                    <option>$10k – $25k</option>
                    <option>$25k – $50k</option>
                    <option>$50k – $100k</option>
                    <option>$100k+</option>
                </select>
            </div>
            <textarea
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
                    className="mt-1 rounded-none accent-[#bff549]"
                    type="checkbox"
                />
                <p className={`text-[10px] leading-relaxed uppercase font-bold ${isLight ? "text-slate-500" : "text-white/40"}`}>
                    I agree to receive communications by text message. You may opt-out by replying STOP.
                </p>
            </div>
            <button
                type="submit"
                className={`w-full py-5 text-sm font-black uppercase tracking-[0.2em] transition-all -skew-x-12 ${isLight
                    ? "bg-[#bff549] text-black hover:brightness-105"
                    : "bg-[#bff549] text-black hover:scale-[1.02]"
                    }`}
            >
                <div className="skew-x-12 flex items-center justify-center gap-4">
                    {isLight ? "Submit Message" : (
                        <>
                            LET'S WORK TOGETHER
                            <span className="material-symbols-outlined">east</span>
                        </>
                    )}
                </div>
            </button>
        </form>
    );
}
