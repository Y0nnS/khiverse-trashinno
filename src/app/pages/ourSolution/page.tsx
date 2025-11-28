'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { AlertTriangle, Battery, ChevronDown, ChevronRight, Cpu, Globe, HardHat, Leaf, Lightbulb, Recycle, Sparkles, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SolusiKami() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);



  const InteractiveCard = ({ icon, title, desc, examples, color, index }: any) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`p-5 rounded-xl shadow-md border-t-4 ${color.split(' ')[0]} border-opacity-80 relative overflow-hidden`}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -bottom-4 -right-4 opacity-20">
              <Leaf className="w-16 h-16 text-green-500 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-3 mb-3 relative z-10">
          <div>
            {icon}
          </div>
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        </div>
        <p className="text-sm mb-2 text-gray-600 relative z-10">{desc}</p>
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
            boxShadow: isHovered ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'}}
          className="text-xs p-2 bg-white rounded-lg text-gray-600 relative z-10">
          <span className="font-semibold">Contoh:</span> {examples}
        </motion.div>
      </motion.div>
    );
  };

  const AnimatedStep = ({ step, title, desc, actions, icon, index }: any) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, type: 'spring' }}
        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 flex flex-col md:flex-row gap-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}>
        <div className="flex-shrink-0 flex items-start">
          <motion.div
            animate={{ rotate: expanded ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
            {step}
          </motion.div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2 text-green-600">
            {icon}
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{desc}</p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-3">
                  {actions.map((action: string, j: number) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 + 0.2 }}
                      className="flex items-start">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: j * 0.1 }}
                        className="text-green-500 mr-2 mt-1">
                        •
                      </motion.span>
                      <span className="text-gray-700">{action}</span>
                    </motion.div>))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="mt-4 text-green-500 flex items-center gap-1 text-sm">
            {expanded ? 'Sembunyikan' : 'Lihat detail'} <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F8FF] overflow-x-hidden">
      <section
        className="min-h-screen sm:min-h-[80vh] relative flex items-center justify-start px-3 sm:px-6 md:px-16 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/solusiIMG/solusi.png')" }} >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-400'>Solusi</span> Kami
            </h1>
            <p className="text-sm sm:text-lg text-zinc-100 leading-relaxed">
              Solusi holistik dari pemilahan hingga pengolahan akhir. Teknologi kami adalah alat bantu untuk mewujudkan pengelolaan sampah yang lebih efisien dan berkelanjutan.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-3 sm:px-6 py-16 relative">
        <div className="absolute -top-10 left-0 w-32 h-32 bg-green-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
            Langkah Pertama
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kenali Jenis-Jenis Sampah
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Pemilahan yang tepat dimulai dari memahami kategori sampah. Berikut 5 jenis utama yang perlu dipisahkan:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-green-600" />,
              title: "Organik",
              desc: "Sampah alami yang bisa terurai",
              examples: "Sisa makanan, daun, sayuran busuk",
              color: "bg-green-100 text-green-800"
            },
            {
              icon: <Recycle className="w-8 h-8 text-blue-600" />,
              title: "Anorganik",
              desc: "Bahan buatan manusia",
              examples: "Plastik, kertas, kaca, logam",
              color: "bg-blue-100 text-blue-800"
            },
            {
              icon: <Battery className="w-8 h-8 text-red-600" />,
              title: "B3",
              desc: "Mengandung zat beracun",
              examples: "Baterai, elektronik, obat kadaluarsa",
              color: "bg-red-100 text-red-800"
            },
            {
              icon: <HardHat className="w-8 h-8 text-yellow-600" />,
              title: "Konstruksi",
              desc: "Sisa bahan bangunan",
              examples: "Kayu, batu bata, keramik",
              color: "bg-yellow-100 text-yellow-800"
            },
            {
              icon: <AlertTriangle className="w-8 h-8 text-purple-600" />,
              title: "Khusus/Medis",
              desc: "Membutuhkan penanganan khusus",
              examples: "Jarum suntik, limbah medis",
              color: "bg-purple-100 text-purple-800"
            }
          ].map((item, i) => (
            <InteractiveCard key={i} index={i} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-300 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-300 rounded-full filter blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
              Panduan Lengkap
            </motion.span>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              5 Langkah Pengelolaan Sampah Berkelanjutan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Sistem hierarki pengelolaan sampah modern yang dapat diterapkan di rumah tangga
            </motion.p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto relative">
            <div className="absolute -left-16 top-0 bottom-0 w-1 bg-green-200/50 rounded-full hidden md:block"></div>

            {[
              {
                step: "1",
                title: "Pengurangan (Reduce)",
                desc: "Minimalkan produksi sampah dari sumbernya",
                actions: [
                  "Gunakan produk dengan kemasan minimal",
                  "Bawa tas belanja reusable",
                  "Pilih produk isi ulang",
                  "Hindari produk sekali pakai"
                ],
                icon: <Trash2 className="w-6 h-6" />
              },
              {
                step: "2",
                title: "Pemilahan (Segregate)",
                desc: "Pisahkan sampah berdasarkan jenisnya",
                actions: [
                  "Sediakan tempat sampah terpisah",
                  "Cuci kemasan sebelum dibuang",
                  "Labeli tempat sampah dengan jelas",
                  "Pisahkan bahan berbahaya"
                ],
                icon: <Recycle className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Penggunaan Kembali (Reuse)",
                desc: "Manfaatkan kembali sebelum dibuang",
                actions: [
                  "Gunakan wadah bekas untuk penyimpanan",
                  "Donasikan barang yang masih layak",
                  "Kreatif dengan upcycling",
                  "Reparasi barang rusak"
                ],
                icon: <Recycle className="w-6 h-6" />
              },
              {
                step: "4",
                title: "Daur Ulang (Recycle)",
                desc: "Proses material menjadi produk baru",
                actions: [
                  "Kumpulkan bahan daur ulang terpisah",
                  "Manfaatkan bank sampah",
                  "Kompos sampah organik",
                  "Ketahui simbol daur ulang"
                ],
                icon: <Recycle className="w-6 h-6" />
              },
              {
                step: "5",
                title: "Pengolahan Akhir (Recovery)",
                desc: "Ekstraksi nilai dari residu sampah",
                actions: [
                  "Manfaatkan sampah untuk energi",
                  "Pengolahan menjadi bahan baku",
                  "Teknologi waste-to-energy",
                  "Landfill yang terkontrol"
                ],
                icon: <Cpu className="w-6 h-6" />
              }
            ].map((item, i) => (
              <AnimatedStep key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-green-100 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Panduan Praktis untuk Rumah Tangga
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Langkah-langkah konkret yang bisa langsung diterapkan di rumah Anda
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sistem Pemilahan Sederhana</h3>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-green-50 p-4 rounded-lg border border-green-200 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-20">
                  <Leaf className="w-16 h-16 text-green-500 rotate-45" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 p-1 rounded-full">
                    <Globe className="w-4 h-4" />
                  </span>
                  Lokasi:
                </h4>
                <p className="text-green-700">Dapur (utama), Kamar Mandi, Ruang Kerja</p>
              </motion.div>

              <div className="space-y-4">
                {[
                  "Siapkan 3 tempat sampah: Organik, Anorganik, B3",
                  "Gunakan wadah berbeda warna untuk memudahkan",
                  "Tempat sampah organik harus memiliki tutup rapat",
                  "Sediakan tempat kecil untuk sampah elektronik/baterai"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-start">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      {i + 1}
                    </motion.div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Leaf className="w-24 h-24 text-green-500 rotate-45" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="bg-green-100 text-green-800 p-1 rounded-full">
                  <Sparkles className="w-4 h-4" />
                </span>
                Contoh Implementasi:
              </h4>
              <div className="space-y-4">
                {[
                  "Dapur: Wadah besar untuk organik, sedang untuk anorganik",
                  "Kamar mandi: Wadah kecil untuk kemasan kosmetik",
                  "Ruang kerja: Kotak khusus untuk kertas bekas",
                  "Garasi: Tempat khusus untuk limbah elektronik"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-start">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-green-500 mr-2 mt-1">
                      ✓
                    </motion.span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200 relative z-10">
                <h4 className="font-semibold text-blue-800 mb-1 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  Tips:
                </h4>
                <p className="text-blue-700">Mulai dengan 2 kategori utama (organik/anorganik) jika terasa berat, lalu tambah secara bertahap</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-1">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-green-600 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 opacity-20">
                  <Leaf className="w-24 h-24 text-white rotate-45" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kompos Rumahan</h3>
                <p className="mb-4">Mengubah sampah organik menjadi pupuk alami</p>

                <div className="space-y-3">
                  {[
                    "Siapkan wadah komposter atau lubang tanah",
                    "Campur sampah hijau (sayuran) dan coklat (daun kering)",
                    "Aduk secara berkala",
                    "Panen setelah 2-3 bulan"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="flex items-start">
                      <span className="text-green-200 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="order-1 md:order-2 space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pengolahan Sampah Organik</h3>
              <p className="text-gray-600">40% sampah rumah tangga adalah organik yang bisa diolah menjadi kompos atau pakan ternak</p>

              <div className="space-y-4">
                {[
                  "Pisahkan sisa makanan dari kemasannya",
                  "Cacah bahan organik untuk percepat penguraian",
                  "Hindari daging dan produk susu dalam kompos sederhana",
                  "Manfaatkan cacing tanah (vermicompost) untuk hasil lebih baik"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-start">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      {i + 1}
                    </motion.div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-green-300 rounded-full filter blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
              Peran Teknologi Kami
            </motion.span>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bagaimana Trashinno Mendukung Pengelolaan Sampah?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Kami merancang innovasi baru untuk melengkapi dan meningkatkan sistem pengelolaan sampah yang sudah ada
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-green-600 rounded-xl p-8 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-700 rounded-full filter blur-xl opacity-20"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-500 rounded-full filter blur-xl opacity-20"></div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-2xl font-bold mb-4 relative z-10">
              Mulai Perjalanan Pengelolaan Sampah Anda
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base mb-6 max-w-2xl mx-auto relative z-10">
              Dengan menerapkan langkah-langkah di atas dan memanfaatkan teknologi kami, Anda bisa mengurangi hingga 70% sampah yang berakhir di TPA.
            </motion.p>
            <div className='flex flex-wrap gap-4 pt-4 items-center justify-center relative z-10'>
              <Link
                href="/pages/aboutUs/aboutProject"
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full text-sm sm:text-base transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>
                  Pelajari Lebih Lanjut
                </span>
                <div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
