import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AppCard from '../components/cards/AppCard'
import SearchBar from '../components/ui/SearchBar'
import CategoryFilter from '../components/ui/CategoryFilter'
import EmptyState from '../components/ui/EmptyState'
import { GridSkeleton } from '../components/ui/Skeleton'
import { useSearch } from '../hooks/useSearch'
import { fadeUp, pageTransition } from '../animations/variants'

export default function Explore() {
  const { query, setQuery, activeCategory, setActiveCategory, results } = useSearch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div {...pageTransition} className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <div className="mb-12">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="section-label">All Apps</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Explore the Stack
          </h1>
          <p className="text-[15px] text-white/40 max-w-lg">
            Dive into the engineering decisions, frameworks, and infrastructure powering the world's most-used products.
          </p>
        </motion.div>
      </div>

      {/* Search & filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="flex flex-col gap-4 mb-10"
      >
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </motion.div>

      {/* Results label */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-[12px] text-white/25 font-medium"
        >
          {results.length} {results.length === 1 ? 'app' : 'apps'} found
          {query && <span> for "<span className="text-white/50">{query}</span>"</span>}
        </motion.div>
      )}

      {/* Grid */}
      {loading ? (
        <GridSkeleton count={6} />
      ) : results.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      )}
    </motion.div>
  )
}
