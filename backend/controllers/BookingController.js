import Booking from '../models/Booking.js';

// Function to create a booking
export const createBooking = async (req, res) => {
  const { booking_date, num_people, total_cost, customer_name, phone_number } = req.body;

  const newBooking = new Booking({
    booking_date,
    num_people,
    total_cost,
    customer_name,
    phone_number
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
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
