import Image from "next/image";

export default function AboutChef() {
  return (
    <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
      <div className="bg-baked-gradient rounded-3xl p-8 md:p-14 border border-rose-100 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-rose-200">
              <Image
                src="/assets/logo/IMG-20260706-WA0001.jpg"
                alt="Chef Alice Njambi"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 right-4 md:right-10 bg-amber-950 text-amber-200 px-5 py-2.5 rounded-2xl shadow-lg text-sm font-bold flex items-center gap-2 border border-amber-700/50">
              <i className="fa-solid fa-award text-amber-400 text-lg"></i>
              <span>Master Baker & Founder</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs uppercase tracking-wider border border-rose-200">
              Behind the Scenes
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-amber-950 font-heading">
              Meet Head Chef Alice Njambi
            </h2>

            <p className="text-stone-700 text-base md:text-lg leading-relaxed">
              Welcome to <strong>Gims Delicacies</strong>! I am <strong>Alice Njambi</strong>, Head Chef and founder of Gims Delicacies. Baking has been my lifelong passion — creating memorable taste experiences that bring family, friends, and communities together during life’s sweetest moments.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We specialize in custom celebration cakes, gooey cinnamon rolls, golden cookies, crispy savory samosas, and our beloved <strong>Uji Power</strong> — a traditional Kenyan nutritional blend of roasted peanuts, cassava, arrow roots, pumpkin seeds, and spices that nourishes both body and soul!
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-rose-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-user text-lg"></i>
                </div>
                <div>
                  <span className="block text-xs text-stone-500">Head Chef & Owner</span>
                  <span className="font-bold text-stone-800">Alice Njambi</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <span className="block text-xs text-stone-500">Direct Contact</span>
                  <a href="tel:0724323377" className="font-bold text-emerald-700 hover:underline">
                    0724323377
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
