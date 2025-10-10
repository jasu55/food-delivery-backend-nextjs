import { NextResponse } from "next/server";
import { getAllCategories } from "@/lib/services/category-service";
import { NextRequest } from "next/server";
import { createCategory } from "@/lib/services/category-service";

export async function GET() {
  const categories = await getAllCategories();
  // Simulate fetching categories from a database or any other source
  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("Body:", body);
  await createCategory(body.name);
  return new NextResponse(JSON.stringify({ data: "Category created" }), {
    status: 200,
  });
}

// export async function GET() {
//   const response = NextResponse.json({ data: categories }, { status: 200 });
//   response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   return response;
// }
// export async function POST(req: Request) {
//   console.log("Category Post");
//   const body = await req.json();
//   const { newCategory } = body;
//   categories.push(newCategory);

//   const response = NextResponse.json({ data: categories }, { status: 200 });
//   response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   return response;
// }
