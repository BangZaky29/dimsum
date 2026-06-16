export default function LatestNews() {
  const newsItems = [
    {
      title: "Tips Menyimpan Dimsum Frozen",
      desc: "Simpan dimsum frozen di freezer dengan suhu -18°C agar tahan hingga 2 bulan. Jangan biarkan di suhu ruang terlalu lama.",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400",
      query: "tips menyimpan dimsum frozen"
    },
    {
      title: "Peluang Usaha Frozen Dimsum",
      desc: "Bisnis frozen dimsum semakin diminati di kalangan UMKM karena modal yang terjangkau dan minat pasar yang tinggi.",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400",
      query: "peluang usaha frozen dimsum umkm"
    },
    {
      title: "Cara Mengukus Dimsum yang Benar",
      desc: "Kukus dimsum selama 10-15 menit dengan api sedang. Pastikan air sudah mendidih sebelum dimsum dimasukkan ke kukusan.",
      img: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=400",
      query: "cara mengukus dimsum yang benar"
    },
    {
      title: "Sejarah Kepopuleran Dimsum",
      desc: "Berawal dari tradisi yum cha di Tiongkok, dimsum kini telah beradaptasi menjadi camilan favorit di seluruh dunia, termasuk Indonesia.",
      img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=400",
      query: "sejarah dimsum dan tradisi yum cha"
    }
  ];

  return (
    <section id="news" className="py-24 bg-beige-100 w-full relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-32" />
            <div className="w-2 h-2 rotate-45 bg-gold-500" />
            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 font-bold tracking-wider px-4">
              LATEST NEWS
            </h2>
            <div className="w-2 h-2 rotate-45 bg-gold-500" />
            <div className="h-px bg-gray-300 w-32" />
          </div>
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, i) => (
            <a 
              key={i} 
              href={`https://www.google.com/search?q=${encodeURIComponent(item.query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group cursor-pointer block"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{item.title}</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                <span className="text-maroon-500 font-bold text-sm tracking-wide group-hover:text-gold-600 transition-colors text-left flex items-center gap-1">
                  Cari tahu
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
           <a 
              href={`https://www.google.com/search?q=${encodeURIComponent("berita terbaru peluang usaha dimsum umkm")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-maroon-700 hover:bg-maroon-900 text-white font-serif tracking-widest text-xs uppercase py-3 px-10 rounded-full transition-colors font-bold shadow-md"
            >
            Lihat Semua Berita
          </a>
        </div>
        
      </div>
    </section>
  );
}
