import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Upload service not configured (missing BLOB_READ_WRITE_TOKEN)." },
      { status: 503 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File exceeds 10 MB limit." }, { status: 413 });
  }

  const extFromType = file.type.split("/")[1]?.toLowerCase() ?? "jpg";
  const safeExt = ["jpeg", "jpg", "png", "webp", "gif"].includes(extFromType) ? extFromType : "jpg";
  const filename = `gallery/fan-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

  try {
    const blob = await put(filename, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type,
    });
    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Blob upload failed", err);
    return NextResponse.json({ error: "Upload failed. Try again." }, { status: 500 });
  }
}
