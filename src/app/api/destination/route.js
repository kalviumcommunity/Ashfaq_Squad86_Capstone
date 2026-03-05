import { NextResponse } from "next/server";

 feat/put-api-endpoints
export async function PUT(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination updated successfully",
    updatedData: body
=======
export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination added successfully",
    data: body
 main
  });
}