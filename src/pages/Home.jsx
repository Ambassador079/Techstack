import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { HiArrowRight, HiLightningBolt, HiCode, HiChip } from "react-icons/hi";
import { apps } from "../data/apps";
import AppCard from "../components/cards/AppCard";
import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "../animations/variants";

const floatingApps = apps.slice(0, 6);

const benefits = [
  {
    icon: <HiLightningBolt />,
    title: "Make better tech decisions",
    desc: "Understand why companies choose specific tools and apply those insights to your own projects.",
  },
  {
    icon: <HiLightningBolt />,
  },
  {
    icon: <HiCode />,
    title: "Nail system design interviews",
    desc: "Real-world architecture examples are the best prep for senior engineering interviews.",
  },
  {
    icon: <HiChip />,
    title: "Discover powerful open-source tools",
    desc: "Many tools used at Netflix, Airbnb, and Uber are open source and available to you today.",
  },
];

const stats = [
  { value: "7", label: "Apps covered" },
  { value: "50+", label: "Technologies mapped" },
  { value: "100B+", label: "Daily requests served by these stacks" },
  { value: "Free", label: "Always" },
];

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#39ff14] opacity-[0.04] blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#39ff14] opacity-[0.02] blur-[100px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating app icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingApps.map((app, i) => {
            const positions = [
              { top: "18%", left: "8%" },
              { top: "12%", right: "10%" },
              { top: "45%", left: "5%" },
              { top: "55%", right: "7%" },
              { bottom: "20%", left: "12%" },
              { bottom: "18%", right: "12%" },
            ];
            return (
              <motion.div
                key={app.id}
                style={positions[i]}
                className="absolute"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, i % 2 === 0 ? 3 : -3, 0],
                }}
                transition={{
                  duration: 5 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/[0.08] flex items-center justify-center text-2xl md:text-3xl shadow-lg"
                  style={{ background: `${app.color}18` }}
                >
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05] mb-6"
          >
            The Tech Stack
            <br />
            <span className="text-glow text-[#39ff14]">Behind the Apps</span>
            <br />
            You Use Daily
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[16px] md:text-[18px] text-white/45 leading-relaxed max-w-xl mx-auto mb-10"
          >
            Explore the engineering decisions, databases, and architectures
            powering Netflix, Spotify, Uber, and more — explained for real
            developers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center"
          >
            <Link
              to="/explore"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#39ff14] text-black text-[14px] font-bold hover:bg-[#39ff14]/90 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-200"
            >
              Explore All Apps
              <HiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/compare"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.1] text-white/60 text-[14px] font-semibold hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
            >
              Compare Stacks
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/[0.05] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#39ff14] mb-1">
                  {s.value}
                </div>
                <div className="text-[12px] text-white/35 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured apps */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">Featured Apps</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              The world runs on
              <br />
              these stacks
            </h2>
            <p className="text-[15px] text-white/40 max-w-md">
              Each app represents millions of engineering decisions. Here's
              what's actually powering them.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {apps.slice(0, 6).map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-[#39ff14] transition-colors group"
          >
            View all {apps.length} apps
            <HiArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* Why section */}
      <section className="border-y border-white/[0.05] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label">Why It Matters</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Engineering decisions at scale shape everything
              </h2>
              <p className="text-[15px] text-white/45 leading-7 mb-4">
                Every app you use made thousands of technology choices. Some
                became industry standards — Apache Kafka (LinkedIn), Apache
                Airflow (Airbnb), PyTorch (Facebook). Others became cautionary
                tales.
              </p>
              <p className="text-[15px] text-white/45 leading-7">
                Understanding <em>why</em> these choices were made — not just
                what they are — is what separates senior engineers from everyone
                else.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-[#0d0d0d] hover:border-white/10 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#39ff14]/[0.08] border border-[#39ff14]/20 flex items-center justify-center text-[#39ff14] text-lg flex-shrink-0 group-hover:bg-[#39ff14]/[0.12] transition-colors">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-white/80 mb-1">
                      {b.title}
                    </h3>
                    <p className="text-[13px] text-white/40 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/[0.07] bg-[#0d0d0d] p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#39ff14] opacity-[0.06] blur-[80px] rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to go deeper?
            </h2>
            <p className="text-[15px] text-white/40 mb-8 max-w-md mx-auto">
              Compare two stacks side-by-side, or dive into any app's full
              architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/explore"
                className="px-6 py-3.5 rounded-xl bg-[#39ff14] text-black text-[14px] font-bold hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all"
              >
                Explore All Apps
              </Link>
              <Link
                to="/compare"
                className="px-6 py-3.5 rounded-xl border border-white/[0.1] text-white/60 text-[14px] font-semibold hover:text-white hover:border-white/20 transition-all"
              >
                Compare Stacks
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
