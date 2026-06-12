import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f232e] py-6 px-6 relative w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="bg-charcoal-800 flex flex-col justify-center items-center py-1 px-4 border text-white border-white/20 rounded">
          <span className="font-display font-medium text-sm tracking-widest">揾食</span>
          <span className="font-sans text-[10px] tracking-widest border-t border-white/30 pt-[2px] mt-[1px]">126</span>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 font-sans text-center md:text-left flex flex-col md:block">
          <span>Copyright © 2017. 126 Eating House Group Pte Ltd</span>
          <span className="md:ml-2">All rights reserved.</span>
        </div>

        {/* Social */}
        <div>
          <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>

      </div>
    </footer>
  );
}
