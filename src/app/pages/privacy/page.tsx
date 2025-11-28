'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Lock, Database, EyeOff } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
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
              Privasi Anda <span className="text-green-300">Penting</span> Bagi Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-lg max-w-3xl mx-auto text-green-100">
              Kami berkomitmen melindungi data pribadi Anda dengan standar keamanan tertinggi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
                <Lock className="w-5 h-5" /> Versi Terakhir : 1 Juni 2024
              </h3>
              <p className="text-gray-600 text-sm sm:text-base pt-2">
                Kebijakan privasi ini menjelaskan bagaimana TrashInno mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
              </p>
            </motion.div>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-sm sm:text-base">
              Kami tidak dapat mengumpulkan informasi apapun dari user yang memasuki website.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
