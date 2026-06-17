import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Booking from '../models/Booking.js';
import Property from '../models/Property.js';
import User from '../models/User.js';

dotenv.config();

const password = 'Password123!';

const users = [
  { name: 'Aarav Admin', email: 'admin@rentnest.com', password, role: 'admin', phone: '+91 90000 10001' },
  { name: 'Maya Sharma', email: 'maya@example.com', password, role: 'user', phone: '+91 90000 10002' },
  { name: 'Kabir Mehta', email: 'kabir@example.com', password, role: 'user', phone: '+91 90000 10003' },
  { name: 'Isha Rao', email: 'isha@example.com', password, role: 'user', phone: '+91 90000 10004' },
  { name: 'Rohan Kapoor', email: 'rohan@example.com', password, role: 'user', phone: '+91 90000 10005' },
  { name: 'Neha Iyer', email: 'neha@example.com', password, role: 'user', phone: '+91 90000 10006' },
  { name: 'Vihaan Nair', email: 'vihaan@example.com', password, role: 'user', phone: '+91 90000 10007' },
  { name: 'Anika Sen', email: 'anika@example.com', password, role: 'user', phone: '+91 90000 10008' },
  { name: 'Dev Malhotra', email: 'dev@example.com', password, role: 'user', phone: '+91 90000 10009' },
  { name: 'Tara Bose', email: 'tara@example.com', password, role: 'user', phone: '+91 90000 10010' }
];

const images = [
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
];

const locations = ['Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Chennai', 'Gurugram', 'Noida'];
const types = ['Apartment', 'Villa', 'Studio', 'Townhouse', 'Penthouse'];
const amenities = ['WiFi', 'Parking', 'Gym', 'Security', 'Power Backup', 'Balcony', 'Pet Friendly', 'Furnished'];

const buildProperties = (createdUsers) =>
  Array.from({ length: 26 }).map((_, index) => {
    const location = locations[index % locations.length];
    const type = types[index % types.length];
    const price = 12000 + index * 2750 + (index % 4) * 1500;
    const owner = createdUsers[(index % (createdUsers.length - 1)) + 1]._id;

    return {
      title: `${location} ${type} ${index + 1}`,
      description: `A well-maintained ${type.toLowerCase()} in ${location} with practical amenities, clean interiors, and easy access to daily essentials.`,
      location,
      address: `${24 + index}, Residency Lane, ${location}`,
      price,
      type,
      bedrooms: type === 'Studio' ? 1 : (index % 4) + 1,
      bathrooms: type === 'Studio' ? 1 : (index % 3) + 1,
      imageUrl: images[index % images.length],
      amenities: amenities.slice(index % 3, (index % 3) + 5),
      status: index % 9 === 0 ? 'pending' : index % 13 === 0 ? 'rejected' : 'approved',
      owner
    };
  });

const seed = async () => {
  try {
    await connectDB();

    await Promise.all([Booking.deleteMany(), Property.deleteMany(), User.deleteMany()]);

    const createdUsers = await User.insertMany(users);
    const createdProperties = await Property.insertMany(buildProperties(createdUsers));
    const approvedProperties = createdProperties.filter((property) => property.status === 'approved');
    const renters = createdUsers.filter((user) => user.role === 'user');

    const bookings = Array.from({ length: 12 }).map((_, index) => ({
      property: approvedProperties[index % approvedProperties.length]._id,
      user: renters[index % renters.length]._id,
      moveInDate: new Date(2026, index % 12, 5 + index),
      durationMonths: (index % 8) + 3,
      notes: index % 2 === 0 ? 'Interested in a weekend visit before final confirmation.' : 'Looking for immediate move-in with family.',
      status: ['pending', 'confirmed', 'cancelled'][index % 3]
    }));

    await Booking.insertMany(bookings);

    console.log('Seed complete');
    console.table({
      users: createdUsers.length,
      properties: createdProperties.length,
      bookings: bookings.length
    });
    console.log('Demo admin: admin@rentnest.com / Password123!');
    console.log('Demo user: maya@example.com / Password123!');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seed();
