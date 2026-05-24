'use client'

import { motion } from 'framer-motion'
import GlowCard from '@/components/GlowCard'
import {
  FiFigma,
  FiCode,
  FiMonitor,
  FiGithub,
  FiUploadCloud,
  FiCpu,
  FiLayout,
  FiPenTool,
  FiUsers,
  FiStar,
  FiAward,
} from 'react-icons/fi'

const projects = [
  {
    title:
      'Pembuatan Design UI/UX PT Yakult Indonesia Persada program MOKLET TechXperience',
    icon: FiFigma,
  },
  {
    title:
      'Pembuatan Design UI/UX dari kecanggihan AI di aplikasi Lensara dalam kompetisi Idea Bisnis Plan (MIC) 2025',
    icon: FiPenTool,
  },
  {
    title: 'Mengembangkan pemrograman menggunakan Java',
    icon: FiCpu,
  },
  {
    title: 'Membangun website dengan HTML & CSS',
    icon: FiCode,
  },
  {
    title:
      'Mendesain antarmuka dengan Figma untuk UI/UX dan implementasi Front-End',
    icon: FiMonitor,
  },
  {
    title: 'Deploy project menggunakan Vercel',
    icon: FiUploadCloud,
  },
  {
    title: 'Mengelola version control dengan GitHub',
    icon: FiGithub,
  },
  {
    title:
      'Membangun website portfolio pribadi dengan React.js atau Next.js',
    icon: FiLayout,
  },
]

const experiences = [
  'Sie Dekorasi dan Perlengkapan Bulan Bahasa 2024',
  'Sie Acara MOVIBES 2025',
  'Sie Acara P4K 2025',
  'Wakil Ketua Pelaksana Hari Kartini 2025',
  'Sie Acara Moklet Exhibition 2025',
  'Sie Kreatif MPLS 2025',
  'Ketua Pelaksana Semarak Pitulasan 2025',
  'Anggota Sie 3 OSIS 2025 (Seksi Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara)',
  'Koordinator Sie 4 OSIS 2026 (Seksi Pembinaan Prestasi Akademik, Seni, dan Olahraga)',
  'Sie Dekorasi Bulan Bahasa 2026',
  'Sie Acara Hari Kartini 2026',
  'Koordinator Acara Diklat Junior PASKATEMA Angkatan 34 2026',
  'Sie Acara Diklat Media Moklet Angkatan 34 2026',
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            My <span className="text-emerald-400">Experience</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-emerald-400 mx-auto rounded-full mt-5"
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Perjalanan, proyek, pengalaman organisasi, dan keterampilan yang saya
            kembangkan dalam bidang teknologi dan kepemimpinan.
          </p>
        </div>

        {/* PROJECT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlowCard className="overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <FiAward size={24} className="text-emerald-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  PROJECT &{' '}
                  <span className="text-emerald-400">TUGAS PRAKTIK</span>
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Proyek akademik dan tugas praktik dalam bidang rekayasa perangkat lunak.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-5"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <project.icon size={20} />
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition">
                    {project.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        {/* WORK EXPERIENCE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pt-10"
        >
          <GlowCard className="overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <FiUsers size={24} className="text-emerald-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  WORK <span className="text-emerald-400">EXPERIENCE</span>
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Pengalaman organisasi dan kepemimpinan.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-5"
                >
                  <div className="mt-1">
                    <FiStar
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition">
                    {exp}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  )
}