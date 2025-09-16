export default function CustomerOverviewPage() {
  return (
    <div className="container-page pt-20" style={{ paddingBottom: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Energy Overview</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        <section className="card" style={{ gridColumn: "span 4" }}>
          <div className="card-header">Status</div>
          <div className="card-body"><span className="badge badge--normal">Normal</span></div>
        </section>
        <section className="card" style={{ gridColumn: "span 4" }}>
          <div className="card-header">Current Output</div>
          <div className="card-body">2.4 kW</div>
        </section>
        <section className="card" style={{ gridColumn: "span 4" }}>
          <div className="card-header">Battery</div>
          <div className="card-body">87%</div>
        </section>
      </div>
    </div>
  );
}


