import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  booking_date: {
    type: Date,
    required: true
  },
  num_people: {
    type: Number,
    required: true
  },
  total_cost: {
    type: Number,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  file_upload: {
    type: String,
    required: true 
  },
  customer_message: {
    type: String,
    required: false 
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
