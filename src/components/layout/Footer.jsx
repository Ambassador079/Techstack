import { Link } from "react-router-dom";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full border border-[#39ff14]/50" />
              <div className="absolute inset-[4px] rounded-full bg-[#39ff14]" />
            </div>
            <span className="text-[13px] font-semibold">
              AmB<span className="text-[#39ff14]">Lens</span>
            </span>
          </div>

          <nav className="flex items-center gap-6 text-[13px] text-white/40">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link
              to="/explore"
              className="hover:text-white/80 transition-colors"
            >
              Explore
            </Link>
            <Link
              to="/compare"
              className="hover:text-white/80 transition-colors"
            >
              Compare
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-white/30">
            <a href="#" className="hover:text-white/70 transition-colors">
              <FiGithub size={16} />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              <FiTwitter size={16} />
            </a>
            <span className="text-[12px]">© 2026 StackLens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
