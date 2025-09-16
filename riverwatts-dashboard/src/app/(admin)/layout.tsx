import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", minHeight: "100vh" }}>
      <aside style={{ borderRight: "1px solid rgba(0,0,0,0.08)", padding: 16 }}>
        <div style={{ fontWeight: 700, marginBottom: 16, color: "var(--river-blue)" }}>RiverWatts</div>
        <nav style={{ display: "grid", gap: 8 }}>
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/devices">Devices</Link>
          <Link href="/admin/maintenance">Maintenance</Link>
          <Link href="/admin/analytics">Analytics</Link>
        </nav>
      </aside>
      <main style={{ padding: 16 }}>
        {children}
      </main>
    </div>
  );
}




