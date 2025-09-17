import Image from "next/image";

const images = [
  { src: "/images/camel-safari.jpg", alt: "Camel Safari" },
  { src: "/images/quad-biked.jpeg", alt: "Quad Biked" },
  { src: "/images/header.webp", alt: "Desert Dunes" },
];

export default function GalleryImages() {
  return (
    <section>
      {/* Hero header with background image and title */}
      <div className="relative h-40 sm:h-56 w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/camel-safari.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl w-full px-4 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold">Images</h1>
            <p className="text-white/80 mt-1 hidden sm:block">Explore moments from our desert adventures.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="h-56 w-full object-cover hover:scale-[1.02] transition-transform"
              priority={false}
            />
            <div className="px-3 py-2 text-sm text-white/80">{img.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
