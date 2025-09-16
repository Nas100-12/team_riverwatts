export default function AdminDashboardPage() {
  return (
    <div className="container-page pt-20">
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>System Health</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        <section className="card" style={{ gridColumn: "span 4" }}>
          <div className="card-header">Overall Status</div>
          <div className="card-body">
            <span className="badge badge--normal">98% Operational</span>
            <div style={{ marginTop: 12, color: "#555" }}>45/50 turbines online</div>
          </div>
        </section>

        <section className="card" style={{ gridColumn: "span 8" }}>
          <div className="card-header">Geographic Overview</div>
          <div className="card-body">Map placeholder</div>
        </section>

        <section className="card" style={{ gridColumn: "span 8" }}>
          <div className="card-header">Performance Metrics</div>
          <div className="card-body">Charts placeholder</div>
        </section>

        <section className="card" style={{ gridColumn: "span 4" }}>
          <div className="card-header">Alerts</div>
          <div className="card-body">Alert feed placeholder</div>
        </section>
      </div>
    </div>
  );
}


