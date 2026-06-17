import Property from '../models/Property.js';

const buildPropertyFilter = (query, includePending = false) => {
  const filter = includePending ? {} : { status: 'approved' };

  if (query.location) {
    filter.location = { $regex: query.location, $options: 'i' };
  }

  if (query.type) {
    filter.type = query.type;
  }

  if (query.minPrice || query.maxPrice) {
    filter.price = {};
    if (query.minPrice) filter.price.$gte = Number(query.minPrice);
    if (query.maxPrice) filter.price.$lte = Number(query.maxPrice);
  }

  if (query.status && includePending) {
    filter.status = query.status;
  }

  return filter;
};

export const getProperties = async (req, res, next) => {
  try {
    const includePending = req.user?.role === 'admin';
    const filter = buildPropertyFilter(req.query, includePending);
    const properties = await Property.find(filter)
      .populate('owner', 'name email')
      .sort({ createdAt: -1 });

    res.json({ count: properties.length, properties });
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name email phone');

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.status !== 'approved' && req.user?.role !== 'admin' && String(property.owner._id) !== String(req.user?._id)) {
      return res.status(403).json({ message: 'Property is not approved yet' });
    }

    res.json({ property });
  } catch (error) {
    next(error);
  }
};

export const getMyProperties = async (req, res, next) => {
  try {
    const properties = await Property.find({ owner: req.user._id }).sort({ createdAt: -1 });
    res.json({ count: properties.length, properties });
  } catch (error) {
    next(error);
  }
};

export const createProperty = async (req, res, next) => {
  try {
    const property = await Property.create({
      ...req.body,
      owner: req.user._id,
      status: req.user.role === 'admin' ? req.body.status || 'approved' : 'pending'
    });

    res.status(201).json({ property });
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    const ownsProperty = String(property.owner) === String(req.user._id);
    if (!ownsProperty && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You can only update your own listings' });
    }

    const protectedStatus = req.user.role === 'admin' ? req.body.status : 'pending';
    Object.assign(property, req.body, { status: protectedStatus });
    await property.save();

    res.json({ property });
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    const ownsProperty = String(property.owner) === String(req.user._id);
    if (!ownsProperty && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You can only delete your own listings' });
    }

    await property.deleteOne();
    res.json({ message: 'Property deleted' });
  } catch (error) {
    next(error);
  }
};

export const updatePropertyStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['approved', 'rejected', 'pending'].includes(status)) {
      return res.status(400).json({ message: 'Status must be approved, rejected, or pending' });
    }

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate('owner', 'name email');

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.json({ property });
  } catch (error) {
    next(error);
  }
};

export const getAdminStats = async (req, res, next) => {
  try {
    const [total, approved, pending, rejected] = await Promise.all([
      Property.countDocuments(),
      Property.countDocuments({ status: 'approved' }),
      Property.countDocuments({ status: 'pending' }),
      Property.countDocuments({ status: 'rejected' })
    ]);

    res.json({ total, approved, pending, rejected });
  } catch (error) {
    next(error);
  }
};
