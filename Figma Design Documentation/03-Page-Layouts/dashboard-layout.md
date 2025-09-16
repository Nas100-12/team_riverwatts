# Dashboard Layout Specifications

## Overall Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│                    Top Navigation (80px)                │
├─────────────┬───────────────────────────────────────────┤
│   Sidebar   │              Main Content                 │
│   (256px)   │                                          │
│             │                                          │
│             │                                          │
│             │                                          │
└─────────────┴───────────────────────────────────────────┘
```

## Page Container
- **Max Width**: 1440px
- **Padding**: 32px
- **Margin**: 0 auto
- **Background**: Gradient from slate-50 via blue-50/30 to slate-100

## Content Layout Grid

### Admin Dashboard Main Page
```
Header Section (Full Width)
├── Title + Description (Left)
└── Action Buttons (Right)

Stats Grid (4 columns)
├── System Health Card
├── Geographic Overview Card
└── Performance Metrics (2 cards)

Charts Section (2 columns)
├── Energy Generation Chart (Full Width)
└── System Status + Alerts (Split)
```

### Grid Specifications
- **Columns**: 12-column grid system
- **Gap**: 24px
- **Breakpoints**: 
  - Desktop: 1200px+ (12 cols)
  - Tablet: 768px-1199px (8 cols)
  - Mobile: <768px (4 cols)

## Section Spacing
- **Page Top Padding**: 32px (after navbar)
- **Section Gap**: 48px
- **Component Gap**: 24px
- **Element Gap**: 16px

## Header Section
- **Height**: Auto (min 120px)
- **Layout**: Flex justify-between
- **Title**: H1 with gradient text
- **Description**: Body text below title
- **Actions**: Button group aligned right

## Card Grid Layouts

### 4-Column Grid (Stats)
- **Desktop**: 4 equal columns
- **Tablet**: 2x2 grid
- **Mobile**: 1 column stack

### 3-Column Grid (Features)
- **Desktop**: 3 equal columns
- **Tablet**: 2+1 layout
- **Mobile**: 1 column stack

### 2-Column Grid (Charts)
- **Desktop**: 1fr 1fr
- **Tablet**: 1fr 1fr
- **Mobile**: 1 column stack

## Responsive Breakpoints

### Desktop (1200px+)
- Full sidebar visible
- All columns displayed
- Maximum content width

### Tablet (768px-1199px)
- Sidebar collapses to icons
- Grid adjusts to fewer columns
- Horizontal scroll for tables

### Mobile (<768px)
- Sidebar becomes overlay
- Single column layout
- Cards stack vertically
- Tables become card lists

## Content Areas

### Main Content
- **Margin Left**: 256px (desktop with sidebar)
- **Padding**: 32px
- **Min Height**: calc(100vh - 80px)

### Sidebar Content
- **Width**: 256px
- **Position**: Fixed
- **Height**: calc(100vh - 80px)
- **Top**: 80px

### Page Content
- **Max Width**: 1200px
- **Margin**: 0 auto
- **Padding**: 0 24px (mobile)

## Animation & Transitions
- **Page Load**: Stagger animation for cards (100ms delay each)
- **Hover Effects**: Transform translateY(-2px) for cards
- **Sidebar Toggle**: 300ms ease transition
- **Content Shift**: 300ms ease when sidebar toggles

## Figma Layout Components
```
Page Layout
├── Navigation Bar (Fixed Top)
├── Sidebar (Fixed Left)
└── Main Content
    ├── Page Header
    ├── Content Grid
    │   ├── Stats Section
    │   ├── Charts Section
    │   └── Data Section
    └── Page Footer

Grid System
├── 12 Column Grid
├── Responsive Breakpoints
└── Auto Layout Containers
```