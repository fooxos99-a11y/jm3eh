import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ExternalLink } from "lucide-react"

interface FileButtonProps {
  label: string
  href: string
  icon: LucideIcon
}

export function FileButton({
  label,
  href,
  icon: Icon,
}: FileButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("#")
  const className =
    "group flex items-center gap-3 rounded-xl px-5 py-4 font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-[oklch(0.50_0.1_185)] hover:shadow-[0_8px_20px_oklch(0.56_0.1_185_/_0.3)]"

  const content = (
    <>
      <Icon className="w-5 h-5 shrink-0" />
      <span className="flex-1 text-start">{label}</span>
      <ExternalLink className="w-4 h-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-70" />
    </>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}
