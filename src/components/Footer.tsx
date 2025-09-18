import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/header.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand / About */}
        <div className="md:col-span-4">
          <h3 className="text-2xl font-extrabold">Desert Safari</h3>
          <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-sm">
            WellCare Desert Safari offers unforgettable adventures in Dubai — dune bashing in 4x4s,
            camel rides, sandboarding, and a traditional Bedouin camp with BBQ dinner and live shows.
            Hotel pickup/drop‑off, licensed guides, and fully insured vehicles for your peace of mind.
          </p>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4">Quick links</h4>
          <ul className="space-y-3 text-white/85 text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/#about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link href="/#services" className="hover:text-yellow-400 transition">Services</Link></li>
            <li><Link href="/#gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contacts Info */}
        <div className="md:col-span-3">
          <h4 className="font-semibold mb-4">Contacts Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">📞</span>
              <span>Call us<br/>
                <a href="tel:+971501488044" className="text-white/70 hover:text-yellow-400 transition">+971 50 148 8044</a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">✉️</span>
              <span>Mail us<br/>
                <a href="mailto:Imran@wellcareevent.com" className="text-white/70 hover:text-yellow-400 transition">Imran@wellcareevent.com</a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">📍</span>
              <span>Visit us<br/><span className="text-white/70">Your Address</span></span>
            </li>
          </ul>
        </div>
        {/* Right column (kept minimal for compact layout) */}
        <div className="md:col-span-3" />
      </div>
      {/* Bottom bar with centered content and socials */}
      <div className="relative z-10 w-full bg-yellow-500 text-black text-sm py-3">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left font-medium">
            &copy; {new Date().getFullYear()} Desert safari. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://tiktok.com/@wellcare_desertsafariuae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5" fill="currentColor">
                <path d="M168 24a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v8c0 26.51 21.49 48 48 48h8a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-8c-26.51 0-48-21.49-48-48v68a76 76 0 1 1-76-76 8 8 0 0 1 8 8v24a8 8 0 0 1-8 8 44 44 0 1 0 44 44V24Z" transform="scale(.9) translate(-20,0)" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/wellcaredesertsafariuae?igsh=MXNwb2dxZWRnb2U3OQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.5A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
