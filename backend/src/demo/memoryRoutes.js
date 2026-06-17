import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const passwordHash = await bcrypt.hash('Password123!', 12);

const makeId = () => crypto.randomUUID();

const users = [
  { _id: makeId(), name: 'Aarav Admin', email: 'admin@rentnest.com', password: passwordHash, role: 'admin', phone: '+91 90000 10001' },
  ...['Maya Sharma', 'Kabir Mehta', 'Isha Rao', 'Rohan Kapoor', 'Neha Iyer', 'Vihaan Nair', 'Anika Sen', 'Dev Malhotra', 'Tara Bose'].map((name, index) => ({
    _id: makeId(),
    name,
    email: `${name.split(' ')[0].toLowerCase()}@example.com`,
    password: passwordHash,
    role: 'user',
    phone: `+91 90000 1000${index + 2}`
  }))
];

const locations = ['Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Chennai', 'Gurugram', 'Noida'];
const types = ['Apartment', 'Villa', 'Studio', 'Townhouse', 'Penthouse'];
const images = [
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
];

let properties = Array.from({ length: 26 }).map((_, index) => {
  const owner = users[(index % 9) + 1];
  return {
    _id: makeId(),
    title: `${locations[index % locations.length]} ${types[index % types.length]} ${index + 1}`,
    description: `A well-maintained ${types[index % types.length].toLowerCase()} with practical amenities and easy access to essentials.`,
    location: locations[index % locations.length],
    address: `${24 + index}, Residency Lane, ${locations[index % locations.length]}`,
    price: 12000 + index * 2750 + (index % 4) * 1500,
    type: types[index % types.length],
    bedrooms: types[index % types.length] === 'Studio' ? 1 : (index % 4) + 1,
    bathrooms: types[index % types.length] === 'Studio' ? 1 : (index % 3) + 1,
    imageUrl: images[index % images.length],
    amenities: ['WiFi', 'Parking', 'Security', 'Power Backup', 'Balcony'],
    status: index % 9 === 0 ? 'pending' : index % 13 === 0 ? 'rejected' : 'approved',
    owner: { _id: owner._id, name: owner.name, email: owner.email },
    createdAt: new Date(Date.now() - index * 86400000).toISOString()
  };
});

let bookings = properties
  .filter((property) => property.status === 'approved')
  .slice(0, 12)
  .map((property, index) => ({
    _id: makeId(),
    property,
    user: users[(index % 9) + 1],
    moveInDate: new Date(2026, index % 12, 5 + index).toISOString(),
    durationMonths: (index % 8) + 3,
    notes: 'Demo booking generated for local preview mode.',
    status: ['pending', 'confirmed', 'cancelled'][index % 3],
    createdAt: new Date().toISOString()
  }));

const publicUser = (user) => ({
  id: user._id,
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone
});

const tokenFor = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'demo-memory-secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });

const protectMemory = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized, token missing' });
    }
    const decoded = jwt.verify(header.split(' ')[1], process.env.JWT_SECRET || 'demo-memory-secret');
    const user = users.find((item) => item._id === decoded.id);
    if (!user) return res.status(401).json({ message: 'Not authorized, user not found' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden: insufficient role' });
  next();
};

router.post('/auth/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Name, email, and password are required' });
  if (users.some((user) => user.email === email.toLowerCase())) return res.status(409).json({ message: 'Email already registered' });
  const user = { _id: makeId(), name, email: email.toLowerCase(), password: await bcrypt.hash(password, 12), phone, role: 'user' };
  users.push(user);
  res.status(201).json({ user: publicUser(user), token: tokenFor(user) });
});

