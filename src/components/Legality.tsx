import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, FileBadge, Scale } from 'lucide-react';

// Import the documents
import aktaDoc from '../../assets/document/AKTA  PENDIRIAN CV OLAHAN MAKANAN LAPANLAPAN.pdf';
import nibDoc from '../../assets/document/NIB CV. OLAHAN MAKANAN LAPANLAPAN.pdf';
import npwpDoc from '../../assets/document/NPWP CV. OLAHAN MAKANAN LAPANLAPAN.pdf';
import skDoc from '../../assets/document/SK CV. OLAHAN MAKANAN LAPANLAPAN.pdf';

export default function Legality() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedDoc]);

  const documents = [
    {
      title: "Akta Pendirian",
      desc: "Bukti sah pendirian badan usaha CV Olahan Makanan LapanLapan.",
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      file: aktaDoc,
      delay: 0.1
    },
    {
      title: "NIB",
      desc: "Nomor Induk Berusaha sebagai identitas pelaku usaha yang diterbitkan oleh OSS.",
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      file: nibDoc,
      delay: 0.2
    },
    {
      title: "NPWP Perusahaan",
      desc: "Nomor Pokok Wajib Pajak badan usaha terdaftar secara resmi.",
      icon: <FileText className="w-8 h-8 text-gold-500" />,
      file: npwpDoc,
      delay: 0.3
    },
    {
      title: "SK Kemenkumham",
      desc: "Surat Keputusan pengesahan badan usaha dari Kementerian Hukum dan HAM.",
      icon: <FileBadge className="w-8 h-8 text-gold-500" />,
      file: skDoc,
      delay: 0.4
    }
  ];

  return (
    <section id="legality" className="py-24 relative w-full bg-beige-200 border-y border-beige-200/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-maroon-900/20 w-16 sm:w-32" />
            <div className="w-2 h-2 rotate-45 bg-maroon-700" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-maroon-900 font-bold tracking-wider px-2 sm:px-4 uppercase">
              Legalitas & Kredibilitas
            </h2>
            <div className="w-2 h-2 rotate-45 bg-maroon-700" />
            <div className="h-px bg-maroon-900/20 w-16 sm:w-32" />
          </div>
          <p className="font-sans text-charcoal-800/80 max-w-2xl mx-auto text-sm sm:text-base">
            CV. Olahan Makanan LapanLapan adalah badan usaha yang resmi terdaftar pada negara. Kami berkomitmen memberikan kualitas dan keamanan terbaik untuk setiap mitra dan pelanggan kami.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: doc.delay, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedDoc(doc.file)}
            >
              <div className="bg-maroon-900/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-maroon-900/10 transition-colors">
                {doc.icon}
              </div>
              <h4 className="font-serif font-bold text-maroon-900 mb-2 text-lg">{doc.title}</h4>
              <p className="font-sans text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                {doc.desc}
              </p>
              
              <span 
                className="mt-auto inline-flex items-center gap-2 text-sm font-sans font-bold text-gold-600 group-hover:text-maroon-700 transition-colors"
              >
                Lihat Dokumen
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setSelectedDoc(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-5xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-sans font-bold text-base sm:text-lg text-charcoal-900 pr-2">Preview Dokumen</h3>
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* iframe body */}
              <div className="flex-1 w-full h-full bg-gray-100">
                <iframe 
                  src={`${selectedDoc}#view=FitH`} 
                  className="w-full h-full border-none"
                  title="PDF Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
