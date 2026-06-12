import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-maroon-900 text-white text-xs sm:text-sm py-2 px-6 flex justify-between items-center z-50 relative">
        <p className="font-sans tracking-wide">ANNOUNCEMENTS: Boon Keng Outlet is opening 9am - 2am daily.</p>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block tracking-widest text-[10px] uppercase">Follow Us</span>
          <Facebook className="w-4 h-4 cursor-pointer hover:text-gold-500 transition-colors" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-charcoal-900/95 sticky top-0 z-40 w-full backdrop-blur-sm border-b border-white/5">
        <div className="h-20 flex items-center justify-between xl:grid xl:grid-cols-3 px-6 lg:px-12 max-w-screen-2xl mx-auto">
          {/* Left Links */}
          <div className="hidden xl:flex items-center gap-8 justify-end text-sm tracking-widest uppercase font-serif font-medium text-beige-100">
            <a href="#" className="hover:text-gold-500 transition-colors">Homepage</a>
            <a href="#about" className="hover:text-gold-500 transition-colors">About Us</a>
            <a href="#menu" className="hover:text-gold-500 transition-colors">Our Menu</a>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center xl:col-start-2 relative h-full">
            <div className="bg-maroon-700 w-32 h-28 absolute -top-0 flex flex-col justify-center items-center shadow-lg shadow-black/20 z-10 rounded-b-md">
              <span className="text-3xl font-bold text-gold-500 font-serif pb-1">揾食</span>
              <span className="text-sm font-sans tracking-widest text-white border-t border-gold-500/30 pt-1 w-16 text-center">126</span>
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden xl:flex items-center gap-8 justify-start text-sm tracking-widest uppercase font-serif font-medium text-beige-100">
            <a href="#reviews" className="hover:text-gold-500 transition-colors">Reviews</a>
            <a href="#news" className="hover:text-gold-500 transition-colors">News</a>
            <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="xl:hidden ml-auto">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
