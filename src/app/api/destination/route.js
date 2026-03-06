import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination added successfully",
    data: body
  });
}

export async function PUT(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination updated successfully",
    updatedData: body
  });
}