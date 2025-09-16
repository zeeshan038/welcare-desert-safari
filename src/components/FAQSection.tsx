"use client";
import { useState } from "react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "What is included in the Desert Safari package?",
    a: "Our standard package includes hotel pickup/drop-off, dune bashing, sandboarding, camel ride photo stop, refreshments, and a BBQ dinner with live entertainment in the evening camp (for evening safaris).",
  },
  {
    q: "What should I wear and bring?",
    a: "Wear comfortable, breathable clothing and closed shoes. Bring sunglasses, sunscreen, and a light jacket for winter evenings. A small bag for personal items is recommended.",
  },
  {
    q: "Is the activity suitable for children or seniors?",
    a: "Yes, families are welcome. For young children and seniors, we recommend opting out of intense dune bashing. Please inform us in advance to customize your experience.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Free cancellation up to 24 hours before the tour. Rescheduling is subject to availability. Contact our support team to make changes to your booking.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative w-full bg-[#0f0f0f] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left intro */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="text-yellow-400 font-medium">FAQs</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="mt-4 text-white/80 uppercase tracking-wide leading-relaxed text-sm max-w-md">
            Find quick answers about timings, inclusions, safety, and policies. Still have a question? Contact our support team.
          </p>
        </div>

        {/* Right accordion */}
        <div className="md:col-span-7">
          <ul className="space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={idx} className="rounded-xl border border-white/10 bg-black/40 backdrop-blur">
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span
                      className={`inline-flex shrink-0 aspect-square h-7 w-7 items-center justify-center rounded-full border border-yellow-400 text-yellow-400 leading-none transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`px-5 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-sm text-white/80 leading-relaxed">{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
