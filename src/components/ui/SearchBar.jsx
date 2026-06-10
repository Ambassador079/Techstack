import { HiSearch, HiX } from 'react-icons/hi'

export default function SearchBar({ value, onChange, placeholder = 'Search apps, technologies...' }) {
  return (
    <div className="relative group">
      <HiSearch
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#39ff14]/60 transition-colors pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#111] border border-white/[0.07] text-[14px] text-white/80 placeholder-white/25 focus:outline-none focus:border-[#39ff14]/30 focus:bg-[#111] transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-white/30 hover:text-white/60 transition-colors"
        >
          <HiX size={14} />
        </button>
      )}
    </div>
  )
}
