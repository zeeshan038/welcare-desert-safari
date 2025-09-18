"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    text:
      "The dune bashing was incredible and the guide was very professional. BBQ dinner was tasty and the fire show was a highlight!",
    name: "Daniyal Ali",
    role: "Guest",
    avatar: "/next.svg",
    rating: 5,
  },
  {
    text:
      "Great value for money. Pickup on time, clean car, and the team took amazing photos during sunset. Highly recommend!",
    name: "Catherine Robinson",
    role: "Traveler",
    avatar: "/vercel.svg",
    rating: 5,
  },
  {
    text:
      "Camel ride, sandboarding, and shows were all well organized. Staff were friendly and safety‑conscious throughout.",
    name: "Austin Davis",
    role: "Adventurer",
    avatar: "/window.svg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background yellow/black gradient overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Broad yellow wash spanning across the section (left to mid) */}
        <div className="absolute -left-[10%] -top-[20%] h-[620px] w-[820px] rounded-[9999px] bg-yellow-500/18 blur-[100px]" />
        {/* Secondary soft yellow glow toward the center */}
        <div className="absolute left-1/3 top-1/3 h-[460px] w-[560px] rounded-[9999px] bg-yellow-400/8 blur-[90px]" />
        {/* Subtle dark vignette bottom-right */}
        <div className="absolute right-0 bottom-0 h-[65%] w-[65%] bg-gradient-to-tl from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-white">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-yellow-400 text-3xl">“”</div>
          <p className="text-yellow-400 mt-2">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            What People Say about <span className="text-yellow-400">Our Their Experience</span>
          </h2>
        </div>

        {/* Slider controls (custom) */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: ".ts-next", prevEl: ".ts-prev" }}
            pagination={{ el: ".ts-dots", clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-full rounded-2xl bg-[#1a1a1a] border border-white/10 p-6 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="text-yellow-400 text-3xl mb-4">“</div>
                    <p className="text-white/85 text-sm leading-relaxed">{t.text}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                      <Image src={t.avatar} alt={t.name} width={40} height={40} className="object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-white/70">{t.role}</p>
                    </div>
                    <div className="text-yellow-400 text-sm">{"★".repeat(t.rating)}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows */}
          <div className="pointer-events-none absolute inset-y-0 -left-4 right-0 flex items-center justify-between">
            <button aria-label="Previous" className="ts-prev pointer-events-auto h-10 w-10 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow hover:bg-yellow-400 transition">←</button>
            <button aria-label="Next" className="ts-next pointer-events-auto h-10 w-10 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow hover:bg-yellow-400 transition">→</button>
          </div>

          {/* Dots */}
          <div className="ts-dots mt-8 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
