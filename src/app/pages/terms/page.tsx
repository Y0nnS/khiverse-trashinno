'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Gavel, ShieldAlert, AlertCircle, Copyright, ClipboardCopy } from 'lucide-react';

export default function TermsOfService() {
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
              className="ext-xl sm:text-4xl font-bold mb-2">
              Ketentuan <span className="text-green-300">Penggunaan</span> Website
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-lg max-w-3xl mx-auto text-green-100">
              Syarat penggunaan website edukasi pengelolaan sampah TrashInno.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-green prose-lg">
            <motion.div
              whileHover={{ x: 5 }}
              className="mb-12 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-green-700 flex items-center gap-2">
                <Gavel className="w-5 h-5" /> Efektif sejak : 1 Juni 2024
              </h3>
              <p className="text-gray-600">
                Dengan mengakses website ini, Anda menyetujui syarat dan ketentuan berikut.
              </p>
            </motion.div>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-3 h-3  bg-green-500 rounded-full"></span>
              1. Penggunaan Konten
            </h2>
            <p className="text-sm sm:text-base">
              Website ini merupakan situs edukasi statis tentang pentingnya pengelolaan sampah :
            </p>
            <ul className="space-y-3 pt-2 text-sm sm:text-base">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <ClipboardCopy className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ditujukan untuk tujuan edukasi dan informasi semata</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <ClipboardCopy className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Tidak memerlukan pembuatan akun atau login</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <ClipboardCopy className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Tidak mengumpulkan data pribadi pengguna</span>
              </motion.li>
            </ul>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              2. Hak Kekayaan Intelektual
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <Copyright className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-700">Konten Website</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Seluruh konten (teks, gambar, desain) dilindungi hak cipta. Dilarang menyalin, memodifikasi, atau mendistribusikan tanpa izin tertulis.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldAlert className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-700">Konsep dan Ide</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ide, konsep, dan solusi yang ditampilkan merupakan properti intelektual TrashInno. Plagiarisme konsep akan ditindak sesuai hukum.
                </p>
              </motion.div>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              3. Larangan Penggunaan
            </h2>
            <p className="text-sm sm:text-base">
              Anda dilarang :
            </p>
            <ul className="space-y-3 mb-8">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Menggunakan konten untuk tujuan komersial tanpa izin</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2" >
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Mengklaim konten atau ide sebagai milik sendiri</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Membuat turunan karya berdasarkan konsep kami</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Menyebarkan konten dengan cara yang merusak reputasi kami</span>
              </motion.li>
            </ul>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              4. Sanksi Pelanggaran
            </h2>
            <p className="text-sm sm:text-base">
              Pelanggaran terhadap ketentuan hak cipta akan dikenakan :
            </p>
            <ul className="space-y-3 pt-2 text-sm sm:text-base">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Tindakan hukum sesuai UU Hak Cipta No. 28 Tahun 2014</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Gugatan ganti rugi material dan immaterial</span>
              </motion.li>
            </ul>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              5. Izin Penggunaan
            </h2>
            <p className="text-sm sm:text-base">
              Untuk menggunakan konten kami secara legal, silakan ajukan permohonan izin tertulis melalui kontak yang tersedia. Penggunaan untuk tujuan edukasi non-komersial dapat dipertimbangkan dengan menyertakan credit yang jelas.
            </p>

            <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Ingin Menggunakan Konten Kami?</h3>
              <p className="mb-4 text-gray-600 text-sm sm:text-base">
                Untuk permohonan izin penggunaan konten atau pertanyaan lain :
              </p>
              <Link
                href="/pages/contact"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm sm:text-base">
                Hubungi Tim Kami <FileText className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
