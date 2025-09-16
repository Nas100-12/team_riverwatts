import Link from "next/link";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: 16, borderBottom: "1px solid rgba(0,0,0,0.08)", fontWeight: 600 }}>
        RiverWatts Portal
      </header>
      <div style={{ flex: 1 }}>{children}</div>
      <nav style={{ position: "sticky", bottom: 0, display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid rgba(0,0,0,0.08)", background: "var(--clean-white)" }}>
        <Link href="/customer">Overview</Link>
        <Link href="/customer/community">Community</Link>
        <Link href="/education">Learn</Link>
      </nav>
    </div>
  );
}


