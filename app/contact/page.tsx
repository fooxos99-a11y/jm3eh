import Link from "next/link"
import {
  Phone,
  Camera,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
    </svg>
  )
}

const contactItems = [
  {
    icon: Phone,
    label: "رقم الجوال",
    value: "0531470706",
    href: "tel:0531470706",
    credentials: null,
  },
  {
    icon: Camera,
    label: "سناب شات",
    value: "newmuslimsa",
    href: "https://www.snapchat.com/add/newmuslimsa",
    credentials: "Ss@123456",
  },
  {
    icon: Instagram,
    label: "انستقرام",
    value: "newmuslimsa",
    href: "https://www.instagram.com/newmuslimsa",
    credentials: "Ii@123456",
  },
  {
    icon: TikTokIcon,
    label: "تيك توك",
    value: "newmuslimsa",
    href: "https://www.tiktok.com/@newmuslimsa",
    credentials: "Tt@123456",
  },
  {
    icon: XIcon,
    label: "X (تويتر)",
    value: "@newmuslimsa",
    href: "https://x.com/newmuslimsa",
    credentials: "Xx@123456",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "Asaa999222@gmail.com",
    href: "mailto:Asaa999222@gmail.com",
    credentials: "Az123456*",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 shadow-[0_10px_30px_oklch(0_0_0_/_0.06)] sm:p-10">
        {/* Header */}
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-3xl font-bold text-primary text-balance">
            بيانات التواصل
          </h1>
        </header>

        {/* Contact items */}
        <div className="flex flex-col gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("tel") || item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-foreground font-bold hover:text-primary transition-colors break-all"
                    dir="ltr"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
              {item.credentials && (
                <div className="mt-3 pt-3 border-t border-border/60">
                  <p className="text-sm text-muted-foreground">
                    {"كلمة المرور: "}
                    <span className="font-mono font-bold text-foreground" dir="ltr">
                      {item.credentials}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-[oklch(0.50_0.1_185)] hover:shadow-[0_8px_20px_oklch(0.56_0.1_185_/_0.3)]"
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
