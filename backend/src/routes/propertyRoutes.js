import express from 'express';
import {
  createProperty,
  deleteProperty,
  getAdminStats,
  getMyProperties,
  getProperties,
  getPropertyById,
  updateProperty,
  updatePropertyStatus
} from '../controllers/propertyController.js';
import { authorize, optionalAuth, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', optionalAuth, getProperties);
router.post('/', protect, createProperty);
router.get('/admin/stats', protect, authorize('admin'), getAdminStats);
router.get('/mine', protect, getMyProperties);
router.get('/:id', optionalAuth, getPropertyById);
router.put('/:id', protect, updateProperty);
router.delete('/:id', protect, deleteProperty);
router.patch('/:id/status', protect, authorize('admin'), updatePropertyStatus);

export default router;
