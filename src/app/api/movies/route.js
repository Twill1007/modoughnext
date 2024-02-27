import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // if (req.method === "GET") {
  // }
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(1)
      .toArray();

    return NextResponse.json(movies);
  } catch (e) {
    console.error(e);
    return NextResponse.json(e);
  }
}
