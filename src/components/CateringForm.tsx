import React, { useState } from 'react';

export default function CateringForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    messages: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting the message to look elegant and professional
    const text = `*New Catering & Bulk Order Inquiry* 🥢\n\n*Client Name:* ${formData.name}\n*Event Date:* ${formData.date}\n*Number of Guests/Pax:* ${formData.guests}\n\n*Special Requests/Details:*\n${formData.messages}`;
    
    // WhatsApp number format: 081995770190 -> 6281995770190
    const waNumber = "6281995770190"; 
    
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="catering" className="py-24 bg-beige-200 w-full relative overflow-hidden text-center border-t border-maroon-900/10">
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-maroon-700 w-24 sm:w-32" />
            <div className="w-2 h-2 rotate-45 bg-maroon-700" />
            <h2 className="text-3xl md:text-4xl font-display text-maroon-900 font-bold tracking-wider px-4 uppercase">
              Catering & Bulk Orders
            </h2>
            <div className="w-2 h-2 rotate-45 bg-maroon-700" />
            <div className="h-px bg-maroon-700 w-24 sm:w-32" />
          </div>
          <p className="font-sans text-charcoal-800 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-4 font-medium">
            Planning a special event? Let us bring the finest dim sum to you. Fill out the form below to inquire about our catering services and bulk orders.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 shadow-2xl relative text-left rounded-sm border border-gray-100">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold-500" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold-500" />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="font-serif text-maroon-900 font-bold text-sm mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 font-sans text-charcoal-900 placeholder:text-gray-400 transition-colors"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="font-serif text-maroon-900 font-bold text-sm mb-2" htmlFor="date">Event Date</label>
                <input 
                  type="date" 
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 font-sans text-charcoal-900 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-serif text-maroon-900 font-bold text-sm mb-2" htmlFor="guests">Number of Guests (Pax)</label>
              <input 
                type="number" 
                id="guests"
                name="guests"
                required
                min="1"
                value={formData.guests}
                onChange={handleChange}
                placeholder="e.g. 50"
                className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 font-sans text-charcoal-900 placeholder:text-gray-400 transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-serif text-maroon-900 font-bold text-sm mb-2" htmlFor="messages">Additional Details</label>
              <textarea 
                id="messages"
                name="messages"
                required
                rows={4}
                value={formData.messages}
                onChange={handleChange}
                placeholder="Type of event, specific menu requests, or any dietary requirements..."
                className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-maroon-500 focus:ring-1 focus:ring-maroon-500 font-sans text-charcoal-900 placeholder:text-gray-400 resize-none transition-colors"
              ></textarea>
            </div>

            <div className="text-center mt-2">
              <button 
                type="submit" 
                className="bg-maroon-700 hover:bg-maroon-900 text-white font-serif tracking-widest text-sm uppercase py-4 px-12 rounded-full transition-colors font-bold shadow-md w-full sm:w-auto flex items-center justify-center gap-3 mx-auto"
              >
                Send Request via WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
