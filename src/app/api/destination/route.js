import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Destination from "@/models/Destination";

// READ data
export async function GET() {
  await connectDB();

  const destinations = await Destination.find();

  return NextResponse.json(destinations);
}

// WRITE data
export async function POST(request) {
  await connectDB();

  const body = await request.json();

  const newDestination = await Destination.create(body);

  return NextResponse.json({
    message: "Destination saved successfully",
    data: newDestination
  });
}