import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

// Replace with member-handbook.pdf (or keep travel-guide.pdf) in /data
const FILE = "travel-guide.pdf";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const path = join(process.cwd(), "data", FILE);
    const buffer = await readFile(path);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${FILE}"`,
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
