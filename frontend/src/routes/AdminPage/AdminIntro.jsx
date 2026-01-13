export default function AdminIntro() {
  return (
    <div className="p-4" style={{ width: "100%", boxSizing: "border-box" }}>
      <div
        className="p-4 shadow-sm rounded-4 border border-light w-100"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
        }}
      >
        <h3 className="text-center fw-bold mb-3">
          Admin Control Panel
        </h3>

        <p className="text-muted text-center mb-4">
          Centralized access to manage institutional data, communication,
          users, events, and academic operations.
        </p>

        <hr />

        <section className="mb-3">
          <h5 className="fw-semibold">Database & Records Management</h5>
          <p className="mb-1">
            View and manage all institutional database tables including
            students, staff, courses, and transactions with secure access.
          </p>
        </section>

        <hr />

        <section className="mb-3">
          <h5 className="fw-semibold">Bulk Email & Notifications</h5>
          <p className="mb-1">
            Send bulk email notifications to students, faculty, or specific
            user groups for announcements, alerts, and updates.
          </p>
        </section>

        <hr />

        <section className="mb-3">
          <h5 className="fw-semibold">Announcements & Events</h5>
          <p className="mb-1">
            Create and publish notices, announcements, and upcoming events
            that are instantly reflected on the student and faculty portals.
          </p>
        </section>

        <hr />

        <section className="mb-3">
          <h5 className="fw-semibold">User Roles & Permissions</h5>
          <p className="mb-1">
            Manage users, assign roles, and control permissions to ensure
            secure and role-based access across the system.
          </p>
        </section>

        <hr />

        <section className="mb-3">
          <h5 className="fw-semibold">Payments & Financial Reports</h5>
          <p className="mb-1">
            Access detailed payment records, transaction history, and
            financial reports for monitoring and auditing purposes.
          </p>
        </section>

        <hr />

        <section>
          <h5 className="fw-semibold">Course & Curriculum Management</h5>
          <p className="mb-0">
            Manage courses, curriculum structures, and academic offerings
            to keep institutional data up to date.
          </p>
        </section>
      </div>
    </div>
  );
}
