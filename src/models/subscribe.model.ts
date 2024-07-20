import mongoose, { Schema, Document } from "mongoose";

interface ISubscribe extends Document {
  email: string;
}

const SubscribeSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
});

export const Subscribe =
  mongoose.models.Subscribe ||
  mongoose.model<ISubscribe>("Subscribe", SubscribeSchema);
