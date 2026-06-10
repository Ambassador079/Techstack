import { useState, useMemo } from 'react'
import { apps } from '../data/apps'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const results = useMemo(() => {
    let filtered = apps
    if (activeCategory !== 'All') {
      filtered = filtered.filter(a => a.category === activeCategory)
    }
    if (!query.trim()) return filtered
    const q = query.toLowerCase()
    return filtered.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q)) ||
      a.category.toLowerCase().includes(q)
    )
  }, [query, activeCategory])

  return { query, setQuery, activeCategory, setActiveCategory, results }
}
