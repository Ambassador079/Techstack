import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { scaleIn } from "../../animations/variants";

export default function AppCard({ app, index = 0 }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={`/app/${app.id}`}
        className="group relative flex flex-col h-full rounded-2xl border border-white/[0.06] bg-[#0d0d0d] hover:border-[#39ff14]/20 hover:bg-[#0f0f0f] transition-all duration-300 overflow-hidden"
      >
        {/* Top color strip */}
        <div
          className="h-[3px] w-full transition-all duration-300 group-hover:h-[4px]"
          style={{
            background: `linear-gradient(to right, ${app.color}, transparent)`,
          }}
        />

        <div className="p-6 flex flex-col gap-4 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                // className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl border border-white/[0.06] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.08)]"
                style={{ background: `${app.color}15` }}
              >
                <img
                  src={app.logo}
                  alt={app.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors">
                  {app.name}
                </h3>
                <span className="text-[11px] text-white/30 font-medium">
                  {app.category}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-white/20 font-mono">
              {app.founded}
            </span>
          </div>

          {/* Description */}
          <p className="text-[13px] text-white/45 leading-relaxed line-clamp-2 flex-1">
            {app.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {app.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="tag-pill border-white/[0.07] text-white/40 bg-white/[0.03] font-mono"
              >
                {tag}
              </span>
            ))}
            {app.tags.length > 4 && (
              <span className="tag-pill border-white/[0.07] text-white/25 bg-transparent">
                +{app.tags.length - 4}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
            <span className="text-[12px] text-white/30">
              <span className="text-white/60 font-semibold">{app.users}</span>{" "}
              users
            </span>
            <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#39ff14]/60 group-hover:text-[#39ff14] transition-colors">
              View Stack
              <HiArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
