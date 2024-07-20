import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { connectDb } from "@/dbConnection/db";
import { Contact } from "@/models/contact.model";

dotenv.config();
connectDb();

export async function POST(request: Request) {
  const reqBody = await request.json();
  const { email, name, mobileNumber, description } = reqBody;

  if (!email || !mobileNumber) {
    return NextResponse.json(
      { message: "Email, and mobile number are required" },
      { status: 400 }
    );
  }

  try {
    const existingContact = await Contact.findOne({ email }).exec();
    if (existingContact) {
      return NextResponse.json({
        message: "Our Team will be shortly Connecting with You!",
      });
    }
    const newContactQuote = new Contact({
      name,
      email,
      mobileNumber,
      description,
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
