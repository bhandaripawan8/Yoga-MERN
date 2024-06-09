import express from 'express';
import {createBooking, getAllBooking} from '../controllers/BookingController.js'

const router = express.Router();

router.post('/booking', createBooking);
router.get('/booking', getAllBooking);

export default router;