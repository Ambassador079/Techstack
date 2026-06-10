import { motion } from 'framer-motion'
import { HiSearch } from 'react-icons/hi'

export default function EmptyState({ query }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4 py-24 text-center"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
        <HiSearch size={22} className="text-white/20" />
      </div>
      <div>
        <p className="text-[15px] font-semibold text-white/50">No results for "{query}"</p>
        <p className="text-[13px] text-white/30 mt-1">Try searching for an app name or technology</p>
      </div>
    </motion.div>
  )
}
