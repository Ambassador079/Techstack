import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiExternalLink } from "react-icons/hi";
import { apps } from "../data/apps";
import StackSection from "../components/cards/StackSection";
import { fadeUp, pageTransition } from "../animations/variants";

const sectionOrder = [
  "frontend",
  "backend",
  "database",
  "cloud",
  "ai",
  "scaling",
];

export default function AppDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = apps.find((a) => a.id === id);
  const currentIndex = apps.findIndex((a) => a.id === id);
  const prevApp = apps[currentIndex - 1];
  const nextApp = apps[currentIndex + 1];

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-white/40 text-[15px]">App not found</p>
        <Link
          to="/explore"
          className="text-[#39ff14] text-[13px] hover:underline"
        >
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <motion.div {...pageTransition}>
      {/* Hero banner */}
      <div
        className="relative pt-20 pb-0 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${app.color}12 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.08] blur-[100px] rounded-full"
            style={{ background: app.color }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          {/* Back */}
          <motion.button
            onClick={() => navigate(-1)}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors mb-8 group"
          >
            <HiArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back
          </motion.button>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex flex-col md:flex-row md:items-center gap-6 mb-8"
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl border border-white/[0.08] flex-shrink-0"
              style={{ background: `${app.color}15` }}
            >
              <img
                src={app.logo}
                alt={app.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {app.name}
                </h1>
                <span className="hidden md:inline-flex tag-pill border-white/[0.08] text-white/35 bg-white/[0.03] font-mono text-[11px]">
                  {app.category}
                </span>
              </div>
              <p className="text-[15px] text-white/40">{app.tagline}</p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[15px] text-white/50 max-w-2xl leading-7 mb-8"
          >
            {app.description}
          </motion.p>

          {/* Meta stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-6"
          >
            <div>
              <div className="text-[12px] text-white/25 mb-0.5">
                Active Users
              </div>
              <div
                className="text-[20px] font-bold"
                style={{ color: app.color }}
              >
                {app.users}
              </div>
            </div>
            <div>
              <div className="text-[12px] text-white/25 mb-0.5">Founded</div>
              <div className="text-[20px] font-bold text-white/80">
                {app.founded}
              </div>
            </div>
            <div>
              <div className="text-[12px] text-white/25 mb-0.5">Tech Tags</div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {app.tags.map((t) => (
                  <span
                    key={t}
                    className="tag-pill border-white/[0.08] text-white/35 bg-white/[0.02] font-mono text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Color bar */}
        <div
          className="h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${app.color}40, transparent)`,
          }}
        />
      </div>

      {/* Stack sections grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="section-label">Full Tech Stack</span>
          <h2 className="text-3xl font-bold tracking-tight">
            What {app.name} runs on
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {sectionOrder
            .slice(0, 5)
            .map(
              (key, i) =>
                app.stack[key] && (
                  <StackSection
                    key={key}
                    section={key}
                    data={app.stack[key]}
                    index={i}
                    appColor={app.color}
                  />
                ),
            )}
        </div>

        {/* Scaling — full width */}
        {app.stack.scaling && (
          <StackSection
            section="scaling"
            data={app.stack.scaling}
            index={5}
            appColor={app.color}
          />
        )}

        {/* Compare CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-[#0d0d0d] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-[14px] font-semibold text-white/70 mb-1">
              Want to see how {app.name} compares?
            </h3>
            <p className="text-[13px] text-white/35">
              Compare it side-by-side with another app.
            </p>
          </div>
          <Link
            to={`/compare?a=${app.id}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#39ff14]/[0.08] border border-[#39ff14]/20 text-[#39ff14] text-[13px] font-semibold hover:bg-[#39ff14]/[0.12] transition-all flex-shrink-0"
          >
            Compare {app.name}
            <HiArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Prev / Next */}
        <div className="mt-12 flex items-center justify-between gap-4">
          {prevApp ? (
            <Link
              to={`/app/${prevApp.id}`}
              className="flex items-center gap-3 group text-white/40 hover:text-white/70 transition-colors"
            >
              <HiArrowLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              <div>
                <div className="text-[11px] text-white/20 mb-0.5">Previous</div>
                <div className="text-[13px] font-semibold">{prevApp.name}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextApp ? (
            <Link
              to={`/app/${nextApp.id}`}
              className="flex items-center gap-3 group text-white/40 hover:text-white/70 transition-colors text-right"
            >
              <div>
                <div className="text-[11px] text-white/20 mb-0.5">Next</div>
                <div className="text-[13px] font-semibold">{nextApp.name}</div>
              </div>
              <HiArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.div>
  );
}
