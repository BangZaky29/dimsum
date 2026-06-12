export default function Testimonials() {
  return (
    <section id="reviews" className="relative w-full py-32 overflow-hidden bg-charcoal-900 border-y border-gold-700/20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3")' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-display text-gold-500 font-bold tracking-widest mb-10 drop-shadow-md">
          OUR CUSTOMERS SAY
        </h2>
        
        <div className="max-w-2xl bg-black/20 p-8 rounded-lg backdrop-blur-sm border-l-4 border-gold-500">
          <p className="font-serif text-white font-bold text-lg mb-4">Alex James</p>
          
          <p className="font-sans text-white/90 text-base leading-relaxed mb-6 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          
          {/* 5-Star Rating */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-gold-500 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
