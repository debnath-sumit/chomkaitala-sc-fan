import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export const revalidate = 30;

export async function GET() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ urls: [], configured: false });
  }

  try {
    const { blobs } = await list({ prefix: "gallery/" });
    const urls = blobs
      .sort((a, b) => new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime())
      .map((b) => b.url);
    return NextResponse.json({ urls, configured: true });
  } catch (err) {
    console.error("Blob list failed", err);
    return NextResponse.json({ urls: [], configured: true, error: "list_failed" }, { status: 500 });
  }
}
