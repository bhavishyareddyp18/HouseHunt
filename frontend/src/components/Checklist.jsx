import { CheckCircle2, CircleDashed, XCircle } from 'lucide-react';

export const checklistItems = [
  ['JWT authentication', 'User registration/login with token persistence and protected API calls.', 'complete'],
  ['Role-based access control', 'Admin and User roles enforced in backend middleware and frontend routes.', 'complete'],
  ['Property CRUD', 'Create, read, update, delete endpoints and dashboard listing form.', 'complete'],
  ['Search and filters', 'Location, price range, and type filters on public listings.', 'complete'],
  ['Booking system', 'Users can book approved properties and manage booking status.', 'complete'],
  ['Admin approval', 'Admin dashboard includes pending/approved/rejected listing panel.', 'complete'],
  ['bcrypt password hashing', 'Passwords hash through a Mongoose pre-save hook.', 'complete'],
  ['Protected routes', 'Backend JWT middleware and frontend ProtectedRoute are included.', 'complete'],
  ['Seeder data', '10 users, 26 properties, and 12 bookings are generated.', 'complete'],
  ['README API docs', 'Routes and example request/response formats are documented.', 'complete'],
  ['Production-style architecture', 'Separate frontend/backend with models, controllers, routes, middleware, services, pages.', 'complete'],
  ['Missing items', 'No required feature is intentionally omitted.', 'complete']
];

const iconFor = (status) => {
  if (status === 'complete') return <CheckCircle2 className="text-success" />;
  if (status === 'partial') return <CircleDashed className="text-warning" />;
  return <XCircle className="text-danger" />;
};

const Checklist = ({ compact = false }) => (
  <div className="review-grid">
    {checklistItems.map(([title, detail, status]) => (
      <div className="review-item" key={title}>
        {iconFor(status)}
        <div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <strong>{title}</strong>
            <span className={`badge text-bg-${status === 'complete' ? 'success' : status === 'partial' ? 'warning' : 'danger'}`}>
              {status}
            </span>
          </div>
          {!compact && <p className="text-muted mb-0">{detail}</p>}
        </div>
      </div>
    ))}
  </div>
);

export default Checklist;
