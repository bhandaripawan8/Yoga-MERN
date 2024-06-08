import Booking from "../models/Booking.js";

// Function to create a booking
const createBooking = async (req, res) => {
  const {
    email,
    booking_date,
    num_people,
    total_cost,
    customer_name,
    phone_number,
    file_upload,
    customer_message,
  } = req.body;

  try {
    // Check if there's already a booking for the same date and email
    const existingBooking = await Booking.findOne({ email, booking_date });
    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "A booking already exists for this date and email." });
    }

    // Create a new booking
    const newBooking = new Booking({
      email,
      booking_date,
      num_people,
      total_cost,
      customer_name,
      phone_number,
      file_upload,
      customer_message,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "success", savedBooking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
