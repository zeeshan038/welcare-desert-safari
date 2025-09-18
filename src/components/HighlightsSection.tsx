"use client";
import Image from "next/image";
import Link from "next/link";

export default function HighlightsSection() {
  return (
    <section className="relative w-full bg-[#121212] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 text-white md:grid-cols-12">
        {/* Left: Content */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="text-lg text-white/80">Enthralling</p>
          <h2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Exploration Of <span className="text-yellow-400">UAE</span> Highlights.
          </h2>
          <p className="mt-4 max-w-md text-white/80 uppercase tracking-wide leading-relaxed text-sm">
            Discover Dubai&#39;s must‑see highlights with curated stops, photo opportunities, and
            comfortable transport — perfect for first‑time visitors and families.
          </p>

          <div className="mt-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold">Dubai City</h3>
            <p className="mt-3 text-white/85">
              Starting From <span className="ml-2 rounded bg-yellow-500 px-2 py-0.5 font-semibold text-black">AED 90.00</span>
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#explore"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-3 font-medium text-black shadow hover:from-yellow-400 hover:to-yellow-300 transition"
              >
                Explore Now
              </Link>
              <div className="flex items-center gap-3">
                <button aria-label="Previous" className="h-10 w-10 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition flex items-center justify-center">←</button>
                <button aria-label="Next" className="h-10 w-10 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition flex items-center justify-center">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image rail */}
        <div className="md:col-span-7">
          <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]" style={{scrollSnapType:"x mandatory"}}>
            {/* Hide scrollbar for WebKit */}
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {[
              { src: "/images/camel-safari.jpg", alt: "Dubai Marina" },
              { src: "/images/quad-biked.jpeg", alt: "Grand Mosque" },
              { src: "/images/header.webp", alt: "Hajar Mountains" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative h-[260px] w-[190px] sm:h-[300px] sm:w-[220px] md:h-[360px] md:w-[260px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                style={{ scrollSnapAlign: "start" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 400px"
                  priority={idx === 0}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
