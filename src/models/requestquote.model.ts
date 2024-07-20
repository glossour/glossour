// Import necessary modules from mongoose
import mongoose, { Document } from 'mongoose';

// Define interface for ServiceQuote document
interface IServiceQuote extends Document {
    name: string;
    email: string;
    mobileNumber: string;
    website?: string;
    budget?: string;
    services: string;
    createdAt: Date;
}

// Define the Mongoose Schema for ServiceQuote
const serviceQuoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    website: { type: String },
    budget: { type: String },
    services: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Define and export the Mongoose Model
export const ServiceQuote = mongoose.models.ServiceQuote || mongoose.model('ServiceQuote', serviceQuoteSchema);
