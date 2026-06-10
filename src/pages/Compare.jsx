import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiX, HiSwitchHorizontal } from "react-icons/hi";
import { apps } from "../data/apps";
import { fadeUp, pageTransition } from "../animations/variants";

const sectionOrder = ["frontend", "backend", "database", "cloud", "ai"];
const sectionLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud & Infra",
  ai: "AI & Data",
};
const sectionIcons = {
  frontend: "⬡",
  backend: "⚙",
  database: "🗄",
  cloud: "☁",
  ai: "🧠",
};

function AppSelector({ value, onChange, exclude, label }) {
  const [open, setOpen] = useState(false);
  const selected = apps.find((a) => a.id === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
          selected
            ? "border-white/[0.08] bg-[#0d0d0d] hover:border-white/15"
            : "border-dashed border-white/[0.12] bg-[#0a0a0a] hover:border-white/25"
        }`}
      >
        {selected ? (
          <>
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${selected.color}15` }}
            >
              {/* {selected.logo} */}
              <img
                src={selected.logo}
                alt={selected.name}
                className="w-12 h-12 object-contain"
              />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-white/80">
                {selected.name}
              </div>
              <div className="text-[11px] text-white/30">
                {selected.category}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1">
            <div className="text-[13px] text-white/30">{label}</div>
          </div>
        )}
        <HiChevronDown
          size={15}
          className={`text-white/30 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl border border-white/[0.08] bg-[#111] shadow-2xl overflow-hidden"
          >
            {apps
              .filter((a) => a.id !== exclude)
              .map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    onChange(app.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all hover:bg-white/[0.04] ${
                    value === app.id ? "bg-white/[0.04]" : ""
                  }`}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${app.color}18` }}
                  >
                    <img
                      src={app.logo}
                      alt={app.name}
                      className="w-12 h-12 object-contain"
                    />
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-white/70">
                      {app.name}
                    </div>
                    <div className="text-[11px] text-white/25">
                      {app.category}
                    </div>
                  </div>
                </button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompareColumn({ app }) {
  return (
    <div className="flex flex-col gap-5">
      {/* App header */}
      <div
        className="rounded-2xl border border-white/[0.06] p-5 flex items-center gap-4"
        style={{ background: `${app.color}08` }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: `${app.color}15` }}
        >
          <img
            src={app.logo}
            alt={app.name}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div>
          <h3 className="text-[18px] font-bold" style={{ color: app.color }}>
            {app.name}
          </h3>
          <p className="text-[12px] text-white/35">
            {app.users} users · {app.category}
          </p>
        </div>
      </div>

      {sectionOrder.map((key) => (
        <div
          key={key}
          className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-base">{sectionIcons[key]}</span>
            <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
              {sectionLabels[key]}
            </h4>
          </div>
          <div className="flex flex-col gap-2.5">
            {app.stack[key].items.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-50"
                  style={{ background: app.color }}
                />
                <div>
                  <span className="text-[12px] font-semibold text-white/70 font-mono">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-white/25 ml-1.5">
                    — {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Scaling */}
      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">📈</span>
          <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
            Scaling Strategy
          </h4>
        </div>
        <p className="text-[12px] text-white/40 leading-6">
          {app.stack.scaling.description}
        </p>
      </div>

      <Link
        to={`/app/${app.id}`}
        className="text-center py-3 rounded-xl border border-white/[0.07] text-[13px] text-white/40 hover:text-white/70 hover:border-white/15 transition-all"
      >
        Full {app.name} breakdown →
      </Link>
    </div>
  );
}

export default function Compare() {
  const [params] = useSearchParams();
  const [appA, setAppA] = useState(params.get("a") || "");
  const [appB, setAppB] = useState(params.get("b") || "");

  const dataA = apps.find((a) => a.id === appA);
  const dataB = apps.find((a) => a.id === appB);

  const swap = () => {
    const tmp = appA;
    setAppA(appB);
    setAppB(tmp);
  };

  const quickPairs = [
    { a: "netflix", b: "spotify", label: "Netflix vs Spotify" },
    { a: "uber", b: "airbnb", label: "Uber vs Airbnb" },
    { a: "instagram", b: "tiktok", label: "Instagram vs TikTok" },
    { a: "whatsapp", b: "spotify", label: "WhatsApp vs Spotify" },
  ];

  return (
    <motion.div
      {...pageTransition}
      className="max-w-7xl mx-auto px-6 pt-32 pb-24"
    >
      {/* Header */}
      <div className="mb-12">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="section-label">Side by Side</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Compare Stacks
          </h1>
          <p className="text-[15px] text-white/40">
            Select two apps and see exactly how their engineering differs.
          </p>
        </motion.div>
      </div>

      {/* Quick pairs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="mb-8"
      >
        <p className="text-[12px] text-white/25 mb-3 font-semibold uppercase tracking-widest">
          Quick Compare
        </p>
        <div className="flex flex-wrap gap-2">
          {quickPairs.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setAppA(p.a);
                setAppB(p.b);
              }}
              className={`px-4 py-2 rounded-full text-[12px] font-semibold border transition-all ${
                appA === p.a && appB === p.b
                  ? "border-[#39ff14]/40 bg-[#39ff14]/[0.08] text-[#39ff14]"
                  : "border-white/[0.08] text-white/40 hover:text-white/60 hover:border-white/20 bg-white/[0.02]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Selectors */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] gap-4 items-center mb-12"
      >
        <AppSelector
          value={appA}
          onChange={setAppA}
          exclude={appB}
          label="Select first app..."
        />
        <button
          onClick={swap}
          className="p-3 rounded-xl border border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/15 hover:bg-white/[0.03] transition-all mx-auto"
          title="Swap apps"
        >
          <HiSwitchHorizontal size={16} />
        </button>
        <AppSelector
          value={appB}
          onChange={setAppB}
          exclude={appA}
          label="Select second app..."
        />
      </motion.div>

      {/* Comparison grid */}
      <AnimatePresence mode="wait">
        {dataA && dataB ? (
          <motion.div
            key={`${appA}-${appB}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start"
          >
            <CompareColumn app={dataA} />
            <CompareColumn app={dataB} />
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 gap-4 text-center border border-dashed border-white/[0.07] rounded-2xl"
          >
            <div className="text-4xl opacity-30">⟺</div>
            <p className="text-[14px] text-white/30">
              Select two apps above to compare their full tech stacks
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
