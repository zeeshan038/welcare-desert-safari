import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-0 w-full py-20 bg-black overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/header.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-16 text-yellow-500 text-2xl select-none">+</div>

        <div className="absolute right-[38%] top-20 h-8 w-8 rounded-full border-4 border-yellow-500" />

        <svg className="absolute left-6 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L20 4V20L4 12Z" fill="#F59E0B"/>
        </svg>
        <div className="absolute left-[52%] top-10 h-1.5 w-1.5 rounded-full bg-red-500" />
        <div className="absolute right-24 top-28 h-1.5 w-1.5 rounded-full bg-red-500" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 text-white md:grid-cols-12">
        
        <div className="md:col-span-5 flex flex-col gap-6">
          
          <div className="grid grid-cols-2 gap-6 items-stretch h-64 md:h-72">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur h-full">
              <div className="mb-3 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">🐪</div>
              <h3 className="text-lg font-semibold tracking-tight">Camel Safari</h3>
              <p className="mt-2 text-sm text-white/80 uppercase tracking-wide leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src="/images/camel-safari.jpg"
                alt="Camel Safari"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 items-stretch h-64 md:h-72">
            <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src="/images/quad-biked.jpeg"
                alt="Quad Bikes"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur h-full">
              <div className="mb-3 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <circle cx="6" cy="17" r="2" />
                  <circle cx="18" cy="17" r="2" />
                  <path d="M4 17h2l2-5h4l2 2h4" />
                  <path d="M10 12l-1.5-3H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">Quad Bikes</h3>
              <p className="mt-2 text-sm text-white/80 uppercase tracking-wide leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text since the 1500s.
              </p>
            </div>
          </div>
        </div>

        {/* Right: headline and CTA */}
        <div className="md:col-span-7 md:pl-10 flex flex-col justify-center">
          <p className="text-yellow-400 font-medium">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Great Opportunity <span className="text-yellow-400">For</span> Adventure & Travel
          </h2>
          <p className="mt-4 max-w-2xl text-white/85">
            Et labore harum non nobis quam molestias mollitia et corporis praesentium a laudantium
            internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
            quasi aut ducimus illum aut optio quibusdam!
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Et labore harum non nobis ipsum eum molestias",
              "Et labore harum non nobis ipsum eum molestias",
              "Et labore harum non nobis ipsum eum molestias",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">•</span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-medium text-black shadow hover:bg-yellow-400 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
