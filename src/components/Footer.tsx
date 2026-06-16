import { animate } from 'framer-motion';

export default function Footer() {
  const handleScrollToTop = () => {
    // Custom smooth scroll using framer-motion for better effect
    animate(window.scrollY, 0, {
      duration: 1.2, // 1.2 seconds duration
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest)
    });
  };

  return (
    <footer className="bg-[#1f232e] py-6 px-6 relative w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src="/dimsum.png" alt="Logo LapanLapan" className="h-14 md:h-16 object-contain bg-white rounded-lg p-1.5 shadow-sm" />
        </div>

        {/* Copyright */}
        <div className="text-gray-400 font-sans text-center md:text-left flex flex-col md:block">
          <span>Hak Cipta © 2026 Olahan Makanan LapanLapan</span>
          <span className="md:ml-2">Semua hak dilindungi.</span>
        </div>

        {/* Back to top */}
        <div className="mt-4 md:mt-0">
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
            title="Kembali ke atas"
          >
            <span className="font-sans text-[10px] tracking-widest uppercase hidden sm:block">Ke Atas</span>
            <div className="bg-charcoal-800 p-2 rounded-full border border-white/10 group-hover:bg-maroon-700 group-hover:border-maroon-500 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </button>
        </div>



      </div>
    </footer>
  );
}
