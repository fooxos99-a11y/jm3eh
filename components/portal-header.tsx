import NextImage from "next/image"

export function PortalHeader() {
  return (
    <header className="flex flex-col items-center mb-10">
      <div className="w-40 h-40 rounded-full overflow-hidden bg-card mb-5">
        <NextImage
          src="/logo.png"
          alt="شعار جمعية العناية بالمسلمين الجدد"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold text-primary text-balance">
        بوابة ملفات الجمعية
      </h1>
    </header>
  )
}
