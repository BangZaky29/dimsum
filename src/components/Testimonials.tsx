import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Budi Santoso",
    text: "Dimsum Mozarelanya bener-bener juara! Keju lumer dipadu dagingnya berasa banget. Cocok buat ngemil bareng keluarga di rumah. Pengirimannya juga cepat dan aman.",
    rating: 5
  },
  {
    name: "Siti Aminah",
    text: "Udah sering order yang rasa Spicy. Pedasnya nendang tapi gak lebay, pas banget di lidah. Praktis tinggal kukus sebentar. Pokoknya mantap, langganan terus!",
    rating: 5
  },
  {
    name: "Hendra Wijaya",
    text: "Dimsum Nori rasanya unik, wangi rumput lautnya sedap. Harga sangat bersahabat buat ukuran dimsum frozen seenak ini. Pas buat dijual lagi karena isinya banyak.",
    rating: 4
  },
  {
    name: "Dewi Lestari",
    text: "Kualitas dagingnya kerasa premium, ukurannya juga lumayan besar. Varian Lumpia krispinya favorit anak-anak di rumah. Sangat recommended buat cemilan sehat.",
    rating: 5
  },
  {
    name: "Andi Pratama",
    text: "Pelayanannya ramah dan responsif. Dimsumnya selalu fresh walaupun frozen. Pernah pesen buat acara kantor dan pada ketagihan nanyain belinya di mana.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display text-gold-500 font-bold tracking-widest mb-10 drop-shadow-md uppercase"
        >
          KATA PELANGGAN KAMI
        </motion.h2>
        
        <div className="relative max-w-2xl min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-black/40 p-6 md:p-8 rounded-lg backdrop-blur-md border-l-4 border-gold-500 shadow-xl"
            >
              <p className="font-serif text-white font-bold text-lg mb-4">{testimonials[currentIndex].name}</p>
              
              <p className="font-sans text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* Stars Rating */}
              <div className="flex gap-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-500 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slider Indicators */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx ? 'w-8 bg-gold-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
