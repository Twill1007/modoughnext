import User from "@/app/models/User";
import { NextResponse } from "next/server";

//This is the skeleton of the post requests.

export async function POST(req) {
  try {
    const body = await req.json();
    const userCartData = body.userCartData;
    // formData.items = items;
    await User.create(userCartData);
    console.log("Server Side", userCartData);

    return NextResponse.json({ message: "Cart Filled" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
