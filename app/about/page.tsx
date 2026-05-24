'use client'

import GlowCard from '@/components/GlowCard'
import { motion } from 'framer-motion'
import {
  FiBook,
  FiCamera,
  FiCode,
  FiLayout,
  FiMusic,
  FiTool,
} from 'react-icons/fi'

const hobbies = [
  {
    name: 'Bersepeda',
    icon: FiBook,
    description: 'Menjelajahi tempat baru dan menjaga kesehatan tubuh',
  },
  {
    name: 'Badminton',
    icon: FiMusic,
    description: 'Melatih fokus dan menjaga kebugaran tubuh',
  },
  {
    name: 'Fotografi',
    icon: FiCamera,
    description: 'Mengabadikan momen dan suasana menarik',
  },
  {
    name: 'Belajar Coding',
    icon: FiCode,
    description: 'Mengembangkan kemampuan programming setiap hari',
  },
]

const skills = [
  { name: 'HTML', level: 90, icon: FiCode },
  { name: 'CSS', level: 85, icon: FiLayout },
  { name: 'JavaScript', level: 80, icon: FiCode },
  { name: 'React JS', level: 75, icon: FiCode },
  { name: 'Next JS', level: 70, icon: FiCode },
  { name: 'GitHub', level: 75, icon: FiTool },
]

export default function AboutPage() {
  return (
    <div className="px-6 pb-32">
      <div className="mx-auto max-w-5xl">
        
        {/* ========== HEADER - ABOUT ME ========== */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            About <span className="text-emerald-400">Me</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
        </div>

        {/* ========== ABOUT - RATA KIRI ========== */}
        <div className="mb-24">
          <GlowCard className="rounded-2xl p-8 sm:p-12">
            <div className="text-left">
              <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Siapa Saya?</h2>
              <div className="space-y-5 text-gray-400">
                <p>Saya adalah seorang siswa <span className="font-semibold text-emerald-400">Rekayasa Perangkat Lunak</span> yang memiliki minat besar dalam pengembangan website modern.</p>
                <p>Saya senang membangun website dengan tampilan yang <span className="font-semibold text-emerald-400">minimalis, responsif,</span> dan nyaman digunakan.</p>
                <p>Selain coding, saya juga suka mempelajari teknologi baru dan terus meningkatkan kemampuan diri.</p>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* ========== HOBBIES - CENTER (4 KOTAK 1 BARIS) ========== */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Hobi & <span className="text-emerald-400">Minat</span></h2>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-500/50" />
          </div>
          {/* LANGSUNG 4 KOLOM, TIDAK 2 PER BARIS */}
          <div className="grid grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <GlowCard key={hobby.name} className="rounded-xl p-6 text-center sm:p-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <hobby.icon size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{hobby.name}</h3>
                  <p className="mt-4 text-sm text-gray-400">{hobby.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* ========== SKILLS - CENTER ========== */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Kemampuan <span className="text-emerald-400">Teknis</span></h2>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-500/50" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <GlowCard key={skill.name} className="rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 sm:h-14 sm:w-14">
                    <skill.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex justify-between sm:mb-3">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <span className="text-sm text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#1a1a1a] sm:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* ========== QUOTE - CENTER ========== */}
        <div>
          <GlowCard className="relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-8 sm:py-16">
            <div className="relative mx-auto max-w-2xl">
              <p className="text-lg italic text-gray-300 sm:text-xl">
                "Belajar dan berkembang setiap hari adalah langkah kecil menuju kesuksesan besar."
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-emerald-500/50" />
                <p className="text-xs font-medium tracking-[0.2em] text-emerald-400">VINCENTIUS FERRER</p>
                <div className="h-px w-8 bg-emerald-500/50" />
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  )
}