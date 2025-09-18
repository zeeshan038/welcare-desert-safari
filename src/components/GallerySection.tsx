"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function GallerySection() {
  const images = [
    { src: "/images/image-10.jpeg", alt: "Desert vista" },
    { src: "/images/image-11.jpeg", alt: "Falcon handler" },
    { src: "/images/image-12.jpeg", alt: "Quad bike on dunes" },
    { src: "/images/image-13.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-14.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-15.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-21.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-22.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-23.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-24.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-30.jpeg", alt: "Sunset photographer" },
    { src: "/images/image-32.jpeg", alt: "Sunset photographer" },
     
  ];

  return (
    <section id="gallery" className="relative isolate z-20 w-full bg-[#0f0f0f] py-16">
      <div className="w-full">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white px-4">Gallery</h2>

        <div className="mt-10 px-4 sm:px-6 lg:px-10">
          {/* Curved container wrapper */}
          <div className="relative reset-curves overflow-hidden" style={{ pointerEvents: "auto" }}>
              <style jsx>{`
                .reset-curves,
                .reset-curves::before,
                .reset-curves::after { 
                  border-radius: 0 !important; 
                  -webkit-mask-image: none !important; 
                  mask-image: none !important; 
                  box-shadow: none !important; 
                }
                /* Ensure default Swiper overflow behavior (hidden) to show only limited slides */
              `}</style>
              <Swiper
                
                modules={[FreeMode]}
                spaceBetween={20}
                slidesPerView={1.2}
                freeMode={{ enabled: true, momentum: true }}
                allowTouchMove
                grabCursor
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3.5 },
                }}
                className="!px-0"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[260px] overflow-hidden rounded-lg sm:h-[340px] md:h-[420px]">
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
