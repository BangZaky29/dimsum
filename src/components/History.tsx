export default function History() {
  return (
    <section id="about" className="py-24 relative bg-maroon-900 border-y-8 border-maroon-700 w-full overflow-hidden">
      {/* Background Pattern Hint */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] mix-blend-multiply" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-beige-100 flex flex-col md:flex-row items-stretch shadow-2xl relative">

          {/* Decorative Corner Element */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold-500" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold-500" />

          {/* Image Side */}
          <div className="md:w-1/2 min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Bamboo steamer with delicious dim sum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-beige-100 relative overflow-hidden">
            {/* Abstract decorative graphic */}
            <div className="absolute top-0 right-0 opacity-5 w-32 h-32 bg-gold-600 rounded-full blur-2xl" />

            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 mb-6 drop-shadow-sm font-bold tracking-wider uppercase">
              About Us
            </h2>

            <div className="font-sans text-charcoal-800 leading-relaxed md:text-base mb-10 max-w-md space-y-4 text-justify">
              <p>
                <strong className="text-maroon-900 font-bold">CV. Olahan Makanan LapanLapan</strong> adalah pelopor produsen <em>frozen dimsum</em> premium skala mikro yang beralamat di kota Bekasi dan Jakarta Timur. Kami berkomitmen penuh untuk menghadirkan cita rasa terbaik dengan menggunakan bahan baku segar, halal, dan diproses secara higienis.
              </p>
              <p>
                Melalui dedikasi tinggi, kami memproduksi aneka varian unggulan (Dimsum Lumpia, Mozarela, Nori, dan Spicy) yang tidak hanya memanjakan lidah setiap pelanggan, namun juga dirancang untuk mendukung pertumbuhan dan kesuksesan mitra usaha kami.
              </p>
            </div>

            <div>
              <a href="#menu" className="inline-block bg-maroon-700 hover:bg-maroon-900 text-white font-serif tracking-widest text-xs uppercase py-3 px-8 rounded-full transition-colors font-bold shadow-md cursor-pointer">
                Lihat Menu Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
