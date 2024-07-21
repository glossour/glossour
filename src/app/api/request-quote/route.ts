import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { connectDb } from "@/dbConnection/db";
import { sendEmail } from "@/controllers/sendEmail";
import { RequestQuoteHtml } from "@/controllers/emails/requestQuote";
import { ServiceQuote } from "@/models/requestquote.model"; // Import the Mongoose model

dotenv.config();
connectDb();

export async function POST(request: Request) {
  const reqBody = await request.json();
  const { email, name, services, mobileNumber, website, budget } = reqBody;

  if (!email || !name || !services || !mobileNumber) {
    return NextResponse.json(
      { message: "Email, name, services, and mobile number are required" },
      { status: 400 }
    );
  }

  try {
    const existigRequest = await ServiceQuote.findOne({ email }).exec();
    if (existigRequest) {
      return NextResponse.json({ message: "Quotation sent to the email" });
    }
    // Save form data to MongoDB using Mongoose model
    const newServiceQuote = new ServiceQuote({
      name,
      email,
      mobileNumber,
      website,
      budget,
      services,
    });

    await newServiceQuote.save(); // Save the document

    // Send quotation email
    const subject = "Quotation Request";
    const template = RequestQuoteHtml({ name, services, budget, website });
    await sendEmail(email, subject, template);

    return NextResponse.json({ message: "Quotation sent to the email" });
  } catch (err) {
    console.error("Error handling quotation request:", err);
    return NextResponse.json(
      { message: "Error handling quotation request" },
      { status: 500 }
    );
  }
}
