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
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full text-white bg-transparent">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-1 md:h-auto md:px-4 md:py-2 md:shadow-lg md:shadow-black/20">
                    <Link href="/" className="font-semibold tracking-tight text-lg md:text-xl md:font-bold">
                        WellCare
                    </Link>
                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-2 text-sm">
                        <Link href="/" className="px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition">Home</Link>
                        <Link href="/#about" className="px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition">About</Link>
                        <Link href="/#services" className="px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition">Services</Link>
                        {/* Gallery dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                className="px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition inline-flex items-center gap-1"
                                aria-haspopup="menu"
                                aria-expanded={galleryOpen}
                                onClick={() => setGalleryOpen((v) => !v)}
                            >
                                Gallery
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${galleryOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            {galleryOpen && (
                                <div className="absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-black/90 backdrop-blur p-2 shadow-lg shadow-black/30 z-50">
                                    <Link href="/gallery/images" onClick={() => setGalleryOpen(false)} className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Images</Link>
                                    <Link href="/gallery/videos" onClick={() => setGalleryOpen(false)} className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Videos</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/contact" className="px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        {/* Social icons inline with telephone */}
                        <a
                            href="https://instagram.com/yourhandle"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Instagram"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
                            title="Instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@yourhandle"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="TikTok"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
                            title="TikTok"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                                <path d="M14.5 2c.4 2.2 2 3.9 4.2 4.3.4.1.8.1 1.3.1V9c-1.6 0-3.1-.5-4.3-1.4v6.1c0 3.6-2.9 6.3-6.5 6.3S2.7 17.3 2.7 13.7C2.7 10 5.6 7.3 9.2 7.3c.5 0 1 .1 1.5.2v3.2c-.5-.2-1-.3-1.5-.3-2 0-3.6 1.6-3.6 3.5s1.6 3.5 3.6 3.5 3.6-1.6 3.6-3.5V2h1.7Z"/>
                            </svg>
                        </a>
                        <a
                            href="tel:+0000000000"
                            aria-label="Call now"
                            title="Call"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
                        >
                            {/* Phone icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l1.99-1.99a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.55.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h2.28a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.55a1 1 0 0 1-.24 1.01l-1.99 1.99Z"/>
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
                {/* Mobile drawer */}
                {open && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden backdrop-fade"
                            onClick={() => setOpen(false)}
                        />
                        {/* Drawer panel */}
                        <div className="fixed right-0 top-0 z-50 h-screen w-72 bg-black/90 border-l border-white/10 p-4 md:hidden drawer-panel">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-lg font-semibold">Menu</span>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M6 6l12 12M18 6L6 18" />
                                    </svg>
                                </button>
                            </div>
                            <nav className="flex flex-col gap-2">
                                <Link href="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Home</Link>
                                <Link href="/#about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">About</Link>
                                <Link href="/#services" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Services</Link>
                                {/* Mobile accordion for Gallery */}
                                <button
                                    type="button"
                                    onClick={() => setMobileGalleryOpen((v) => !v)}
                                    className="px-3 py-2 rounded-md text-left text-white/90 hover:text-white hover:bg-white/10 transition inline-flex items-center justify-between"
                                    aria-expanded={mobileGalleryOpen}
                                >
                                    <span>Gallery</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${mobileGalleryOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                {mobileGalleryOpen && (
                                    <div className="ml-2 flex flex-col gap-1">
                                        <Link href="/gallery/images" onClick={() => { setOpen(false); setMobileGalleryOpen(false); }} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Images</Link>
                                        <Link href="/gallery/videos" onClick={() => { setOpen(false); setMobileGalleryOpen(false); }} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Videos</Link>
                                    </div>
                                )}
                                <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition">Contact</Link>
                            </nav>
                        </div>
                    </>
                )}
            </div>
            {/* Animations for mobile drawer */}
            <style jsx>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0.6; }
                    to { transform: translateX(0%); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .drawer-panel { animation: slideIn 0.28s ease-out; }
                .backdrop-fade { animation: fadeIn 0.2s ease-out; }
            `}</style>
        </header>
    );
}
