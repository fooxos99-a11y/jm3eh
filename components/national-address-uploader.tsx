"use client";
import * as React from "react";
import { supabase } from "@/lib/supabase";

export default function NationalAddressUploader() {
  const [file, setFile] = React.useState<File | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [url, setUrl] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError("");
    const { data, error } = await supabase.storage
      .from("123")
      .upload(`national-address/${file.name}`, file, { upsert: true });
    setUploading(false);
    if (error) {
      setError(error.message);
    } else {
      const { data: publicUrl } = supabase.storage
        .from("123")
        .getPublicUrl(`national-address/${file.name}`);
      setUrl(publicUrl?.publicUrl || "");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={e => setFile(e.target.files?.[0] || null)}
        className="border rounded p-2"
      />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-primary text-primary-foreground rounded px-4 py-2 font-bold"
      >
        {uploading ? "جاري الرفع..." : "رفع الملف"}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {url && (
        <div className="mt-2">
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-primary">رابط الملف المرفوع</a>
        </div>
      )}
    </div>
  );
}
