export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white py-8 my-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-3 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-3">
            <i className="fa-solid fa-cake-candles text-amber-200"></i>
          </div>
          <h4 className="font-bold text-base md:text-lg font-heading">
            Custom Wedding Cakes
          </h4>
          <p className="text-xs text-rose-100 mt-1">
            Bespoke designs tailored for your special day
          </p>
        </div>

        <div className="p-3 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-3">
            <i className="fa-solid fa-bolt text-amber-200"></i>
          </div>
          <h4 className="font-bold text-base md:text-lg font-heading">
            Authentic Uji Power
          </h4>
          <p className="text-xs text-rose-100 mt-1">
            Peanuts, Cassava & Arrowroot energy blend
          </p>
        </div>

        <div className="p-3 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-3">
            <i className="fa-solid fa-fire-flame-curved text-amber-200"></i>
          </div>
          <h4 className="font-bold text-base md:text-lg font-heading">
            Baked Fresh Daily
          </h4>
          <p className="text-xs text-rose-100 mt-1">
            Premium ingredients & mouth-watering flavors
          </p>
        </div>

        <div className="p-3 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-3">
            <i className="fa-brands fa-whatsapp text-emerald-300"></i>
          </div>
          <h4 className="font-bold text-base md:text-lg font-heading">
            Instant WhatsApp Orders
          </h4>
          <p className="text-xs text-rose-100 mt-1">
            Direct chat ordering to 0724323377
          </p>
        </div>
      </div>
    </section>
  );
}
