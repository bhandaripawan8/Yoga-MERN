import express from 'express';
import {createBooking, getBookings} from '../controllers/BookingController.js'

const router = express.Router();

router.post('/booking', createBooking);
router.get('/booking', getBookings);

export default router;