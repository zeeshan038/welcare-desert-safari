import fs from "fs";
import path from "path";

// Read all videos from public/videos at build time/server-render
const videosDir = path.join(process.cwd(), "public", "videos");
let localVideos: { src: string; title: string }[] = [];
try {
  const files = fs.readdirSync(videosDir).sort((a, b) => a.localeCompare(b));
  localVideos = files
    .filter((f) => /\.(mp4|webm|ogg|mov)$/i.test(f))
    .map((f) => ({
      src: `/videos/${f}`,
      title: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));
} catch {
  localVideos = [];
}

export default function GalleryVideos() {

  return (
    <section>
      {/* Hero header with background image and title */}
      <div className="relative h-40 sm:h-56 w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/quad-biked.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl w-full px-4 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold">Videos</h1>
            <p className="text-white/80 mt-1 hidden sm:block">Watch our latest adventures and experiences.</p>
          </div>
        </div>
      </div>

      {/* Grid of local videos */}
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {localVideos.map((v) => (
          <div key={v.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="aspect-video w-full">
              <video className="h-full w-full object-cover" controls preload="metadata">
                <source src={v.src} />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="px-3 py-2 text-sm text-white/80">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
