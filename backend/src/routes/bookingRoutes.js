import express from 'express';
import { createBooking, getBookings, updateBookingStatus } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getBookings);
router.post('/', protect, createBooking);
router.patch('/:id/status', protect, updateBookingStatus);

export default router;
