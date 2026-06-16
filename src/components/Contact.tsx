import { MapPin, Phone, Mail, MessageCircle, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="text-white w-6 h-6" />,
      title: "Alamat Kantor",
      content: "EKS Satudral Pondok Gede Nomor 102 Jalan Mawar, Desa/Kelurahan Jatirahayu, Kec. Pondokmelati, Kota Bekasi, Provinsi Jawa Barat, Kode Pos: 17112",
      link: "https://www.google.com/maps/search/?api=1&query=EKS+Satudral+Pondok+Gede+Nomor+102+Jalan+Mawar,+Desa/Kelurahan+Jatirahayu,+Kec.+Pondokmelati,+Kota+Bekasi,+Provinsi+Jawa+Barat,+Kode+Pos:+17112",
      delay: 0.1
    },
    {
      icon: <MessageCircle className="text-white w-6 h-6" />,
      title: "WhatsApp",
      content: "0812 9881 8388",
      link: "https://wa.me/6281298818388",
      delay: 0.2
    },
    {
      icon: <Phone className="text-white w-6 h-6" />,
      title: "Telepon Kantor",
      content: "081316098799",
      link: "tel:+6281316098799",
      delay: 0.3
    },
    {
      icon: <Mail className="text-white w-6 h-6" />,
      title: "Email",
      content: "olahanmakananlapanlapan@gmail.com",
      link: "mailto:olahanmakananlapanlapan@gmail.com",
      delay: 0.4
    },
    {
      icon: <Briefcase className="text-white w-6 h-6" />,
      title: "Skala Usaha",
      content: "Usaha Mikro",
      link: null,
      delay: 0.5
    }
  ];

  return (
    <section id="contact" className="py-24 relative w-full overflow-hidden bg-white">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")' 
        }}
      />
      <div className="absolute inset-0 bg-gray-50/50 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-32" />
            <div className="w-2 h-2 rotate-45 bg-charcoal-900" />
            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 font-bold tracking-wider px-4 uppercase">
              HUBUNGI KAMI
            </h2>
            <div className="w-2 h-2 rotate-45 bg-charcoal-900" />
            <div className="h-px bg-gray-300 w-32" />
          </div>
        </motion.div>
        
        {/* Contact Grid Flex */}
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {contactInfo.map((info, index) => {
            const CardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: info.delay, duration: 0.5 }}
                className={`flex flex-col items-center text-center p-8 bg-beige-100/80 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 w-full h-full ${info.link ? 'cursor-pointer hover:-translate-y-1' : ''}`}
              >
                <div className={`bg-maroon-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-maroon-900/20 ${info.link ? 'group-hover:scale-110 transition-transform' : ''}`}>
                  {info.icon}
                </div>
                <h4 className="font-serif font-bold text-charcoal-900 mb-3 uppercase tracking-wider">{info.title}</h4>
                <p className={`font-sans text-sm leading-relaxed ${info.link ? 'text-maroon-700 font-medium group-hover:underline' : 'text-gray-700'}`}>
                  {info.content}
                </p>
              </motion.div>
            );

            return info.link ? (
              <a 
                href={info.link} 
                target={info.link.startsWith('http') ? '_blank' : '_self'} 
                rel="noopener noreferrer" 
                key={index} 
                className="group flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[340px] flex"
              >
                {CardContent}
              </a>
            ) : (
              <div 
                key={index} 
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[340px] flex"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
