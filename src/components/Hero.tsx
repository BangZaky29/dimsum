export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3")' 
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-gold-500 mb-6 drop-shadow-lg tracking-wider">
          THE BEST DIMSUM IN TOWN
        </h1>
        <p className="text-xl md:text-2xl font-serif text-white/90 max-w-2xl font-light mb-12">
          Lorem Ipsum Dolor Sit Amet Consectetur
        </p>
        
        {/* Decorative Badge */}
        <a href="#menu" className="w-24 h-24 rounded-full bg-maroon-700 flex flex-col items-center justify-center border-2 border-maroon-500/50 shadow-2xl hover:scale-105 transition-transform cursor-pointer group">
          <svg className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
          </svg>
          <span className="text-[10px] tracking-widest text-gold-500 uppercase mt-2 group-hover:text-white transition-colors">View Menu</span>
        </a>
      </div>
    </section>
  );
}
