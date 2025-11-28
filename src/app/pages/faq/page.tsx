'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Leaf, Recycle, Trash2, Globe, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Apa tujuan utama website TrashInno?",
      answer: "TrashInno bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah yang benar. Kami menyediakan informasi edukatif tentang pemilahan, daur ulang, dan pengurangan sampah untuk menciptakan lingkungan yang lebih bersih dan sehat.",
      icon: <Leaf className="w-5 h-5 text-green-600" />
    },
    {
      question: "Bagaimana cara memulai memilah sampah di rumah?",
      answer: "Anda bisa memulai dengan 3 langkah sederhana: 1) Sediakan tempat sampah terpisah untuk organik dan anorganik, 2) Cuci kemasan plastik sebelum dibuang, 3) Pisahkan sampah elektronik dan B3 (bahan berbahaya dan beracun) untuk dibuang ke tempat khusus.",
      icon: <Recycle className="w-5 h-5 text-green-600" />
    },
    {
      question: "Apa perbedaan sampah organik dan anorganik?",
      answer: "Sampah organik berasal dari bahan alami yang bisa terurai (sisa makanan, daun, kayu). Sampah anorganik adalah bahan sintetis yang sulit terurai (plastik, kaca, logam). Sampah anorganik bisa didaur ulang, sedangkan organik bisa diolah menjadi kompos.",
      icon: <Trash2 className="w-5 h-5 text-green-600" />
    },
    {
      question: "Mengapa sampah plastik sangat berbahaya?",
      answer: "Plastik membutuhkan 20-500 tahun untuk terurai. Mikroplastik yang masuk ke tanah dan air dapat merusak ekosistem dan kesehatan manusia. Satu botol plastik yang didaur ulang dapat menghemat energi untuk menyalakan lampu 60-watt selama 6 jam.",
      icon: <Globe className="w-5 h-5 text-green-600" />
    },
    {
      question: "Bagaimana cara berkontribusi tanpa biaya?",
      answer: "Anda bisa: 1) Membagikan informasi dari website kami, 2) Mengajak tetangga untuk memilah sampah, 3) Menggunakan kembali kemasan sebelum dibuang, 4) Mengurangi penggunaan plastik sekali pakai, 5) Berpartisipasi dalam kegiatan bersih-bersih lingkungan.",
      icon: <HelpCircle className="w-5 h-5 text-green-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-4xl font-bold mb-6" >
              FAQ <span className="text-green-300">Trashinno</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-lg max-w-3xl mx-auto text-green-100" >
              Temukan jawaban atas pertanyaan umum tentang pengelolaan sampah dan lingkungan.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-green-50 hover:bg-green-100 transition"
                  onClick={() => toggleAccordion(index)}>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow">
                      {item.icon}
                    </div>
                    <h3 className="text-md sm:text-lg font-medium text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-green-600 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}/>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"  >
                  <div className="p-6 pt-5 text-gray-600">
                    <div className="pl-5 text-sm sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 bg-green-50 rounded-xl border border-green-200 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Masih ada pertanyaan?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Jika Anda memiliki pertanyaan lain tentang pengelolaan sampah atau ingin berkolaborasi dengan kami, jangan ragu untuk menghubungi tim TrashInno.
              </p>
              <motion.a
                href="/pages/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition shadow-sm hover:shadow-md text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Hubungi Kami
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
