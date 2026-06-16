import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dimsumLumpia from '../../assets/dimsum_image/dimsum_lumpia.jpeg';
import dimsumMozarela from '../../assets/dimsum_image/dimsum_mozarela.jpeg';
import dimsumNori from '../../assets/dimsum_image/dimsum_nori.jpeg';
import dimsumSpicy from '../../assets/dimsum_image/dimsum_spicy.jpeg';

export default function MenuGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedImage]);

  const dishes = [
    {
      title: "DIMSUM LUMPIA",
      desc: "Balutan kulit lumpia krispi dengan isian daging ayam dan udang pilihan yang kaya rasa, disajikan hangat untuk memanjakan lidah Anda.",
      img: dimsumLumpia,
      waText: "Halo, saya ingin memesan Dimsum Lumpia."
    },
    {
      title: "DIMSUM MOZARELA",
      desc: "Perpaduan sempurna dimsum lezat dengan lelehan keju mozarela di atasnya, menciptakan sensasi gurih dan creamy yang tak terlupakan.",
      img: dimsumMozarela,
      waText: "Halo, saya ingin memesan Dimsum Mozarela."
    },
    {
      title: "DIMSUM NORI",
      desc: "Dimsum gurih yang dibungkus dengan rumput laut (nori) berkualitas, memberikan aroma laut yang khas dan tekstur yang unik.",
      img: dimsumNori,
      waText: "Halo, saya ingin memesan Dimsum Nori."
    },
    {
      title: "DIMSUM SPICY",
      desc: "Bagi pecinta pedas, varian ini menghadirkan tendangan rasa pedas rempah rahasia yang berpadu dengan kelembutan dimsum premium.",
      img: dimsumSpicy,
      waText: "Halo, saya ingin memesan Dimsum Spicy."
    }
  ];

  return (
    <section id="menu" className="py-24 bg-maroon-900 w-full relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gold-600/50 w-32" />
            <div className="w-2 h-2 rotate-45 bg-gold-500" />
            <h2 className="text-3xl md:text-4xl font-display text-gold-500 font-bold tracking-wider px-4">
              OUR MENU
            </h2>
            <div className="w-2 h-2 rotate-45 bg-gold-500" />
            <div className="h-px bg-gold-600/50 w-32" />
          </div>
          
          <p className="font-sans text-white/80 max-w-xl mx-auto text-sm mb-8">
            Dibuat dari bahan-bahan pilihan berkualitas tinggi untuk menghasilkan<br/>
            dimsum lezat, sehat, dan bergizi setiap harinya. Klik gambar untuk melihat detail.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-maroon-900 transition-colors font-serif tracking-widest text-xs uppercase py-3 px-8 rounded-full font-bold cursor-pointer relative z-10"
          >
            Lihat Semua Menu
          </button>
        </div>

        {/* 2x2 Grid / Checkerboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-beige-100 shadow-2xl overflow-hidden">
          {/* Dish 1: Text | Img */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="order-2 md:order-none p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[0].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[0].desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="order-1 md:order-none h-56 md:h-64 lg:h-auto overflow-hidden cursor-pointer" onClick={() => setSelectedImage(dishes[0].img)}>
            <img src={dishes[0].img} alt={dishes[0].title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Dish 2: Text | Img */}
          <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="order-4 md:order-none p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[1].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[1].desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="order-3 md:order-none h-56 md:h-64 lg:h-auto overflow-hidden cursor-pointer" onClick={() => setSelectedImage(dishes[1].img)}>
            <img src={dishes[1].img} alt={dishes[1].title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Dish 3: Img | Text */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="order-5 md:order-none h-56 md:h-64 lg:h-auto overflow-hidden cursor-pointer" onClick={() => setSelectedImage(dishes[2].img)}>
            <img src={dishes[2].img} alt={dishes[2].title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="order-6 md:order-none p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[2].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[2].desc}</p>
          </motion.div>

          {/* Dish 4: Img | Text */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="order-7 md:order-none h-56 md:h-64 lg:h-auto overflow-hidden cursor-pointer" onClick={() => setSelectedImage(dishes[3].img)}>
            <img src={dishes[3].img} alt={dishes[3].title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} className="order-8 md:order-none p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[3].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[3].desc}</p>
          </motion.div>
        </div>

      </div>

      {/* Modal / Popup for Full Menu */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-beige-100 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 bg-white">
                <h3 className="font-display font-bold text-lg sm:text-2xl text-maroon-900 pr-2">Menu Olahan Makanan LapanLapan</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-500 hover:text-maroon-900 transition-colors rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                <div className="max-w-2xl mx-auto">
                  <h4 className="font-serif font-bold text-gold-700 text-xl border-b-2 border-gold-500/30 pb-2 mb-6">Menu Frozen Dimsum LapanLapan</h4>
                  <ul className="space-y-4">
                    {dishes.map((dish, idx) => {
                      const prices = ["Rp 85.000", "Rp 65.000", "Rp 75.000", "Rp 65.000"];
                      return (
                        <li key={idx} className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                          <div className="flex flex-col">
                            <span className="font-sans font-bold text-charcoal-900 text-lg capitalize">{dish.title.toLowerCase()}</span>
                            <span className="text-xs text-gray-500 mt-1 bg-gray-100 w-max px-2 py-1 rounded font-medium">Isi 25 Pcs</span>
                          </div>
                          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4">
                            <span className="font-serif text-maroon-700 font-bold text-xl">{prices[idx]}</span>
                            <a 
                              href={`https://wa.me/6281298818388?text=${encodeURIComponent(dish.waText)}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-2 px-3 rounded-full flex items-center gap-1 transition-colors shadow-sm"
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                              Pesan WA
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className="mt-10 text-center bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-500 text-sm font-sans shadow-inner">
                  Tersedia juga paket katering dan pesanan dalam jumlah besar untuk acara Anda. Hubungi kami untuk informasi lebih lanjut. Harga dapat berubah sewaktu-waktu.
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Image Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Dimsum detail" 
              className="relative max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
