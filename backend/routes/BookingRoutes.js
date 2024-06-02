import express from 'express';
import {createBooking, getBookings} from '../controllers/BookingController.js'


router.post('/booking', createBooking);
router.get('/bookings', getBookings);

export default router;