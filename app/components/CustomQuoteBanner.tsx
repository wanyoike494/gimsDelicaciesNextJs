import Image from "next/image";

interface CustomQuoteBannerProps {
  onOpenCustomQuote: (prefillCakeName?: string) => void;
}

export default function CustomQuoteBanner({ onOpenCustomQuote }: CustomQuoteBannerProps) {
  return (
    <section id="custom-quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-2xl border-2 border-amber-500/30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-4 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-widest border border-amber-400/30">
              Bespoke Cake Design Service
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
              Planning a Special Event or Wedding?
            </h3>

            <p className="text-amber-100/90 text-base md:text-lg max-w-2xl leading-relaxed">
              Whether you need a grand multi-tiered wedding cake, an intricate birthday masterpiece, or a customized anniversary cake, Head Chef Alice Njambi will craft your exact vision!
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenCustomQuote()}
                className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-amber-950 font-extrabold shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                <span>Get a Custom Quote Now</span>
              </button>

              <a
                href="https://wa.me/254724323377?text=Hi%20Chef%20Alice!%20I%20want%20to%20consult%20about%20a%20custom%20cake."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 backdrop-blur-md transition flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-emerald-400 text-xl"></i>
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-amber-400/40 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 relative">
              <Image
                src="/assets/weddingsCakes/aneta-voborilova-Hps0j8Uu8Us-unsplash.jpg"
                alt="Wedding Cake Sample"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
