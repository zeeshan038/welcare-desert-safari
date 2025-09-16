import AboutSection from "../components/AboutSection";
import HighlightsSection from "../components/HighlightsSection";
import GallerySection from "../components/GallerySection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      <header
        className="relative h-[80vh] w-full"
        style={{
          backgroundImage: "url('/images/header.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Desert Safari Adventures
          </h1>
          <p className="mt-4 max-w-xl text-base  sm:text-lg text-white/90">
            Experience dune bashing, sandboarding, and unforgettable sunsets in a
            powerful Nissan Patrol.
          </p>
        </div>
      </header>

      <AboutSection />
      <HighlightsSection />
      <ServicesSection />
      <GallerySection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
