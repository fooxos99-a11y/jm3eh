import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function NationalAddressPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-card p-6 shadow-[0_10px_30px_oklch(0_0_0_/_0.06)] sm:p-8">
        {/* Header */}
        <header className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-primary text-balance">
            العنوان الوطني ومقر الجمعية
          </h1>
        </header>

        {/* PDF Viewer */}
        <div className="w-full rounded-2xl overflow-hidden border border-border mb-6">
          <iframe
            src="/national-address.pdf"
            title="العنوان الوطني"
            className="w-full h-[70vh] sm:h-[80vh]"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-[oklch(0.50_0.1_185)] hover:shadow-[0_8px_20px_oklch(0.56_0.1_185_/_0.3)]"
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
          <a
            href="/national-address.pdf"
            download
            className="flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10"
          >
            <Download className="w-5 h-5" />
            <span>تحميل الملف</span>
          </a>
        </div>
      </div>
    </main>
  )
}
