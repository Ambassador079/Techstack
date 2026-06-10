import { motion } from 'framer-motion'
import { categories } from '../../data/apps'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <motion.button
          key={cat}
          onClick={() => onChange(cat)}
          whileTap={{ scale: 0.96 }}
          className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200 ${
            active === cat
              ? 'bg-[#39ff14] text-black shadow-[0_0_16px_rgba(57,255,20,0.25)]'
              : 'border border-white/[0.08] text-white/45 hover:text-white/70 hover:border-white/20 bg-white/[0.02]'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  )
}
