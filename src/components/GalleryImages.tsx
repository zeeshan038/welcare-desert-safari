import Image from "next/image";
import fs from "fs";
import path from "path";

// Read all images from public/images at build time/server-render
const imagesDir = path.join(process.cwd(), "public", "images");
let images: { src: string; alt: string }[] = [];
try {
  const files = fs.readdirSync(imagesDir).sort((a, b) => a.localeCompare(b));
  images = files
    .filter((f) => /\.(png|jpe?g|webp|gif|bmp)$/i.test(f))
    .map((f) => ({
      src: `/images/${f}`,
      alt: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));
} catch {
  // fallback to an empty list if directory missing
  images = [];
}

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
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="h-72 sm:h-80 w-full object-cover hover:scale-[1.02] transition-transform"
              priority={false}
            />
            <div className="px-3 py-2 text-sm text-white/80">{img.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
