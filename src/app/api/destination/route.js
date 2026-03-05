import { NextResponse } from "next/server";

 HEAD
 feat/put-api-endpoints

 a4f6e1a (Fix PUT API syntax error)
export async function PUT(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination updated successfully",
    updatedData: body
 HEAD

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Destination added successfully",
    data: body
 main

 a4f6e1a (Fix PUT API syntax error)
  });
}