import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import memoryRoutes from './demo/memoryRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'RentNest API',
    mode: process.env.DEMO_MEMORY === 'true' ? 'demo-memory' : 'mongodb'
  });
});

if (process.env.DEMO_MEMORY === 'true') {
  app.use('/api', memoryRoutes);
} else {
  app.use('/api/auth', authRoutes);
  app.use('/api/properties', propertyRoutes);
  app.use('/api/bookings', bookingRoutes);
}
app.use(notFound);
app.use(errorHandler);

if (process.env.DEMO_MEMORY === 'true') {
  app.listen(port, () => console.log(`Server running on port ${port} in demo-memory mode`));
} else {
  connectDB()
    .then(() => {
      app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((error) => {
      console.error('Database connection failed:', error.message);
      process.exit(1);
    });
}
