'use client'

import { motion } from 'framer-motion'
import GlowCard from '@/components/GlowCard'
import { 
  FiMapPin, 
  FiMail, 
  FiCalendar, 
  FiBook, 
  FiAward, 
  FiUser, 
  FiBriefcase,
  FiPhone,
  FiGlobe,
  FiCheckCircle
} from 'react-icons/fi'

const personalInfo = [
  { label: 'Nama Lengkap', value: 'Vincentius Ferrer Pioraka', icon: FiUser },
  { label: 'Nama Panggilan', value: 'Vincent', icon: FiUser },
  { label: 'Tempat & Tanggal Lahir', value: 'Malang, 16 April 2008', icon: FiCalendar },
  { label: 'Alamat', value: 'Dusun Pangganglele, Arjowilangun, Kecamatan Kalipare', icon: FiMapPin },
  { label: 'No. Telepon', value: '+62 098 0236 7890', icon: FiPhone },
  { label: 'Email', value: 'vincent@gmail.comat.camit', icon: FiMail },
  { label: 'Sekolah', value: 'SMK Telkom Malang', icon: FiBook },
  { label: 'Jurusan', value: 'Rekayasa Perangkat Lunak (RPL)', icon: FiBriefcase },
  { label: 'Website', value: 'vincentius.vercel.app', icon: FiGlobe },
]

const educationHistory = [
  { 
    year: '2011 - 2013', 
    school: 'TK PGRI 02 Kalipare', 
    degree: 'Taman Kanak-Kanak',
    description: 'Mengenal dasar-dasar pendidikan, belajar bersosialisasi, dan pengembangan karakter awal',
    icon: FiAward,
    status: 'completed'
  },
  { 
    year: '2013 - 2019', 
    school: 'SD Kristen Elim Malang', 
    degree: 'Sekolah Dasar',
    description: 'Mempelajari mata pelajaran dasar seperti Matematika, Bahasa Indonesia, IPA, dan IPS',
    icon: FiAward,
    status: 'completed'
  },
  { 
    year: '2019 - 2022', 
    school: 'SMPK St. Antonius Kalipare', 
    degree: 'Sekolah Menengah Pertama',
    description: 'Pendidikan lanjutan dengan pembelajaran yang lebih mendalam dan persiapan ke jenjang berikutnya',
    icon: FiAward,
    status: 'completed'
  },
  { 
    year: '2025 - Sekarang', 
    school: 'SMK Telkom Malang', 
    degree: 'Rekayasa Perangkat Lunak (RPL)',
    description: 'Mempelajari pengembangan web, mobile apps, pemrograman, dan project-based learning',
    icon: FiAward,
    status: 'current'
  },
]

export default function BiodataPage() {
  return (
    <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              Personal <span className="text-emerald-400">Biodata</span>
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
          </motion.div>
        </div>

        {/* PERSONAL INFO GRID */}
        <div className="mb-28 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personalInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <GlowCard className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                      {info.label}
                    </p>
                    <p className="text-base font-semibold text-gray-200">
                      {info.value}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Riwayat <span className="text-emerald-400">Pendidikan</span>
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <p className="mt-4 text-sm text-gray-500">
              Perjalanan pendidikan dari masa kecil hingga sekarang
            </p>
          </motion.div>

          {/* TIMELINE CONTAINER */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 md:left-1/2 md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {educationHistory.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start gap-4 md:gap-8`}
                >
                  <div className="absolute left-[11px] z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center md:relative md:left-auto md:top-auto md:mx-auto md:-translate-x-0">
                    <div className={`h-4 w-4 rounded-full ${
                      edu.status === 'current' 
                        ? 'bg-emerald-400 ring-4 ring-emerald-400/30 animate-pulse' 
                        : 'bg-emerald-500 ring-4 ring-emerald-500/20'
                    }`} />
                  </div>

                  <div className={`ml-8 w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                  }`}>
                    <GlowCard className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                      edu.status === 'current' 
                        ? 'border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.2)]' 
                        : ''
                    }`}>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
                        <span className="text-xs font-medium text-emerald-400">
                          {edu.year}
                        </span>
                        {edu.status === 'current' && (
                          <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                            <FiCheckCircle size={12} />
                            Aktif
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {edu.school}
                      </h3>
                      
                      <p className="mt-1 text-sm font-medium text-emerald-400">
                        {edu.degree}
                      </p>
                      
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {edu.description}
                      </p>

                      <div className="mt-4 h-px w-12 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    </GlowCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* LOCATION MAP - PINDAH KE MALANG */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Lokasi <span className="text-emerald-400">Tinggal</span>
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <p className="mt-4 text-sm text-gray-500">
              Malang, Jawa Timur - Tempat tinggal dan aktivitas sehari-hari
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <GlowCard className="overflow-hidden rounded-2xl p-0">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.2351701653!2d112.56189465!3d-7.9829739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788c3c7dc22be3%3A0x5b6bc5f5ffb00779!2sMalang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Peta Lokasi Malang"
                />
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}