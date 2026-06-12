export default function LatestNews() {
  const newsItems = [
    {
      title: "Tips From Our Chef",
      desc: "Lorem ipsum is simply dummy text of the printing and...",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Asian Food Festival",
      desc: "Lorem ipsum is simply dummy text of the printing and...",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Tips From Our Chef",
      desc: "Lorem ipsum is simply dummy text of the printing and...",
      img: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Asian Food Festival",
      desc: "Lorem ipsum is simply dummy text of the printing and...",
      img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=400",
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
            <div key={i} className="bg-white hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group cursor-pointer">
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
                <button onClick={() => alert("Full article coming soon!")} className="text-maroon-500 font-bold text-sm tracking-wide group-hover:text-gold-600 transition-colors text-left">Read more...</button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
           <button onClick={() => alert("All news page coming soon!")} className="bg-maroon-700 hover:bg-maroon-900 text-white font-serif tracking-widest text-xs uppercase py-3 px-10 rounded-full transition-colors font-bold shadow-md">
            View All
          </button>
        </div>
        
      </div>
    </section>
  );
}
