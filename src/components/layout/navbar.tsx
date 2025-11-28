"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  ChevronDown,
  Home,
  Info,
  Leaf,
  Lightbulb,
  Menu,
  MessageSquare,
  Recycle,
  Sparkles,
  Users,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bgColor = "bg-white/95 backdrop-blur-md";
  const textColor = "text-gray-800";
  const hoverColor = "hover:text-green-600";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const FloatingParticles = ({ count = 12 }: { count?: number }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-green-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <AnimatePresence>
        {!mobileOpen && (
          <motion.nav
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed pt-0 top-0 lg:left-1/2 lg:-translate-x-1/2 w-full z-50 ${bgColor} text-black shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"/>

              <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex justify-between items-center w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-24 h-8 lg:w-32 lg:h-10 mr-4">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain cursor-pointer drop-shadow-sm"
                        priority
                      />
                    </Link>
                    <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                  </motion.div>

                  <div
                    className={`hidden lg:flex items-center space-x-1 text-sm font-medium ml-6`}>
                    <motion.div whileHover={{ y: -2 }}>
                      <Link
                        href="/"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group ${hoverColor}`}>
                        <div className="relative">
                          <Home className="w-5 h-5 group-hover:scale-110 transition-transform text-green-600" />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                          Beranda
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} className="relative" ref={aboutRef}>
                      <button
                        onClick={() => setAboutOpen(!aboutOpen)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group cursor-pointer ${hoverColor}`}>
                        <div className="relative">
                          <Info className="w-5 h-5 group-hover:scale-110 transition-transform text-green-600" />
                          {aboutOpen && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                            />
                          )}
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                          Tentang
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {aboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute mt-2 left-0 bg-white shadow-xl rounded-xl py-2 text-sm z-50 min-w-[220px] overflow-hidden border border-gray-100">
                            <FloatingParticles count={8} />
                            <div className="relative z-10 bg-white/90">
                              <Link
                                href="/pages/aboutUs"
                                onClick={() => setAboutOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-black transition-colors group" >
                                <div className="p-1 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                                  <Info className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium">Tentang Kami</p>
                                  <p className="text-xs text-gray-500">Tentang Trashinno</p>
                                </div>
                              </Link>
                              <Link
                                href="/pages/aboutUs/aboutProject"
                                onClick={() => setAboutOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-black transition-colors group">
                                <div className="p-1 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                                  <Lightbulb className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium">Tentang Project</p>
                                  <p className="text-xs text-gray-500">Inovasi Kami</p>
                                </div>
                              </Link>
                              <Link
                                href="/pages/aboutUs/aboutTeam"
                                onClick={() => setAboutOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-black transition-colors group">
                                <div className="p-1 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                                  <Users className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium">Tentang Tim</p>
                                  <p className="text-xs text-gray-500">Anggota Kami</p>
                                </div>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {[
                      {
                        href: "/pages/ourProblem",
                        icon: BarChart2,
                        text: "Masalah",
                        subtext: "Analisis",
                      },
                      {
                        href: "/pages/ourSolution",
                        icon: Recycle,
                        text: "Solusi",
                        subtext: "Inovasi",
                      },
                      {
                        href: "/pages/contact",
                        icon: MessageSquare,
                        text: "Kontak",
                        subtext: "Hubungi",
                      },
                    ].map((item, index) => (
                      <motion.div key={index} whileHover={{ y: -2 }}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group ${hoverColor}`}>
                          <div className="relative">
                            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform text-green-600" />
                          </div>
                          <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                            {item.text}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none relative"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle Menu">
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <>
                      <Menu className="w-5 h-5" />
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                      />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 border-l border-gray-100">
            <div
              ref={aboutRef}
              className="h-full overflow-y-auto flex flex-col relative">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
                <div className="relative w-24 h-8">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain cursor-pointer"
                      priority
                    />
                  </Link>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-black transition-colors"
                  aria-label="Close Menu">
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="flex-1 flex flex-col p-4 space-y-2 text-sm sm:text-base bg-white/95">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-black transition-colors group">
                    <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                      <Home className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-medium">Beranda</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-gray-100 text-black transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                        <Info className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium">Tentang</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-green-600 transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </motion.div>

                {aboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col pl-16 space-y-1 overflow-hidden">
                    <Link
                      href="/pages/aboutUs"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 text-black transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Tentang Kami</span>
                    </Link>
                    <Link
                      href="/pages/aboutUs/aboutProject"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 text-black transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Tentang Project</span>
                    </Link>
                    <Link
                      href="/pages/aboutUs/aboutTeam"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2 rounded-lg hover:bg-gray-100 text-black transition-colors flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Tentang Tim</span>
                    </Link>
                  </motion.div>
                )}

                {[
                  {
                    href: "/pages/ourProblem",
                    icon: BarChart2,
                    text: "Masalah",
                    delay: 0.2,
                  },
                  {
                    href: "/pages/ourSolution",
                    icon: Recycle,
                    text: "Solusi",
                    delay: 0.25,
                  },
                  {
                    href: "/pages/contact",
                    icon: MessageSquare,
                    text: "Kontak",
                    delay: 0.3,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: item.delay }}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-black transition-colors group">
                      <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-4 text-center">
                  <div className="text-xs text-gray-400 flex items-center justify-center gap-2">
                    <Leaf className="w-3 h-3 text-green-400" />
                    <span>#StayWithTrashinno</span>
                    <Leaf className="w-3 h-3 text-green-400" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
