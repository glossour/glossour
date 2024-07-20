import { NextResponse } from "next/server";
import { connectDb } from "@/dbConnection/db";
import { BookMeeting } from "@/models/bookmeet.model";
import { sendEmail } from "@/controllers/sendEmail";
import { BookMeetConfimed } from "@/controllers/emails/bookmeet";

connectDb();

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      countryCode,
      mobileNumber,
      currency,
      budget,
      service,
      timeSlot,
      website,
      date,
    } = await req.json();
    console.log("Parsed request body:", {
      name,
      email,
      countryCode,
      mobileNumber,
      currency,
      budget,
      service,
      timeSlot,
      website,
      date,
    });
    // Check if the selected time slot is available
    const existingSlot = await BookMeeting.findOne({ date, timeSlot }).exec();
    if (existingSlot) {
      // Find next available time slot on the same date
      const availableSlot = await findNextAvailableSlot(date);
      if (availableSlot) {
        // Create booking with the next available time slot
        const newBooking = new BookMeeting({
          name,
          email,
          countryCode,
          mobileNumber,
          currency,
          budget,
          service,
          timeSlot: availableSlot,
          website,
          date,
        });

        await newBooking.save();
        const link = `meet.google.com/ara-yehm-wga`;
        const template = BookMeetConfimed({
          name,
          timeSlot: availableSlot,
          date,
          budget,
          currency,
          service,
          link,
        });
        // await sendEmail(email, 'Booking Confirmati', template);
        // await sendEmail(
        //   process.env.EMAIL_SECRET ?? "",
        //   "Booking Confirmation",
        //   template
        // );
        return NextResponse.json({
          message: "Booking created successfully with the next available slot",
          timeSlot: availableSlot,
        });
      }
    }

    // Create a new booking
    const newBooking = new BookMeeting({
      name,
      email,
      countryCode,
      mobileNumber,
      currency,
      budget,
      service,
      timeSlot,
      website,
      date,
    });

    await newBooking.save();
    const link = `meet.google.com/ara-yehm-wga`;
    const template = BookMeetConfimed({
      name,
      timeSlot,
      date,
      budget,
      currency,
      service,
      link,
    });

    // await sendEmail(email, "Booking Confirmati", template);
    // await sendEmail(
    //   process.env.EMAIL_SECRET ?? "",
    //   "Booking Confirmation",
    //   template
    // );

    return NextResponse.json({ message: "Booking created successfully" });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { message: "Error creating booking" },
      { status: 500 }
    );
  }
}

async function findNextAvailableSlot(date: string): Promise<string | null> {
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  for (const slot of timeSlots) {
    const existingSlot = await BookMeeting.findOne({
      date,
      timeSlot: slot,
    }).exec();
    if (!existingSlot) {
      return slot;
    }
  }

  return null;
}
