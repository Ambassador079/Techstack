import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center"
    >
      <div className="text-[80px] font-bold text-white/[0.04]">404</div>
      <div className="-mt-12">
        <h1 className="text-2xl font-bold text-white/70 mb-2">Page not found</h1>
        <p className="text-[14px] text-white/35">The stack you're looking for doesn't exist.</p>
      </div>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl bg-[#39ff14] text-black text-[13px] font-bold hover:shadow-[0_0_20px_rgba(57,255,20,0.25)] transition-all"
      >
        Back to Home
      </Link>
    </motion.div>
  )
}
