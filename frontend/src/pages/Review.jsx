import Checklist from '../components/Checklist';

const Review = () => (
  <section className="container py-5">
    <div className="review-header">
      <span className="eyebrow">Final summary page</span>
      <h1>Project Review Checklist</h1>
      <p>
        This page compares the finished implementation against the original MERN House Rent
        Management System requirements and calls out completion status before handoff.
      </p>
    </div>
    <Checklist />
    <div className="section-panel mt-4">
      <h2 className="h4">Completed Modules</h2>
      <p className="mb-0">
        Backend API, MongoDB models, JWT authentication, RBAC middleware, property CRUD,
        approval workflow, bookings, database seeder, React routing, protected frontend
        pages, dashboards, filters, Bootstrap UI, and README API documentation are included.
        Missing or partial required features: none.
      </p>
    </div>
  </section>
);

export default Review;
