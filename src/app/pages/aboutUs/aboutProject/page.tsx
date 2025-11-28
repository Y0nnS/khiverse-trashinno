'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Cpu, Leaf, Monitor, Plug, Recycle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function TentangProject() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);



  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: 'Sensor',
      desc: 'Menggunakan kombinasi beberapa sensor untuk mendeteksi berbagai jenis sampah secara presisi.',
      color: 'bg-blue-50'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-green-600" />,
      title: 'Otomatisasi AI',
      desc: 'Algoritma AI cerdas untuk mengklasifikasikan sampah dan mengarahkan ke tempat yang sesuai tanpa campur tangan manusia.',
      color: 'bg-purple-50'
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      title: 'Dashboard Monitoring',
      desc: 'Memungkinkan admin sekolah memantau statistik pemilahan sampah secara realtime melalui aplikasi web.',
      color: 'bg-red-50'
    },
  ];

  const steps = [
    {
      title: 'Pasang Perangkat',
      description: 'Dapatkan perangkat IoT Trashinno untuk memilah sampah secara otomatis di rumah atau bisnis Anda',
      icon: <Plug className="w-7 h-7" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Mulai Memilah',
      description: 'Biarkan sensor cerdas kami mengidentifikasi dan memilah sampah dengan akurasi tinggi',
      icon: <Recycle className="w-7 h-7" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Pantau Data',
      description: 'Akses laporan real-time melalui aplikasi untuk melihat pola dan volume sampah Anda',
      icon: <BarChart3 className="w-7 h-7" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Edukasi & Kontribusi',
      description: 'Dapatkan tips edukasi dan lihat dampak positif Anda terhadap lingkungan',
      icon: <Sparkles className="w-7 h-7" />,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const roadmap = [
    { date: 'Q1 2024', event: 'Riset dan Pengumpulan Data Kebiasaan Sampah di Sekolah', status: 'completed' },
    { date: 'Q2 2024', event: 'Desain Prototipe Alat Pemilah Sampah Otomatis', status: 'completed' },
    { date: 'Q3 2024', event: 'Pengembangan Hardware & Software AI', status: 'current' },
    { date: 'Q4 2024', event: 'Testing dan Implementasi Pilot di Sekolah', status: 'upcoming' },
    { date: 'Q1 2025', event: 'Evaluasi dan Penyempurnaan Fitur', status: 'upcoming' },
    { date: 'Q2 2025', event: 'Peluncuran Komersial dan Edukasi Massal', status: 'upcoming' },
  ];

  const faqs = [
    {
      question: 'Bagaimana alat ini membedakan jenis sampah?',
      answer: 'Alat kami menggunakan sensor optik, sensor berat, dan teknologi AI untuk mengenali material sampah seperti plastik, kertas, logam, dan organik secara akurat.',
    },
    {
      question: 'Apakah alat ini bisa digunakan di luar sekolah?',
      answer: 'Tentu saja! Alat ini dapat diterapkan di berbagai tempat umum seperti kantor, taman, atau area publik lain untuk mendukung pengelolaan sampah yang lebih baik.',
    },
    {
      question: 'Bagaimana cara perawatan alat ini?',
      answer: 'Perawatan cukup mudah, seperti membersihkan sensor secara rutin dan update perangkat lunak yang akan kami sediakan secara berkala melalui aplikasi pendamping.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section className="min-h-screen sm:min-h-[80vh] relative overflow-hidden flex items-center px-3 md:px-10 lg:px-40">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/aboutProject/aboutProject-bg.jpg')" }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Project</span> Trashinno
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Solusi cerdas pemilah sampah otomatis berbasis AI untuk menciptakan kebiasaan memilah yang mudah dan menyenangkan di lingkungan sekolah.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="problem-solution" className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-12 relative overflow-hidden" >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full filter blur-xl opacity-20"></div>

            <div className="text-center mb-10 relative z-10">
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Masalah Lingkungan
              </motion.span>
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
                Masalah Pengelolaan Sampah di Masyarakat
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 max-w-3xl text-sm sm:text-base mx-auto" >
                Minimnya kesadaran masyarakat dalam memilah sampah dan kurangnya infrastruktur yang memadai menyebabkan tingginya volume sampah yang berakhir di TPA tanpa melalui proses daur ulang.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  value: '81%',
                  label: 'Rumah Tangga Tidak Memilah Sampah',
                  icon: '🏠'
                },
                {
                  value: '93%',
                  label: 'Sampah Plastik Tidak Terdaur Ulang',
                  icon: '♻️'
                },
                {
                  value: '72%',
                  label: 'Wilayah Tanpa Bank Sampah',
                  icon: '🏢'
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200 hover:shadow-md transition-all relative overflow-hidden cursor-pointer">
                  <div className="absolute -bottom-4 -right-4 opacity-10">
                    <Leaf className="w-16 h-16 text-red-500 rotate-45" />
                  </div>
                  <p className="text-xl sm:text-4xl font-bold text-red-600 mb-2">{stat.value}</p>
                  <p className="text-gray-700 text-sm sm:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4 md:p-12 text-white relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500 rounded-full filter blur-xl opacity-20"></div>

                <div className="mb-6 relative z-10">
                  <motion.span
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4" >
                    Solusi
                  </motion.span>
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-4xl font-bold mb-4">
                    Alat Pemilah Sampah Otomatis
                  </motion.h2>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 text-green-100 text-sm sm:text-base relative z-10">
                  Alat kami menggabungkan teknologi sensor mutakhir dan AI untuk mengidentifikasi jenis sampah dengan akurasi tinggi. Dengan antarmuka yang ramah anak dan mekanisme otomatis, alat ini mendorong kebiasaan memilah yang mudah dan menyenangkan.
                </motion.p>
                <ul className="space-y-3 text-green-100 text-sm sm:text-base relative z-10">
                  {[
                    "Akurasi identifikasi sampah hingga 95%",
                    "Dashboard monitoring"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2">
                      <span className="mt-1">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 relative min-h-64 md:min-h-full">
                <Image
                  src="/images/aboutProject/project-item.png"
                  alt="Alat Pemilah Sampah Otomatis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Teknologi canggih yang membuat pemilahan sampah menjadi lebih mudah dan efektif
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`${feature.color} p-3 rounded-xl shadow-md border border-gray-200 hover:border-green-300 transition-all hover:shadow-md relative overflow-hidden`}>
                <div className="absolute -bottom-4 -right-4 opacity-10">
                  <Leaf className="w-16 h-16 text-green-500 rotate-45" />
                </div>

                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 mx-auto relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-md sm:text-xl font-semibold text-center text-gray-800 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center relative z-10">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center" >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mt-3">
              Cara Kerja Teknologi Trashinno
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-md sm:text-base max-w-2xl mx-auto mt-4">
              Kami menyediakan alat IoT cerdas untuk memudahkan pemilahan sampah, dilengkapi dengan edukasi berkelanjutan
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 opacity-10">
                  <Leaf className="w-16 h-16 text-green-500 rotate-45" />
                </div>

                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-5`}>
                  {step.icon}
                </div>
                <div className="text-gray-500 font-mono mb-2">0{index + 1}</div>
                <h3 className="text-md sm:text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" >
              Temukan jawaban atas pertanyaan yang sering diajukan tentang proyek kami
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden">
                <motion.div
                  className="group"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                  <div className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                      className="w-5 h-5 text-gray-500">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden">
                      <div className="text-sm sm:text-base px-6 pb-6 pt-2 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
