import { connectDB } from "@/lib/connectDb";
import Food from "@/app/models/Food";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connectDB();
  const food = await Food.create({
    foodName: "Pizza",
    price: 200,
    image:
      "https://www.shutterstock.com/image-photo/delicious-pizza-on-wooden-table-260nw-1937697031.jpg",
    ingredients: "Cheese, Tomato, Basil",
    category: "68edcb0c28003a6395e73052",
  });
  return NextResponse.json({ message: "Food created", data: food });
};
