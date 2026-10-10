# RentNest MERN House Rent Management System

RentNest is a production-style full-stack MERN demo for managing rental listings, approvals, and bookings. It includes JWT authentication, Admin/User role-based access control, protected frontend/backend routes, seeded demo data, and a built-in Project Review Checklist page.

## Tech Stack

- Frontend: React.js, React Router, Axios, Bootstrap, lucide-react
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT with bcrypt password hashing

## Project Structure

```text
backend/
  src/config/        MongoDB connection
  src/controllers/   Auth, properties, bookings
  src/middleware/    JWT auth, RBAC, errors
  src/models/        User, Property, Booking
  src/routes/        Express route modules
  src/seeders/       Demo data seeder
frontend/
  src/components/    Navbar, cards, protected route, checklist
  src/context/       Auth context
  src/pages/         Home, auth, dashboards, details, review
  src/services/      Axios API client
```

## Setup

1. Install MongoDB locally or use MongoDB Atlas.
2. Copy environment files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. Update `backend/.env`:

```env
PORT=5055
MONGO_URI=mongodb://127.0.0.1:27017/rentnest
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
DEMO_MEMORY=false
```

If MongoDB is not installed and you only want to preview the app locally, set `DEMO_MEMORY=true` in `backend/.env`. This keeps the real Mongo/Mongoose code in place but runs the API from in-memory demo data so registration, login, listings, dashboards, and bookings work immediately.

4. Install dependencies:

```bash
npm install
npm run install:all
```

5. Seed the database:

```bash
npm run seed
```

6. Run both apps:

```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5055`

## Demo Accounts

- Admin: `admin@rentnest.com` / `Password123!`
- User: `maya@example.com` / `Password123!`

The seeder creates 10 users, 26 properties with varied locations/prices/types/statuses, and 12 sample bookings.

## Required Feature Status

- User registration and login with JWT authentication: complete
- Role-based access control for Admin and User: complete
- Property CRUD: complete
- Property search and filters by location, price range, and type: complete
- User property booking: complete
- Admin approval panel for listings: complete
- bcrypt password hashing: complete
- Protected frontend and backend routes: complete
- Demo Mode seeded data: complete
- Project Review Checklist and final summary page: complete

Visit `/review` in the frontend to see the built-in checklist comparing the implementation against the original requirements.

## API Documentation

Base URL: `http://localhost:5055/api`

Send protected requests with:

```http
Authorization: Bearer <jwt-token>
```

### Auth Routes

#### POST `/auth/register`

Request:

```json
{
  "name": "Priya Demo",
  "email": "priya@example.com",
  "password": "Password123!",
  "phone": "+91 90000 11111"
}
```

Response:

```json
{
  "user": {
    "id": "66...",
    "name": "Priya Demo",
    "email": "priya@example.com",
    "role": "user",
    "phone": "+91 90000 11111"
  },
  "token": "jwt-token"
}
```

#### POST `/auth/login`

Request:

```json
{
  "email": "admin@rentnest.com",
  "password": "Password123!"
}
```

Response:

```json
{
  "user": {
    "id": "66...",
    "name": "Aarav Admin",
    "email": "admin@rentnest.com",
    "role": "admin",
    "phone": "+91 90000 10001"
  },
  "token": "jwt-token"
}
```

#### GET `/auth/me`

Protected. Returns the authenticated user profile.

### Property Routes

#### GET `/properties`

Public route. Returns approved properties. Admin users see all statuses when authenticated.

Query filters:

- `location=Bengaluru`
- `type=Apartment`
- `minPrice=15000`
- `maxPrice=50000`
- `status=pending` admin use

Response:

```json
{
  "count": 1,
  "properties": [
    {
      "_id": "66...",
      "title": "Bengaluru Apartment 1",
      "location": "Bengaluru",
      "price": 12000,
      "type": "Apartment",
      "status": "approved"
    }
  ]
}
```

#### GET `/properties/:id`

Returns one property. Pending/rejected properties are visible only to admins or the listing owner.

#### POST `/properties`

Protected. Creates a property. Normal user listings start as `pending`; admin listings may be created as `approved`.

Request:

```json
{
  "title": "Lake View Apartment",
  "description": "Bright apartment close to transit.",
  "location": "Pune",
  "address": "12 Lake Road, Pune",
  "price": 28000,
  "type": "Apartment",
  "bedrooms": 2,
  "bathrooms": 2,
  "imageUrl": "https://example.com/home.jpg",
  "amenities": ["WiFi", "Parking"]
}
```

#### PUT `/properties/:id`

Protected. Admin can update any property. Users can update their own properties; user edits return the listing to `pending`.

#### DELETE `/properties/:id`

Protected. Admin can delete any property. Users can delete their own properties.

#### PATCH `/properties/:id/status`

Admin only.

Request:

```json
{
  "status": "approved"
}
```

#### GET `/properties/admin/stats`

Admin only. Returns total, approved, pending, and rejected property counts.

### Booking Routes

#### GET `/bookings`

Protected. Users see their own bookings; admins see all bookings.

#### POST `/bookings`

Protected. Creates a booking for an approved property.

Request:

```json
{
  "propertyId": "66...",
  "moveInDate": "2026-07-15",
  "durationMonths": 6,
  "notes": "Would like to schedule a visit this weekend."
}
```

Response:

```json
{
  "booking": {
    "_id": "66...",
    "status": "pending",
    "durationMonths": 6,
    "property": {
      "title": "Lake View Apartment",
      "location": "Pune",
      "price": 28000
    }
  }
}
```

#### PATCH `/bookings/:id/status`

Protected. Admin can set `pending`, `confirmed`, or `cancelled`. Users can cancel or mark their own bookings pending, but cannot confirm bookings.

Request:

```json
{
  "status": "confirmed"
}
```

## GitHub Readiness Notes

- `.env.example` files are included; real secrets are ignored by `.gitignore`.
- Backend code is separated into controllers, routes, models, middleware, config, and seeders.
- Frontend code is separated into pages, components, context, services, and utilities.
- Root scripts support installing, seeding, developing, and building with minimal setup.
