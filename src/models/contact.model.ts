// Import necessary modules from mongoose
import mongoose, { Document } from 'mongoose';

// Define interface for Contact document
interface IContact extends Document {
    name: string;
    email: string;
    mobileNumber: string;
  description:string
    createdAt: Date;
}

// Define the Mongoose Schema for Contact
const ContactSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    description: { type: String},
    createdAt: { type: Date, default: Date.now }
});

// Define and export the Mongoose Model
export const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
