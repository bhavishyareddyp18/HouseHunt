import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    moveInDate: {
      type: Date,
      required: true
    },
    durationMonths: {
      type: Number,
      required: true,
      min: 1
    },
    notes: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

bookingSchema.index({ property: 1, user: 1, moveInDate: 1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
