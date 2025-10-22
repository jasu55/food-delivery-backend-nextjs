import { connectDB } from "@/lib/connectDb";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User"; // Adjusted the path based on the project structure
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connectDB();
  const body = await request.json();
  const { password, email } = body;
  const hashpassword = bcrypt.hashSync(password, 10);

  const isVerified = bcrypt.compareSync(password, hashpassword);

  const user = await User.create({
    email: email,
    password: hashpassword,
    role: "USER",
  });

  return NextResponse.json({ message: "User created successfully" });
};
