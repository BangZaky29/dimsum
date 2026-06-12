import { useState, useEffect } from 'react';

export default function MenuGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const dishes = [
    {
      title: "SHRIMP DUMPLING",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600",
      isImageRight: false
    },
    {
      title: "XIAO LONG BAO",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=600",
      isImageRight: true
    },
    {
      title: "BBQ PORK BUN",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=600",
      isImageRight: true
    },
    {
      title: "SHAOMAI",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
      isImageRight: false
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
            Always using the best ingredients and fresh from the farm<br/>
            lorem ipsum dolor sit amet
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-maroon-900 transition-colors font-serif tracking-widest text-xs uppercase py-3 px-8 rounded-full font-bold cursor-pointer relative z-10"
          >
            View All Menu
          </button>
        </div>

        {/* 2x2 Grid / Checkerboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-beige-100 shadow-2xl">
          {/* Dish 1: Text | Img */}
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[0].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[0].desc}</p>
          </div>
          <div className="h-64 lg:h-auto">
            <img src={dishes[0].img} alt={dishes[0].title} className="w-full h-full object-cover" />
          </div>

          {/* Dish 2: Text | Img */}
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[1].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[1].desc}</p>
          </div>
          <div className="h-64 lg:h-auto">
            <img src={dishes[1].img} alt={dishes[1].title} className="w-full h-full object-cover" />
          </div>

          {/* Dish 3: Img | Text */}
          <div className="h-64 lg:h-auto">
            <img src={dishes[2].img} alt={dishes[2].title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[2].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[2].desc}</p>
          </div>

          {/* Dish 4: Img | Text */}
          <div className="h-64 lg:h-auto">
            <img src={dishes[3].img} alt={dishes[3].title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-white border border-gray-100">
            <h3 className="font-serif text-maroon-700 font-bold tracking-wide mb-3">{dishes[3].title}</h3>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">{dishes[3].desc}</p>
          </div>
        </div>

      </div>

      {/* Modal / Popup for Full Menu */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-beige-100 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
              <h3 className="font-display font-bold text-2xl text-maroon-900">126 Dim Sum Full Menu</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Steamed Category */}
                <div>
                  <h4 className="font-serif font-bold text-gold-700 text-xl border-b-2 border-gold-500/30 pb-2 mb-4">Steamed Dim Sum</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Shrimp Dumpling (Har Gow)</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.50</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Pork & Shrimp Shaomai</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.20</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Xiao Long Bao</span>
                      <span className="font-serif text-maroon-700 font-bold">$5.00</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Steamed BBQ Pork Bun</span>
                      <span className="font-serif text-maroon-700 font-bold">$3.80</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Lotus Leaf Sticky Rice</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.80</span>
                    </li>
                  </ul>
                </div>

                {/* Baked/Fried Category */}
                <div>
                  <h4 className="font-serif font-bold text-gold-700 text-xl border-b-2 border-gold-500/30 pb-2 mb-4">Baked & Fried</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Baked BBQ Pork Pastry</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.20</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Crispy Shrimp Roll</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.60</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Pan-fried Turnip Cake</span>
                      <span className="font-serif text-maroon-700 font-bold">$3.80</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200/60 pb-2">
                      <span className="font-sans font-medium text-charcoal-900">Egg Tart</span>
                      <span className="font-serif text-maroon-700 font-bold">$4.00</span>
                    </li>
                  </ul>
                </div>

              </div>
              
              <div className="mt-8 text-center bg-gray-50 border border-gray-200 rounded p-4 text-gray-500 text-sm font-sans">
                Full menu extends further in the actual menu book. Prices subject to change.
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
