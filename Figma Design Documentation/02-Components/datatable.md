# DataTable Component Specifications

## Table Container
- **Background**: Glass morphism rgba(255, 255, 255, 0.5)
- **Border**: 1px solid rgba(226, 232, 240, 0.6)
- **Border Radius**: 12px
- **Backdrop Filter**: blur(10px)
- **Shadow**: 0 1px 2px rgba(0, 0, 0, 0.05)

## Table Header Controls
- **Height**: 64px
- **Padding**: 16px 24px
- **Background**: Gradient rgba(248, 250, 252, 0.8) to rgba(59, 130, 246, 0.04)
- **Border Bottom**: 1px solid rgba(226, 232, 240, 0.6)

### Search Input
- **Width**: 320px
- **Height**: 40px
- **Left Icon**: Search (16px)
- **Background**: rgba(255, 255, 255, 0.8)
- **Border**: 1px solid #cbd5e1
- **Focus**: Border #2563eb, Ring rgba(59, 130, 246, 0.2)

### Action Buttons
- **Filter Button**: Gradient slate-50 to slate-100, Border slate-300
- **Export Button**: Gradient blue-50 to indigo-50, Border blue-300
- **Gap**: 12px between buttons

### Export Dropdown
- **Width**: 192px
- **Background**: White
- **Border Radius**: 12px
- **Shadow**: 0 10px 15px rgba(0, 0, 0, 0.1)
- **Item Height**: 40px
- **Item Padding**: 12px 16px

## Filter Panel
- **Background**: Gradient rgba(248, 250, 252, 0.5) to rgba(59, 130, 246, 0.03)
- **Padding**: 24px
- **Border Radius**: 12px
- **Border**: 1px solid rgba(226, 232, 240, 0.6)
- **Backdrop Filter**: blur(10px)

### Filter Grid
- **Columns**: 3 (desktop), 2 (tablet), 1 (mobile)
- **Gap**: 16px
- **Label**: Inter Semibold 14px, Color #374151
- **Input**: Same as search input specs

## Table Structure

### Table Head
- **Background**: Gradient rgba(248, 250, 252, 0.8) to rgba(59, 130, 246, 0.04)
- **Height**: 56px
- **Padding**: 16px 24px
- **Border Bottom**: 1px solid rgba(226, 232, 240, 0.6)

### Column Headers
- **Font**: Inter Semibold 14px
- **Color**: #1e293b
- **Sortable**: Hover color #1d4ed8
- **Sort Icon**: 16px chevron, Color #2563eb (active), #94a3b8 (inactive)

### Table Body
- **Row Height**: 64px
- **Padding**: 16px 24px
- **Border**: 1px solid rgba(241, 245, 249, 0.8)

### Row States
- **Default**: Transparent background
- **Hover**: Gradient rgba(59, 130, 246, 0.03) to rgba(248, 250, 252, 0.03)
- **Selected**: Background rgba(219, 234, 254, 0.3)
- **Striped**: Alternate rows rgba(248, 250, 252, 0.3)

### Cell Content
- **Font**: Inter Regular 14px
- **Color**: #475569
- **Vertical Align**: Middle
- **Text Overflow**: Ellipsis for long content

## Pagination
- **Height**: 64px
- **Background**: Gradient rgba(248, 250, 252, 0.5) to rgba(59, 130, 246, 0.03)
- **Padding**: 16px 24px
- **Border Top**: 1px solid rgba(226, 232, 240, 0.6)
- **Border Radius**: 0 0 12px 12px

### Pagination Controls
- **Info Text**: Inter Medium 14px, Color #475569
- **Page Numbers**: Blue-100 background, Blue-800 text
- **Navigation Buttons**: White background, Slate-300 border
- **Gap**: 12px between elements

## Data Visualization

### Status Badges
- **Height**: 24px
- **Padding**: 4px 8px
- **Border Radius**: 6px
- **Font**: Inter Medium 12px

#### Badge Variants
- **Success**: Background #dcfce7, Text #166534, Border #bbf7d0
- **Warning**: Background #fef3c7, Text #92400e, Border #fde68a
- **Error**: Background #fee2e2, Text #991b1b, Border #fecaca
- **Info**: Background #dbeafe, Text #1e40af, Border #bfdbfe

### Progress Bars
- **Height**: 8px
- **Background**: #e2e8f0
- **Fill**: Linear gradient #2563eb to #3b82f6
- **Border Radius**: 4px

### Action Buttons
- **Size**: 32x32px
- **Border Radius**: 6px
- **Icon**: 16px
- **Gap**: 4px between buttons

## Responsive Behavior

### Desktop (1200px+)
- Full table layout
- All columns visible
- Horizontal scroll if needed

### Tablet (768px - 1199px)
- Condensed columns
- Some columns may be hidden
- Horizontal scroll

### Mobile (< 768px)
- Card layout instead of table
- Stack information vertically
- Swipe actions for row actions

## Figma Components
```
DataTable
├── Table Container
├── Header Controls
│   ├── Search Input
│   ├── Filter Button
│   └── Export Dropdown
├── Filter Panel
├── Table
│   ├── Table Head
│   │   └── Column Header (Sortable/Non-sortable)
│   └── Table Body
│       ├── Table Row (Default/Hover/Selected)
│       └── Table Cell
│           ├── Text Cell
│           ├── Badge Cell
│           ├── Progress Cell
│           └── Action Cell
└── Pagination
    ├── Info Text
    ├── Page Numbers
    └── Navigation Buttons
```