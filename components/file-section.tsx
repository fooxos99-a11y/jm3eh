import type { ReactNode } from "react"

interface FileSectionProps {
  title: string
  children: ReactNode
}

export function FileSection({ title, children }: FileSectionProps) {
  return (
    <section className="mb-8">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="inline-block text-lg font-bold text-primary border-b-2 border-primary pb-2 mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  )
}
