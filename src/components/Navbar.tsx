"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50 w-full text-white bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/25 border-b border-white/10">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="font-semibold tracking-tight text-lg">
                        MySite
                    </Link>
                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="px-2 py-1 text-white/90 hover:text-white transition">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Right controls: call button always visible, hamburger on mobile */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+0000000000"
                            aria-label="Call now"
                            className="call-cta inline-flex items-center gap-2 rounded-full bg-yellow-500 text-black px-3.5 py-2 font-semibold hover:bg-yellow-400 transition shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                                {/* Soft circular backdrop */}
                                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />
                                {/* Classic phone (Material-like) */}
                                <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l1.99-1.99a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.55.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h2.28a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.55a1 1 0 0 1-.24 1.01l-1.99 1.99Z"/>
                                {/* Call waves */}
                                <path d="M15.5 4.5c1.9.2 3.3 1.6 3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M15.2 2.7c3 .4 5.2 2.6 5.6 5.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </a>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition"
                        >
                            {open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile panel */}
                {open && (
                    <div className="md:hidden mt-2 rounded-lg border border-white/10 bg-black/70 backdrop-blur p-3">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
            {/* subtle pulse ring animation for the call button */}
            <style jsx>{`
                .call-cta{ position: relative; }
                .call-cta::after{
                    content: "";
                    position: absolute;
                    inset: -6px;
                    border-radius: 9999px;
                    border: 2px solid rgba(234,179,8,0.6); /* yellow-500 */
                    animation: ring 1.8s ease-out infinite;
                    pointer-events: none;
                }
                .call-cta:hover::after{ animation-duration: 1.2s; }
                @keyframes ring{
                    0%{ transform: scale(0.85); opacity: .65; }
                    100%{ transform: scale(1.4); opacity: 0; }
                }
            `}</style>
        </header>
    );
}
