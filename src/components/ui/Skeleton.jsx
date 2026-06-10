export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-[#0d0d0d] overflow-hidden animate-pulse">
      <div className="h-[3px] bg-white/[0.05]" />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04]" />
          <div className="flex flex-col gap-1.5">
            <div className="w-24 h-3.5 rounded bg-white/[0.04]" />
            <div className="w-16 h-2.5 rounded bg-white/[0.03]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-3 rounded bg-white/[0.04]" />
          <div className="w-3/4 h-3 rounded bg-white/[0.03]" />
        </div>
        <div className="flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-5 rounded-full bg-white/[0.03]" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(count)].map((_, i) => <CardSkeleton key={i} />)}
    </div>
  )
}
