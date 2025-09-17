export default function GalleryVideos() {
  // Replace with your own video embeds or thumbnails linking to video pages
  const videos = [
    { title: "Dune Bashing Highlights", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Sunset Camel Trek", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Quad Bike Adventure", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

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

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={v.embedUrl}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="px-3 py-2 text-sm text-white/80">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
