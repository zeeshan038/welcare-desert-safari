export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">Contact Us</h1>
      <p className="text-white/80 max-w-2xl">
        Have a question or ready to book your desert adventure? Reach us anytime on WhatsApp or call
        and our team will assist you right away.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="https://wa.me/971501488044?text=Hi%20I%27d%20like%20to%20book%20a%20desert%20safari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500/90 hover:bg-green-500 text-black font-semibold px-6 py-4 transition"
        >
          <span>Chat on WhatsApp</span>
        </a>
        <a
          href="tel:+971501488044"
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-4 transition"
        >
          <span>Call +971 50 148 8044</span>
        </a>
      </div>

      <div className="mt-8 text-white/90">
        <p className="mb-2"><span className="text-white/60">Email:</span> <a className="underline hover:text-yellow-400" href="mailto:Imran@wellcareevent.com">Imran@wellcareevent.com</a></p>
        <p className="mb-2"><span className="text-white/60">Hours:</span> 7 days a week, 9:00 AM – 10:00 PM (GST)</p>
        <p className=""><span className="text-white/60">Location:</span> Dubai, United Arab Emirates</p>
      </div>
    </section>
  );
}
