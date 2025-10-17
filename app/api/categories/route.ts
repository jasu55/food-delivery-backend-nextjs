import { NextResponse } from "next/server";
import FoodCategory from "@/lib/models/Category";
import { connectDB } from "@/lib/connectDb";

export async function GET() {
  await connectDB();
  const category = await FoodCategory.find();
  return NextResponse.json({ category });
}

export const POST = async (request: Request) => {
  await connectDB();
  const body = await request.json();
  console.log("body", body)

  const category = await FoodCategory.create({
    categoryName: body.categoryName,
  });

  return NextResponse.json({ message: "Category created", category });
};

export async function DELETE(request: Request) {
  await connectDB();
  const body = await request.json();
  const { _id } = body;
  const category = await FoodCategory.findByIdAndDelete(_id);
  return NextResponse.json({ message: "DELETE request received", category });
}
