'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export default function GlowCard({
  children,
  className = '',
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className={`
        rounded-[28px]
        border
        border-white/5
        bg-[#0b0b0b]
        transition-all
        duration-300
        hover:border-emerald-500/20
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}