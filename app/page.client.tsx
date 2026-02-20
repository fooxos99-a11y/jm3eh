"use client"

import * as React from "react"
import {
  Award,
  Landmark,
  BookOpen,
  Users,
  Palette,
  Image as ImageIcon,
  FileText,
  FileImage,
  CreditCard,
  MapPin,
  MessageCircle,
  FileDown
} from "lucide-react"

// 1. مكون القسم لتنظيم الأزرار (تم إضافته ليعمل الكود بدون أخطاء الاستيراد)
function FileSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-10 w-full">
      <h2 className="text-xl font-bold mb-5 text-right text-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
        {children}
      </div>
    </div>
  )
}

// 2. المكون الأساسي والذكي للنافذة المنبثقة (يدعم الصور، الـ PDF، والنصوص المخصصة)
type ModalButtonProps = {
  label: string;
  icon: React.ElementType;
  fileUrl?: string;
  fileType?: "pdf" | "image";
  customContent?: React.ReactNode;
}

function ModalItemButton({ label, icon: Icon, fileUrl, fileType, customContent }: ModalButtonProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        type="button"
        className="group flex flex-row-reverse items-center justify-end gap-3 rounded-xl px-5 py-4 font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-[oklch(0.50_0.1_185)] hover:shadow-[0_8px_20px_oklch(0.56_0.1_185_/_0.3)] w-full"
        onClick={() => setOpen(true)}
      >
        <span className="flex-1 text-right">{label}</span>
        <Icon className="w-5 h-5 shrink-0" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity" dir="rtl">
          <div className="bg-card rounded-2xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto text-center relative flex flex-col border border-border">
            
            {/* زر الإغلاق */}
            <button
              className="absolute right-4 top-4 text-muted-foreground hover:text-destructive text-2xl transition-colors"
              onClick={() => setOpen(false)}
              aria-label="إغلاق"
            >
              ×
            </button>
            
            <div className="flex flex-col items-center justify-center mb-6 mt-2">
              <Icon className="mb-3 w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">{label}</h2>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full">
              {/* عرض المحتوى المخصص (مثل الحساب البنكي أو التواصل) */}
              {customContent && (
                <div className="w-full">
                  {customContent}
                </div>
              )}

              {/* عرض ملف PDF */}
              {fileType === "pdf" && fileUrl && (
                <div className="w-full flex flex-col items-center">
                  <iframe
                    src={fileUrl}
                    title={label}
                    className="w-full h-[60vh] rounded-lg border border-border mb-4 bg-muted"
                    allowFullScreen
                  />
                  <a
                    href={fileUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold shadow hover:bg-[oklch(0.50_0.1_185)] transition-colors"
                  >
                    <FileDown className="w-5 h-5" />
                    تحميل الملف
                  </a>
                </div>
              )}

              {/* عرض صورة */}
              {fileType === "image" && fileUrl && (
                <div className="w-full flex flex-col items-center">
                  <img
                    src={fileUrl}
                    alt={label}
                    className="max-w-full max-h-[60vh] rounded-lg object-contain mb-4 border border-border"
                  />
                  <a
                    href={fileUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold shadow hover:bg-[oklch(0.50_0.1_185)] transition-colors"
                  >
                    <FileDown className="w-5 h-5" />
                    تحميل الصورة
                  </a>
                </div>
              )}

              {/* رسالة في حال عدم وجود محتوى */}
              {!customContent && !fileUrl && (
                <div className="my-10 text-muted-foreground bg-muted w-full p-8 rounded-lg border border-dashed border-border">
                  لا يوجد ملف مرفق حالياً.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}


// 3. صفحة العرض الرئيسية
export default function Page() {
  
  // محتوى نافذة قنوات التواصل
  const contactContent = (
    <div className="space-y-4 text-right bg-muted p-6 rounded-xl">
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">رقم الجوال:</span>
        <span className="text-primary font-mono select-all">0531470706</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">سناب شات:</span>
        <span className="text-primary font-mono select-all">newmuslimsa</span>
        <span className="text-muted-foreground font-mono select-all">Ss@123456</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">انستقرام:</span>
        <span className="text-primary font-mono select-all">newmuslimsa</span>
        <span className="text-muted-foreground font-mono select-all">Ii@123456</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">تيك توك:</span>
        <span className="text-primary font-mono select-all">newmuslimsa</span>
        <span className="text-muted-foreground font-mono select-all">Tt@123456</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">X (تويتر):</span>
        <span className="text-primary font-mono select-all">@newmuslimsa</span>
        <span className="text-muted-foreground font-mono select-all">Xx@123456</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold w-32">البريد الإلكتروني:</span>
        <span className="text-primary font-mono select-all">Asaa999222@gmail.com</span>
        <span className="text-muted-foreground font-mono select-all">Az123456*</span>
      </div>
    </div>
  );

  // محتوى نافذة الحساب البنكي
  const bankContent = (
    <div className="space-y-4 text-right bg-muted p-6 rounded-xl">
      <div>
        <div className="text-sm text-muted-foreground mb-1">رقم الحساب:</div>
        <div className="font-mono text-lg font-bold select-all bg-background p-3 rounded border text-center">418608016663664</div>
      </div>
      <div>
        <div className="text-sm text-muted-foreground mb-1">الآيبان (IBAN):</div>
        <div className="font-mono text-lg font-bold select-all bg-background p-3 rounded border text-center" dir="ltr">SA 1980000418608016663664</div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-background px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-3xl bg-card p-6 shadow-[0_10px_30px_oklch(0_0_0_/_0.06)] border border-border sm:p-10">
        
        {/* Header (اختياري) */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">متطلبات خطة مائة يوم</h1>
        </div>

        <FileSection title="الوثائق الرسمية والتراخيص">
          {/* أمثلة على أزرار تفتح ملفات PDF */}
          <ModalItemButton label="شهادة تسجيل الجمعية" icon={Award} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/shadh.pdf" />
          <ModalItemButton label="قرار التأسيس" icon={Landmark} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/qrartases.pdf" />
          <ModalItemButton label="اللائحة الأساسية" icon={BookOpen} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/la2h.pdf" />
          <ModalItemButton label="خطاب تهنئة وتشكيل المجلس" icon={Users} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/ktab.pdf" />
        </FileSection>

        <FileSection title="الهوية البصرية والمراسلات">
          {/* أمثلة على أزرار تفتح صور */}
          <ModalItemButton label="بناء الهوية البصرية (الدليل)" icon={Palette} fileType="pdf" />
          <ModalItemButton label="شعار الجمعية (Logo)" icon={ImageIcon} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/logo.pdf" />
          <ModalItemButton label="ورق رسمي (صيغة Word)" icon={FileText} />
          <ModalItemButton label="ورق رسمي (صيغة صورة)" icon={FileImage} fileType="image" />
        </FileSection>

        <FileSection title="معلومات الجمعية والتواصل">
          {/* أزرار تفتح محتوى مخصص (نصوص) أو ملفات */}
          <ModalItemButton label="بيانات الحساب البنكي" icon={CreditCard} customContent={
            <div className="space-y-4 text-right bg-muted p-6 rounded-xl">
              <div>
                <div className="text-sm text-muted-foreground mb-1">رقم الحساب:</div>
                <div className="font-mono text-lg font-bold select-all bg-background p-3 rounded border text-center">418608016663664</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">الآيبان (IBAN):</div>
                <div className="font-mono text-lg font-bold select-all bg-background p-3 rounded border text-center" dir="ltr">SA 1980000418608016663664</div>
              </div>
            </div>
          } />
          <ModalItemButton label="العنوان الوطني" icon={MapPin} fileType="pdf" fileUrl="https://yaxkgzjlhhsmuuaereul.supabase.co/storage/v1/object/public/123/3nwanw6ne.pdf" />
          <ModalItemButton label="مقر الجمعية" icon={MapPin} customContent={
            <div className="w-full flex flex-col items-center">
              <a
                href="https://www.google.com/maps/search/26.291855,+44.015369?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold shadow hover:bg-[oklch(0.50_0.1_185)] transition-colors"
              >
                فتح الموقع في قوقل ماب
              </a>
            </div>
          } />
          <ModalItemButton label="قنوات التواصل" icon={MessageCircle} customContent={contactContent} />
        </FileSection>

      </div>
    </main>
  )
}