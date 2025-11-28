'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Cpu, Globe, Leaf, Recycle, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TentangKami() {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);
  const [showTeamDetails, setShowTeamDetails] = useState(false);





  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section className="min-h-screen sm:min-h-[80vh] relative overflow-hidden flex items-center px-3 md:px-10 lg:px-40">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/tentangKita/tentangkita-bg.jpg')" }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Tentang</span> Trashinno
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Kami adalah <span className="font-bold text-white">tim inovator</span> yang berkomitmen mengubah pengelolaan sampah melalui teknologi dan edukasi, menciptakan dampak positif bagi lingkungan dan masyarakat.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="our-mission" className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        <div className="absolute -top-10 left-0 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Tentang Trashinno
            </span>
            <h2 className="text-lg sm:text-4xl font-bold text-gray-900 mb-4">
              Membangun Kebiasaan Memilah Sampah Lewat Teknologi
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
              Trashinno menghadirkan solusi berbasis teknologi untuk meningkatkan kesadaran masyarakat tentang pentingnya memilah sampah dan menciptakan ekosistem daur ulang yang berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 md:p-12 text-white mb-20 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full filter blur-xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-green-400 rounded-full filter blur-xl opacity-20"></div>

            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-logo1.jpg"
                    alt="Tim Trashinno"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-3">
                  <div>
                    <Users className="w-8 h-8" />
                  </div>
                  <span>Kami Bangun Inovasi, Bukan Sekadar Alat</span>
                </h3>
                <p className="text-green-100 text-sm sm:text-base">
                  Tim kami terdiri dari anak muda kreatif yang percaya bahwa inovasi teknologi bisa menjadi solusi krisis lingkungan. Kami menggabungkan IoT, edukasi digital, dan pendekatan komunitas untuk menciptakan perubahan nyata.
                </p>

                <div className="pt-4">
                  <Link href="/pages/ourSolution">
                    <button className="flex items-center gap-2 bg-white text-green-700 text-sm sm:text-base px-6 py-3 rounded-lg shadow hover:bg-green-50 transition-colors">
                      Lihat Solusi Kami
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 cursor-pointer" >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg sm:text-4xl font-bold text-gray-900 text-center mb-4">
              Solusi Komprehensif Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto text-center mb-12">
              Kami menghadirkan inovasi teknologi yang terintegrasi untuk memudahkan pengelolaan sampah dan meningkatkan kesadaran masyarakat akan pentingnya lingkungan bersih.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8 text-green-600" />,
                  title: 'Smart IoT Bin',
                  desc: 'Tempat sampah pintar dengan sensor canggih yang bisa memilah otomatis dan memonitor kapasitas.',
                  features: [
                    "Sensor pendeteksi sampah",
                    "Pemilahan otomatis",
                    "Notifikasi ketika penuh",
                    "Integrasi dengan aplikasi"
                  ],
                  color: 'bg-green-50'
                },
                {
                  icon: <Globe className="w-8 h-8 text-green-600" />,
                  title: 'Platform Digital',
                  desc: 'Website edukasi interaktif dengan panduan lengkap pengelolaan sampah dan daur ulang.',
                  features: [
                    "Panduan pemilahan sampah",
                    "Statistik tempat sampah",
                  ],
                  color: 'bg-blue-50'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -3 }}
                  className={`${item.color} p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden`}
                  onClick={() => setExpandedSolution(expandedSolution === i ? null : i)}>
                  <div className="absolute -bottom-4 -right-4 opacity-10">
                    <Leaf className="w-16 h-16 text-green-500 rotate-45" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedSolution === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden" >
                        <div className="mt-4 space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">Fitur Utama :</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, j) => (
                              <li
                                key={j}
                                className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    animate={{ rotate: expandedSolution === i ? 0 : 0 }}
                    className="mt-4 text-green-600 text-sm flex items-center gap-1">
                    {expandedSolution === i ? 'Sembunyikan' : 'Lihat'} fitur
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 cursor-pointer">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
              Dampak Positif Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto text-center mb-12">
              Melalui solusi yang kami tawarkan, Trashinno berkomitmen memberikan dampak nyata di berbagai aspek kehidupan untuk masa depan yang lebih berkelanjutan.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Lingkungan',
                  desc: 'Pengurangan sampah ke TPA dan emisi karbon',
                  img: '/images/tentangKita/lingkungan.png',
                  icon: <Leaf className="w-6 h-6 text-green-600" />,
                },
                {
                  title: 'Ekonomi',
                  desc: 'Peningkatan nilai ekonomi dari daur ulang',
                  img: '/images/tentangKita/ekonomi.jpg',
                  icon: <Recycle className="w-6 h-6 text-green-600" />,
                },
                {
                  title: 'Sosial',
                  desc: 'Pemberdayaan masyarakat melalui program edukasi',
                  img: '/images/tentangKita/social.jpg',
                  icon: <Users className="w-6 h-6 text-green-600" />,
                },
                {
                  title: 'Kesehatan',
                  desc: 'Lingkungan yang lebih bersih dan sehat',
                  img: '/images/tentangKita/kesehatan.jpg',
                  icon: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h3 className="text-md sm:text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-green-100 text-sm mb-2">{item.desc}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-green-600 text-white px-2 py-1 rounded-full self-start">
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Mari Bersama Menciptakan Perubahan!</h2>
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto mb-8">
              Bergabunglah dengan gerakan kami untuk lingkungan yang lebih bersih dan berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center z-9999">
              <Link href="/pages/contact">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-sm sm:text-base shadow transition-colors flex items-center gap-2">
                  Hubungi Kami
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/pages/ourSolution">
                <button className="bg-white hover:bg-gray-50 text-green-700 px-8 py-3 rounded-full text-sm sm:text-base shadow border border-gray-200 transition-colors flex items-center gap-2">
                  Pelajari Solusi
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
