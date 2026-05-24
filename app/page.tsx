'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="w-full px-6 pt-24 pb-32">
        <div className="mx-auto max-w-7xl">

          {/* ========== HEADER ========== */}
          <div className="mb-12 text-center">  {/* ← DIKECILKAN dari mb-24 */}
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              HAI <span className="text-emerald-400">HALLO</span>
            </h1>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />

            {/* Text Tambahan */}
            <p className="mt-6 text-base text-gray-400 sm:text-lg">  {/* ← DIKECILKAN dari mt-8 */}
              Selamat datang di data diri saya
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">  {/* ← DIKECILKAN dari gap-20 */}

            {/* FOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 flex justify-center lg:order-none"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="relative h-72 w-72 overflow-hidden rounded-full border border-emerald-500/20 bg-white/5 shadow-[0_0_60px_rgba(16,185,129,0.15)] backdrop-blur-md sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]">
                  <Image
                    src="/profile1.png"
                    alt="Vincentius Ferrer"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >

              {/* Nama */}
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                  Vincentius Ferrer Pioraka
                </span>
              </h1>

              {/* Role */}
              <h2 className="mt-4 text-lg font-semibold text-emerald-400 sm:text-xl md:text-2xl">  {/* ← DIKECILKAN dari mt-6 */}
                Siswa Rekayasa Perangkat Lunak
              </h2>

              {/* Deskripsi */}
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">  {/* ← DIKECILKAN dari mt-8 */}
                Saya memiliki minat dalam pengembangan website modern,
                desain antarmuka yang interaktif, serta teknologi terbaru
                untuk menciptakan pengalaman digital yang menarik dan nyaman digunakan.
              </p>

              {/* Button */}
              <div className="mt-10 flex flex-wrap items-center gap-5">  {/* ← DIKECILKAN dari mt-12 */}
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <span>Jelajahi Portfolio</span>
                  <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg" />
                </Link>

                <Link
                  href="/biodata"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-500/30 bg-white/5 px-6 py-3 font-semibold text-emerald-400 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Lihat Biodata
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}