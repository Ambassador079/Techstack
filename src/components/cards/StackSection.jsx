import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

const sectionIcons = {
  frontend: '⬡',
  backend: '⚙',
  database: '🗄',
  cloud: '☁',
  ai: '🧠',
  scaling: '📈',
}

export default function StackSection({ section, data, index = 0, appColor }) {
  if (section === 'scaling') {
    return (
      <motion.div
        variants={fadeUp}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-6"
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-lg">{sectionIcons[section]}</span>
          <h3 className="text-[13px] font-semibold text-white/60 uppercase tracking-wider">{data.label}</h3>
        </div>
        <p className="text-[14px] text-white/55 leading-7">{data.description}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-6"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-lg">{sectionIcons[section]}</span>
        <h3 className="text-[13px] font-semibold text-white/60 uppercase tracking-wider">{data.label}</h3>
      </div>
      <div className="flex flex-col gap-3">
        {data.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <div
              className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ background: appColor }}
            />
            <div>
              <span className="text-[13px] font-semibold text-white/80 font-mono">{item.name}</span>
              <span className="text-[12px] text-white/35 ml-2">— {item.note}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
