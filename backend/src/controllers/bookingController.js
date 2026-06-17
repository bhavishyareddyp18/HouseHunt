import Booking from '../models/Booking.js';
import Property from '../models/Property.js';

export const createBooking = async (req, res, next) => {
  try {
    const { propertyId, moveInDate, durationMonths, notes } = req.body;
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.status !== 'approved') {
      return res.status(400).json({ message: 'Only approved properties can be booked' });
    }

    const booking = await Booking.create({
      property: propertyId,
      user: req.user._id,
      moveInDate,
      durationMonths,
      notes
    });

    const populated = await booking.populate([
      { path: 'property', select: 'title location price type imageUrl' },
      { path: 'user', select: 'name email' }
    ]);

    res.status(201).json({ booking: populated });
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { user: req.user._id };
    const bookings = await Booking.find(filter)
      .populate('property', 'title location price type imageUrl status')
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json({ count: bookings.length, bookings });
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Status must be pending, confirmed, or cancelled' });
    }

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (req.user.role !== 'admin' && String(booking.user) !== String(req.user._id)) {
      return res.status(403).json({ message: 'You can only update your own bookings' });
    }

    if (req.user.role !== 'admin' && status === 'confirmed') {
      return res.status(403).json({ message: 'Only admins can confirm bookings' });
    }

    booking.status = status;
    await booking.save();

    const populated = await booking.populate([
      { path: 'property', select: 'title location price type imageUrl status' },
      { path: 'user', select: 'name email' }
    ]);

    res.json({ booking: populated });
  } catch (error) {
    next(error);
  }
};
