import Cart from "@/app/models/Cart";
import { NextResponse } from "next/server";

//This is the skeleton of the post requests.

export async function POST(req) {
  try {
    const body = await req.json();
    const cartData = body.cartData;
    await Cart.create(cartData);

    return NextResponse.json({ message: "Cart Filled" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
