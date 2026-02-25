"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
];

const Logo = () => (
    <Link href="/" className="flex items-center gap-3 group">
        <svg
            className="w-8 h-8 text-[#bff549] shrink-0"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
        <span className="text-xl font-bold tracking-tighter uppercase text-white group-hover:text-[#bff549] transition-colors">
            2Guys Digital
        </span>
    </Link>
);

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between relative">
                    <Logo />

                    {/* Centered Badge */}
                    <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                        <span className="w-2.5 h-2.5 bg-[#bff549] rounded-full animate-pulse shadow-[0_0_10px_#bff549]" />
                        <span className="text-white text-[11px] font-bold uppercase tracking-wider">
                            Currently taking on new clients!
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/contact"
                            className="hidden md:block bg-[#bff549] text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all -skew-x-12"
                        >
                            <span className="inline-block skew-x-12">Get Free Website</span>
                        </Link>
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white hover:text-[#bff549] transition-colors relative flex items-center justify-end p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-8 h-[12px]">
                                <span className={`absolute right-0 block h-[2px] bg-current transition-all duration-300 ease-in-out ${open ? "w-6 top-1/2 -translate-y-1/2 rotate-45" : "w-8 top-0"}`} />
                                <span className={`absolute right-0 block h-[2px] bg-current transition-all duration-300 ease-in-out ${open ? "w-6 top-1/2 -translate-y-1/2 -rotate-45" : "w-5 bottom-0"}`} />
                            </div>
                        </button>
                    </div>
                </div>

            </header>

            {/* Mobile/Hamburger menu */}
            {open && (
                <div className="fixed inset-0 z-40 bg-black px-6 pt-[100px] pb-12 flex flex-col items-center">
                    <nav className="flex flex-col gap-8 w-full max-w-md text-center">
                        {navLinks.map((link) => {
                            const active =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`text-2xl lg:text-4xl font-black uppercase tracking-widest hover:text-[#bff549] transition-colors ${active ? "text-[#bff549]" : "text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-8 bg-[#bff549] text-black px-8 py-5 text-sm font-bold uppercase tracking-widest text-center hover:scale-105 transition-transform w-[90%] max-w-[320px] -skew-x-12"
                        >
                            <span className="inline-block skew-x-12">Book a Discovery Call</span>
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
