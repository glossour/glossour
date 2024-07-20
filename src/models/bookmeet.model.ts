import mongoose, { Schema, Document } from 'mongoose';

export interface BookMeetingDocument extends Document {
    name: string;
    email: string;
    countryCode: string;
    mobileNumber: string;
    currency: string;
    budget: string;
    service: string;
    timeSlot: string;
    website: string;
    date: string;
}

const BookMeetingSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    countryCode: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    currency: { type: String },
    budget: { type: String },
    service: { type: String },
    timeSlot: { type: String, required: true },
    website: { type: String, required: false }, // Adjust required as per your form
    date: { type: String, required: true }
});

export const BookMeeting = mongoose.models.BookMeeting || mongoose.model<BookMeetingDocument>('BookMeeting', BookMeetingSchema);
