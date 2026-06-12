import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative w-full overflow-hidden">
      {/* Background Map Texture Hint */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")' 
        }}
      />
      <div className="absolute inset-0 bg-gray-50/90 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-32" />
            <div className="w-2 h-2 rotate-45 bg-charcoal-900" />
            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 font-bold tracking-wider px-4">
              CONTACT US
            </h2>
            <div className="w-2 h-2 rotate-45 bg-charcoal-900" />
            <div className="h-px bg-gray-300 w-32" />
          </div>
        </div>

        {/* Note: I'm replacing the map with a stylized representation to avoid iframe/embed complexity in mockup */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Location 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-maroon-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-charcoal-900 mb-2">GEYLANG OUTLET</h4>
            <p className="font-sans text-gray-600 text-sm mb-1">126 Sims Avenue Singapore 387449</p>
            <p className="font-sans text-charcoal-800 text-sm font-medium">Open 24 hours daily</p>
            
            <div className="h-px w-12 bg-gray-300 my-6" />

            <h4 className="font-serif font-bold text-charcoal-900 mb-2">BOON KENG OUTLET</h4>
            <p className="font-sans text-gray-600 text-sm mb-1">1086 Serangoon Road Singapore 328187</p>
            <p className="font-sans text-charcoal-800 text-sm font-medium">Open 5pm to 2am daily</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="bg-maroon-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Phone className="text-white w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-charcoal-900 mb-2 uppercase">Geylang Outlet</h4>
            <p className="font-sans text-gold-600 font-bold mb-6">Tel: 6746 4757</p>

            <h4 className="font-serif font-bold text-charcoal-900 mb-2 uppercase">Boon Keng Outlet</h4>
            <p className="font-sans text-gold-600 font-bold mb-1">Tel: 6297 5032</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="bg-maroon-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Mail className="text-white w-6 h-6" />
            </div>
            <p className="font-sans text-gray-600 text-sm mb-2 max-w-xs leading-relaxed">
              If you have any questions or comments,<br/>please contact us at
            </p>
            <a href="mailto:contact@126.com.sg" className="font-sans text-gold-600 font-bold hover:text-maroon-700 transition-colors">
              contact@126.com.sg
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
