import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { category } = body;

  return NextResponse.json({ data: "success" }, { status: 200 });
}
