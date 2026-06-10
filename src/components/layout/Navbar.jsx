import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon, HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { FaMagnifyingGlass } from "react-icons/fa6";
const links = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/compare", label: "Compare" },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark border-b border-white/[0.05] py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="" alt="" />
          {/* <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border border-[#39ff14]/50 group-hover:border-[#39ff14] transition-colors" />
            <div className="absolute inset-[5px] rounded-full bg-[#39ff14] group-hover:shadow-[0_0_8px_#39ff14] transition-shadow" />
          </div> */}
          <span className="text-[15px] font-semibold tracking-tight">
            AmB<span className="text-[#39ff14]">Lens</span>
          </span>
          <FaMagnifyingGlass />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#39ff14] bg-[#39ff14]/[0.07]"
                    : "text-white/50 hover:text-white/90 hover:bg-white/[0.04]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/[0.05] transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>

          <Link
            to="/explore"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#39ff14] text-black text-[13px] font-semibold hover:bg-[#39ff14]/90 hover:shadow-[0_0_20px_rgba(57,255,20,0.25)] transition-all duration-200"
          >
            Explore Apps
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/[0.05] glass-dark"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-[14px] font-medium transition-all ${
                      isActive
                        ? "text-[#39ff14] bg-[#39ff14]/[0.07]"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
