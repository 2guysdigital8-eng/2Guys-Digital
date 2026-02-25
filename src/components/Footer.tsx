import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 px-6 lg:px-20 py-16 text-slate-500">
            <div className="max-w-7xl mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-3 mb-6">
                            <svg className="w-6 h-6 text-[#bff549]" fill="none" viewBox="0 0 48 48">
                                <path
                                    clipRule="evenodd"
                                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <span className="text-white text-lg font-bold uppercase tracking-tighter">2Guys Digital</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Enterprise AI design and development. Built for leaders, engineered for growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services</p>
                            <ul className="space-y-2 text-xs font-medium">
                                <li><Link href="/services" className="hover:text-[#bff549] transition-colors">AI Platforms</Link></li>
                                <li><Link href="/services" className="hover:text-[#bff549] transition-colors">Web Systems</Link></li>
                                <li><Link href="/services" className="hover:text-[#bff549] transition-colors">Mobile Engineering</Link></li>
                                <li><Link href="/services" className="hover:text-[#bff549] transition-colors">UI/UX Design</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company</p>
                            <ul className="space-y-2 text-xs font-medium">
                                <li><Link href="/about" className="hover:text-[#bff549] transition-colors">About Us</Link></li>
                                <li><Link href="/portfolio" className="hover:text-[#bff549] transition-colors">Our Work</Link></li>
                                <li><Link href="/process" className="hover:text-[#bff549] transition-colors">Our Process</Link></li>
                                <li><Link href="/careers" className="hover:text-[#bff549] transition-colors">Careers</Link></li>
                                <li><Link href="/contact" className="hover:text-[#bff549] transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Social</p>
                            <ul className="space-y-2 text-xs font-medium">
                                <li><a href="#" className="hover:text-[#bff549] transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-[#bff549] transition-colors">X / Twitter</a></li>
                                <li><a href="#" className="hover:text-[#bff549] transition-colors">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} 2Guys Digital. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
