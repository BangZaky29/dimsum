import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Berganti setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImages[currentImage]}")`
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" /> {/* Dark overlay */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center px-4 flex flex-col items-center mt-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display text-gold-500 mb-6 drop-shadow-lg tracking-wider px-2">
          OLAHAN MAKANAN LAPANLAPAN
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-serif text-white/90 max-w-2xl font-light mb-12 px-4">
          Sensasi Dimsum Terbaik untuk Usaha Mikro
        </p>

        {/* Decorative Badge */}
        <a href="#menu" className="w-24 h-24 rounded-full bg-maroon-700 flex flex-col items-center justify-center border-2 border-maroon-500/50 shadow-2xl hover:scale-105 transition-transform cursor-pointer group">
          <svg className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </svg>
          <span className="text-[10px] tracking-widest text-gold-500 uppercase mt-2 group-hover:text-white transition-colors">Lihat Menu</span>
        </a>
      </motion.div>
    </section>
  );
}
