import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    parentName: { type: String, required: true, trim: true },
    parentEmail: { type: String, required: true, trim: true, lowercase: true },
    childName: { type: String, required: true, trim: true },
    bookingDate: { type: String, required: true },
    bookingTime: { type: String, required: true },
    phone: { type: String, required: true, trim: true },
    // Soft signal only: which course card the parent clicked from (never required)
    areaOfInterest: { type: String, default: 'Not specified — discovery session' },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
