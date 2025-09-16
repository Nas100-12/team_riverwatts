# Navigation Component Specifications

## Top Navigation Bar
- **Height**: 80px
- **Background**: Glass morphism rgba(255, 255, 255, 0.9)
- **Backdrop Filter**: blur(10px)
- **Border Bottom**: 1px solid rgba(226, 232, 240, 0.6)
- **Padding**: 0 32px
- **Position**: Fixed top

### Navbar Layout
```
Logo (Left) | Navigation Links (Center) | User Menu (Right)
```

### Logo Area
- **Width**: 200px
- **Logo**: RiverWatts text + icon
- **Font**: Inter Bold 24px, Color: #1e40af

### Navigation Links
- **Font**: Inter Medium 14px
- **Color**: #475569
- **Hover**: Color #2563eb
- **Active**: Color #1e40af, underline
- **Spacing**: 32px between links

### User Menu
- **Avatar**: 40x40px circle
- **Name**: Inter Medium 14px
- **Role**: Inter Regular 12px, Color: #64748b
- **Dropdown**: Glass morphism card

## Sidebar Navigation
- **Width**: 256px
- **Background**: Glass morphism rgba(255, 255, 255, 0.95)
- **Border Right**: 1px solid rgba(226, 232, 240, 0.6)
- **Position**: Fixed left
- **Height**: 100vh

### Sidebar Header
- **Height**: 80px (matches navbar)
- **Logo**: Centered
- **Border Bottom**: 1px solid rgba(226, 232, 240, 0.6)

### Menu Items
- **Height**: 48px
- **Padding**: 12px 16px
- **Font**: Inter Medium 14px
- **Icon**: 20x20px, margin right 12px
- **Border Radius**: 8px (when active)

### Menu States
- **Default**: Color #64748b
- **Hover**: Background #f1f5f9, Color #374151
- **Active**: Background linear gradient #dbeafe to #bfdbfe, Color #1e40af
- **Disabled**: Opacity 0.5

## Breadcrumb Navigation
- **Font**: Inter Regular 14px
- **Color**: #64748b
- **Separator**: "/" or chevron icon
- **Active**: Color #1e40af
- **Hover**: Color #2563eb

## Tab Navigation
- **Height**: 48px
- **Border Bottom**: 2px solid #e2e8f0
- **Font**: Inter Medium 14px

### Tab States
- **Default**: Color #64748b, no border
- **Active**: Color #1e40af, border bottom 2px solid #2563eb
- **Hover**: Color #374151

## Mobile Navigation
- **Hamburger Menu**: 24x24px icon
- **Overlay**: Full screen with glass morphism
- **Animation**: Slide in from left
- **Close**: X icon top right

## Figma Components
```
Navbar
├── Logo
├── Nav Links
│   ├── Link Item (Default/Hover/Active)
│   └── Dropdown Menu
└── User Menu
    ├── Avatar
    ├── User Info
    └── Dropdown

Sidebar
├── Header
├── Menu Section
│   ├── Menu Item (Default/Hover/Active/Disabled)
│   └── Menu Divider
└── Footer

Breadcrumb
├── Breadcrumb Item
├── Separator
└── Current Page

Tabs
├── Tab Item (Default/Active/Hover)
└── Tab Content
```