"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function GallerySection() {
  const images = [
    { src: "/images/header.webp", alt: "Desert vista" },
    { src: "/images/camel-safari.jpg", alt: "Falcon handler" },
    { src: "/images/quad-biked.jpeg", alt: "Quad bike on dunes" },
    { src: "/images/header.webp", alt: "Sunset photographer" },
  ];

  return (
    <section id="gallery" className="relative isolate z-20 w-full bg-[#0f0f0f] py-16">
      <div className="w-full">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white px-4">Gallery</h2>

        {/* Full-bleed slider row with edge padding matching layout */}
        <div className="mt-10 px-4 sm:px-6 lg:px-10">
          {/* Curved container wrapper */}
          <div className="relative reset-curves" style={{ overflow: "visible", pointerEvents: "auto" }}>
              <style jsx>{`
                .reset-curves,
                .reset-curves::before,
                .reset-curves::after { 
                  border-radius: 0 !important; 
                  -webkit-mask-image: none !important; 
                  mask-image: none !important; 
                  box-shadow: none !important; 
                }
                :global(.swiper),
                :global(.swiper::before),
                :global(.swiper::after),
                :global(.swiper-wrapper),
                :global(.swiper-wrapper::before),
                :global(.swiper-wrapper::after),
                :global(.swiper-slide),
                :global(.swiper-slide::before),
                :global(.swiper-slide::after) {
                  border-radius: 0 !important;
                  -webkit-mask-image: none !important;
                  mask-image: none !important;
                  overflow: visible !important;
                }
              `}</style>
              <Swiper
                style={{ overflow: "visible" }}
                modules={[FreeMode, Mousewheel]}
                spaceBetween={20}
                slidesPerView={1.2}
                freeMode={{ enabled: true, momentum: true }}
                mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.7 }}
                allowTouchMove
                grabCursor
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3.5 },
                }}
                className="!px-0"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[260px] rounded-xl sm:h-[340px] md:h-[420px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>

          {/* Removed decorative scroll indicator to avoid visual confusion */}
        </div>
      </div>
    </section>
  );
}
