import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { connectDb } from "@/dbConnection/db";
import { Subscribe } from "@/models/subscribe.model";

dotenv.config();
connectDb();

export async function POST(request: Request) {
  const reqBody = await request.json();
  const { email } = reqBody;

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const existingContact = await Subscribe.findOne({ email }).exec();
    if (existingContact) {
      return NextResponse.json({
        message: "Our Team will be shortly Connecting with You!",
      });
    }
    const newContactQuote = new Subscribe({
      email,
    });

    await newContactQuote.save(); // Save the document

    return NextResponse.json({
      message: "Our Team will be shortly Connecting with You!",
    });
  } catch (err) {
    console.error("Error handling quotation request:", err);
    return NextResponse.json(
      { message: "Error handling quotation request" },
      { status: 500 }
    );
  }
}
