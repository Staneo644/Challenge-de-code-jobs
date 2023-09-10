import { Document, Schema, Types } from 'mongoose';
import mongoose from 'mongoose';

export interface Employer extends Document {
  email: string;
  name: string;
  enterprise_id: Types.ObjectId;
}

export const EmployerSchema = new Schema<Employer>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  enterprise_id: { type: Schema.Types.ObjectId, ref: 'Enterprise', required: true }
});

export const EmployerModel = mongoose.model<Employer>('Employer', EmployerSchema);