router.post('/auth/login', async (req, res) => {
  const user = users.find((item) => item.email === req.body.email?.toLowerCase());
  if (!user || !(await bcrypt.compare(req.body.password || '', user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  res.json({ user: publicUser(user), token: tokenFor(user) });
});

router.get('/auth/me', protectMemory, (req, res) => res.json({ user: publicUser(req.user) }));

router.get('/properties', (req, res) => {
  const header = req.headers.authorization;
  let isAdmin = false;
  if (header?.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(header.split(' ')[1], process.env.JWT_SECRET || 'demo-memory-secret');
      isAdmin = users.find((user) => user._id === decoded.id)?.role === 'admin';
    } catch {}
  }

  const filtered = properties.filter((property) => {
    if (!isAdmin && property.status !== 'approved') return false;
    if (req.query.status && property.status !== req.query.status) return false;
    if (req.query.location && !property.location.toLowerCase().includes(String(req.query.location).toLowerCase())) return false;
    if (req.query.type && property.type !== req.query.type) return false;
    if (req.query.minPrice && property.price < Number(req.query.minPrice)) return false;
    if (req.query.maxPrice && property.price > Number(req.query.maxPrice)) return false;
    return true;
  });
  res.json({ count: filtered.length, properties: filtered });
});

router.get('/properties/admin/stats', protectMemory, adminOnly, (req, res) => {
  res.json({
    total: properties.length,
    approved: properties.filter((property) => property.status === 'approved').length,
    pending: properties.filter((property) => property.status === 'pending').length,
    rejected: properties.filter((property) => property.status === 'rejected').length
  });
});

router.get('/properties/mine', protectMemory, (req, res) => {
  const mine = properties.filter((property) => property.owner._id === req.user._id);
  res.json({ count: mine.length, properties: mine });
});

router.get('/properties/:id', (req, res) => {
  const property = properties.find((item) => item._id === req.params.id);
  if (!property) return res.status(404).json({ message: 'Property not found' });
  res.json({ property });
});

router.post('/properties', protectMemory, (req, res) => {
  const property = {
    ...req.body,
    _id: makeId(),
    owner: { _id: req.user._id, name: req.user.name, email: req.user.email },
    status: req.user.role === 'admin' ? req.body.status || 'approved' : 'pending',
    createdAt: new Date().toISOString()
  };
  properties.unshift(property);
  res.status(201).json({ property });
});

router.put('/properties/:id', protectMemory, (req, res) => {
  const index = properties.findIndex((property) => property._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Property not found' });
  if (req.user.role !== 'admin' && properties[index].owner._id !== req.user._id) return res.status(403).json({ message: 'You can only update your own listings' });
  properties[index] = { ...properties[index], ...req.body, status: req.user.role === 'admin' ? req.body.status || properties[index].status : 'pending' };
  res.json({ property: properties[index] });
});

router.delete('/properties/:id', protectMemory, (req, res) => {
  const property = properties.find((item) => item._id === req.params.id);
  if (!property) return res.status(404).json({ message: 'Property not found' });
  if (req.user.role !== 'admin' && property.owner._id !== req.user._id) return res.status(403).json({ message: 'You can only delete your own listings' });
  properties = properties.filter((item) => item._id !== req.params.id);
  res.json({ message: 'Property deleted' });
});

router.patch('/properties/:id/status', protectMemory, adminOnly, (req, res) => {
  const property = properties.find((item) => item._id === req.params.id);
  if (!property) return res.status(404).json({ message: 'Property not found' });
  property.status = req.body.status;
  res.json({ property });
});

router.get('/bookings', protectMemory, (req, res) => {
  const visible = req.user.role === 'admin' ? bookings : bookings.filter((booking) => booking.user._id === req.user._id);
  res.json({ count: visible.length, bookings: visible });
});

router.post('/bookings', protectMemory, (req, res) => {
  const property = properties.find((item) => item._id === req.body.propertyId);
  if (!property) return res.status(404).json({ message: 'Property not found' });
  if (property.status !== 'approved') return res.status(400).json({ message: 'Only approved properties can be booked' });
  const booking = {
    _id: makeId(),
    property,
    user: publicUser(req.user),
    moveInDate: req.body.moveInDate,
    durationMonths: Number(req.body.durationMonths),
    notes: req.body.notes || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  bookings.unshift(booking);
  res.status(201).json({ booking });
});

router.patch('/bookings/:id/status', protectMemory, (req, res) => {
  const booking = bookings.find((item) => item._id === req.params.id);
  if (!booking) return res.status(404).json({ message: 'Booking not found' });
  if (req.user.role !== 'admin' && booking.user._id !== req.user._id) return res.status(403).json({ message: 'You can only update your own bookings' });
  if (req.user.role !== 'admin' && req.body.status === 'confirmed') return res.status(403).json({ message: 'Only admins can confirm bookings' });
  booking.status = req.body.status;
  res.json({ booking });
});

export default router;
