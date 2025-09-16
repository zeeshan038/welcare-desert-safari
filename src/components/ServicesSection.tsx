import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Morning Desert Safari",
      desc: "Dune bashing, sandboarding and photo stops in the golden morning light.",
      img: { src: "/images/header.webp", alt: "Morning Desert Safari" },
      features: ["Hotel pickup/drop-off", "30–40 min dune bashing", "Sandboarding"],
    },
    {
      title: "Evening Desert Safari",
      desc: "Sunset dunes, BBQ dinner, live shows and camp activities.",
      img: { src: "/images/header.webp", alt: "Evening Desert Safari" },
      features: ["Hotel pickup/drop-off", "BBQ dinner", "Live entertainment"],
    },
    {
      title: "Quad Bike Adventure",
      desc: "Ride powerful quads across open desert tracks with expert guidance.",
      img: { src: "/images/quad-biked.jpeg", alt: "Quad Bike Adventure" },
      features: ["Safety gear", "Guided ride", "Photo stops"],
    },
    {
      title: "Camel Trekking",
      desc: "Traditional camel ride experience through serene desert landscapes.",
      img: { src: "/images/camel-safari.jpg", alt: "Camel Trekking" },
      features: ["Photo stop", "Traditional welcome", "Soft drinks"],
    },
    {
      title: "Private Desert Tour",
      desc: "Tailored premium experience with a private 4x4 and flexible schedule.",
      img: { src: "/images/header.webp", alt: "Private Desert Tour" },
      features: ["Private vehicle", "Flexible timing", "Custom stops"],
    },
    {
      title: "City Tour (Dubai)",
      desc: "Discover the highlights of Dubai with guided stops and photo ops.",
      img: { src: "/images/header.webp", alt: "City Tour Dubai" },
      features: ["Guided tour", "Photo stops", "Air‑conditioned transport"],
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#121212] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-yellow-400 font-medium">Our Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
            Choose Your Next <span className="text-yellow-400">Adventure</span>
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm uppercase tracking-wide">
            Handpicked experiences crafted for thrill, comfort and unforgettable memories.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-[#1a1a1a]/70 p-0 hover:border-yellow-500/40 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-yellow-500/10 overflow-hidden"
            >
              {/* Card image */}
              <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden">
                <Image
                  src={s.img.src}
                  alt={s.img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <button className="rounded-full bg-yellow-500 text-black text-sm font-medium px-4 py-2 hover:bg-yellow-400 transition">
                    Book Now
                  </button>
                  <a href="#contact" className="text-yellow-400 text-sm hover:underline">
                    Contact us →
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-yellow-500/40 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
