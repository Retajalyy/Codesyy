import { Router } from 'express';
import Booking from '../models/Booking.js';
import { sendBookingEmails } from '../utils/email.js';

const router = Router();

// POST /api/bookings  - create a trial booking
router.post('/', async (req, res) => {
  try {
    const { parentName, parentEmail, childName, bookingDate, bookingTime, phone, areaOfInterest } = req.body;

    if (![parentName, parentEmail, childName, bookingDate, bookingTime, phone].every(Boolean)) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const booking = await Booking.create({
      parentName, parentEmail, childName, bookingDate, bookingTime, phone,
      areaOfInterest: areaOfInterest || undefined,
    });

    // Email problems should never fail the booking itself
    try {
      await sendBookingEmails(booking);
    } catch (err) {
      console.error('Email sending failed:', err.message);
    }

    res.status(201).json({ message: 'Booking confirmed', id: booking._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
});

// GET /api/bookings  - admin only (send header: x-admin-key)
router.get('/', async (req, res) => {
  if (req.get('x-admin-key') !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json(await Booking.find().sort({ createdAt: -1 }));
});

export default router;
