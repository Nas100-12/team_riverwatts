## RiverWatts Monitoring & Customer Portal — Implementation Plan

### 1) Project Scope
- **Admin Suite**: System health, map overview, performance metrics, alerts, environmental data, device management, maintenance console, analytics/reporting.
- **Customer Portal**: Simplified dashboard (status, production, consumption, impact), mobile views, community features, educational resources.
- **Design System**: Colors, typography, interactive elements, data viz standards, responsiveness, accessibility.

### 2) Technology Stack
- **Framework**: Next.js 14+ (App Router) with TypeScript.
- **UI**: Tailwind CSS; iconography via `lucide-react`.
- **Charts**: `recharts` (responsive, lightweight).
- **Maps**: `react-leaflet` + OpenStreetMap (no API key required).
- **State**: React Server Components + client components; `zustand` for client-side view state where helpful.
- **Data**: Mock data via static JSON + server routes; adapter layer to later swap to real APIs.
- **Auth (later)**: NextAuth or enterprise SSO—out of scope for first pass; use stubbed roles.
- **Quality**: ESLint, Prettier, TypeScript strict.
- **Analytics**: Google Analytics integration placeholder (env var driven).

### 3) Architecture
- Monorepo single app for now: `apps/riverwatts-dashboard` (we'll use a single Next app folder `riverwatts-dashboard/`).
- **App Routes**:
  - `/admin` (default to `/admin/dashboard`)
  - `/admin/devices`
  - `/admin/maintenance`
  - `/admin/analytics`
  - `/customer` (default overview)
  - `/education` (customer knowledge base)
  - `/api/*` for mock data endpoints (SSR-friendly)
- **Layout**:
  - Global layout with theme, fonts, and CSS vars for design tokens.
  - Admin layout with left nav and top header; Customer layout with top nav and bottom mobile nav.
- **Modules** (feature folders under `src/app/(admin)` and `src/app/(customer)`): components, hooks, models, services.

### 4) Design System
- **Colors** (CSS variables):
  - `--river-blue: #3A506B` (primary/nav/buttons)
  - `--energy-orange: #F7931E` (alerts/actions)
  - `--clean-white: #FFFFFF` (background)
  - Status: normal `#4CAF50`, warning `#FFC107`, critical `#F44336`, offline `#9E9E9E`
- **Typography**: Inter (Bold for headings, Regular for body), Roboto Mono for technical data.
- **Scale**: H1 40px, H2 32px, H3 24px, Body 16px, Small 14px.
- **Components**: Buttons (primary/secondary), cards, badges (status), tables, tabs, modals, form inputs with validation states.
- **Accessibility**: Focus styles, ARIA labels, color contrast ≥ 4.5:1, keyboard navigation.

### 5) Key Screens & Features (MVP)
- Admin Dashboard
  - System Health Summary (gauge/progress, quick stats)
  - Map overview (clustered markers, status legend)
  - Performance cards (current MW, daily target, efficiency)
  - Alert feed with filters and quick actions
  - Environmental conditions (weather, river flow, temperature)
- Device Management
  - Device table with status, sorting/filtering
  - Device detail drawer/page: metrics (sparklines), maintenance history, settings, sensors
  - Actions: remote config (disabled in MVP), firmware version display
- Maintenance Console
  - Calendar view (read-only MVP), task list, predictive alerts (mock data)
  - Assignment stubs and inventory list
- Analytics & Reporting
  - Trend charts, site comparison, efficiency metrics
  - Export stubs (CSV/PDF buttons disabled)
- Customer Portal
  - Simplified status, production and consumption cards, battery level, impact
  - Mobile bottom nav, swipeable cards (horizontal scroll)
  - Community goals and usage comparison (static)
  - Educational resources page with sections and search stub

### 6) Data Model (MVP)
- Turbine: id, name, siteId, lat, lng, status, powerKw, efficiencyPct
- Site: id, name, region, river, weather snapshot
- Alert: id, severity, message, timestamp, deviceId/siteId, status
- MaintenanceTask: id, deviceId, title, dueDate, priority, assignee, status
- MetricSample: timestamp, deviceId/siteId, productionKw, flowRate, temperature

### 7) APIs (Mock)
- `/api/overview` → system summary, quick stats
- `/api/devices` → list with metrics snapshot
- `/api/devices/[id]` → details
- `/api/alerts` → feed with filter params
- `/api/metrics` → time series (query by device/site, range)
- `/api/maintenance` → tasks

### 8) Performance
- Image and map tile lazy loading
- Dynamic imports for heavy charts/maps
- List virtualization for large tables if needed (future)
- Static generation where possible; server caching for mock endpoints

### 9) Security & Privacy
- No secrets committed; env-driven config.
- Sanitize query params and validate API inputs, even for mock routes.
- Content-Security-Policy baseline.

### 10) Delivery Plan
- Week 1: Scaffolding, design tokens, admin dashboard shell, mock APIs
- Week 2: Device management + maintenance console MVP
- Week 3: Analytics charts + customer portal views
- Week 4: Hardening, a11y, perf, GA, docs, deploy to Vercel/Netlify

### 11) Testing
- Unit: component render, utility functions
- Integration: API routes return shapes, page loads
- Visual: quick regression via Storybook (optional later)

### 12) Deployment
- Vercel recommended (Next.js)
- Preview deployments via PRs (future), environment variables for GA and map options


