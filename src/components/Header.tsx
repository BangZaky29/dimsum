import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {/* Announcement Bar */}
      <div className="bg-maroon-900 text-white text-xs sm:text-sm py-2 px-6 flex justify-center items-center z-50 relative text-center">
        <p className="font-sans tracking-wide">ANNOUNCEMENTS: Nikmati aneka olahan dimsum terbaik kami setiap hari.</p>
      </div>

      {/* Navigation */}
      <nav className="bg-charcoal-900/95 sticky top-0 z-40 w-full backdrop-blur-sm border-b border-white/5">
        <div className="h-20 flex items-center relative px-6 lg:px-12 max-w-screen-2xl mx-auto">
          {/* Left Links */}
          <div className="hidden xl:flex items-center gap-8 justify-end text-sm tracking-widest uppercase font-serif font-medium text-beige-100 flex-1 pr-24">
            <img src="/dimsum.png" alt="Logo LapanLapan" className="h-10 w-auto object-contain bg-white rounded-md p-1 shadow-sm mr-2" />
            <a href="#" className="hover:text-gold-500 transition-colors">Homepage</a>
            <a href="#about" className="hover:text-gold-500 transition-colors">About Us</a>
            <a href="#menu" className="hover:text-gold-500 transition-colors">Our Menu</a>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex justify-center absolute left-1/2 -translate-x-1/2 h-full z-20">
            <div className="bg-maroon-700 w-32 h-28 absolute -top-0 flex flex-col justify-center items-center shadow-lg shadow-black/20 rounded-b-md">
              <span className="text-2xl font-bold text-gold-500 font-serif pb-1 text-center leading-none mt-2">Lapan<br/>Lapan</span>
              <span className="text-[10px] font-sans tracking-widest text-white border-t border-gold-500/30 pt-2 w-20 text-center uppercase mt-1 leading-tight">Olahan<br/>Makanan</span>
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden xl:flex items-center gap-8 justify-start text-sm tracking-widest uppercase font-serif font-medium text-beige-100 flex-1 pl-24">
            <a href="#reviews" className="hover:text-gold-500 transition-colors">Reviews</a>
            <a href="#news" className="hover:text-gold-500 transition-colors">News</a>
            <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-auto relative z-50">
            <button 
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-charcoal-900 border-b border-gold-500/30 xl:hidden z-40 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col py-4 px-6 text-sm tracking-widest uppercase font-serif font-medium text-beige-100">
                <a href="#" className="block hover:text-gold-500 transition-colors py-3 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Homepage</a>
                <a href="#about" className="block hover:text-gold-500 transition-colors py-3 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                <a href="#menu" className="block hover:text-gold-500 transition-colors py-3 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Our Menu</a>
                <a href="#reviews" className="block hover:text-gold-500 transition-colors py-3 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                <a href="#news" className="block hover:text-gold-500 transition-colors py-3 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>News</a>
                <a href="#contact" className="block hover:text-gold-500 transition-colors py-3" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
