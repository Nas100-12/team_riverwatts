# Responsive Design Specifications

## Breakpoint System

### Desktop Large (1440px+)
- **Container**: 1200px max-width
- **Columns**: 12-column grid
- **Sidebar**: 256px fixed
- **Typography**: Full scale
- **Images**: Full resolution

### Desktop (1200px - 1439px)
- **Container**: 1140px max-width
- **Columns**: 12-column grid
- **Sidebar**: 256px fixed
- **Typography**: Full scale
- **Images**: High resolution

### Laptop (992px - 1199px)
- **Container**: 960px max-width
- **Columns**: 10-column grid
- **Sidebar**: 240px fixed
- **Typography**: Slightly reduced
- **Images**: Medium-high resolution

### Tablet (768px - 991px)
- **Container**: 720px max-width
- **Columns**: 8-column grid
- **Sidebar**: Collapsible overlay
- **Typography**: Medium scale
- **Images**: Medium resolution

### Mobile Large (576px - 767px)
- **Container**: 540px max-width
- **Columns**: 6-column grid
- **Sidebar**: Hidden/overlay
- **Typography**: Small scale
- **Images**: Small-medium resolution

### Mobile (320px - 575px)
- **Container**: 100% width, 16px padding
- **Columns**: 4-column grid
- **Sidebar**: Hidden/overlay
- **Typography**: Minimum scale
- **Images**: Small resolution

## Layout Adaptations

### Navigation
#### Desktop (1200px+)
- Full horizontal navigation
- Sidebar always visible
- User menu with dropdown

#### Tablet (768px-1199px)
- Condensed navigation
- Sidebar collapses to icons
- User menu simplified

#### Mobile (<768px)
- Hamburger menu
- Sidebar becomes overlay
- User menu in drawer

### Grid Systems
#### 12-Column (Desktop)
```
[1][2][3][4][5][6][7][8][9][10][11][12]
```

#### 8-Column (Tablet)
```
[1][2][3][4][5][6][7][8]
```

#### 4-Column (Mobile)
```
[1][2][3][4]
```

### Card Layouts
#### Desktop: 4-Column Grid
```
[Card 1] [Card 2] [Card 3] [Card 4]
```

#### Tablet: 2-Column Grid
```
[Card 1] [Card 2]
[Card 3] [Card 4]
```

#### Mobile: 1-Column Stack
```
[Card 1]
[Card 2]
[Card 3]
[Card 4]
```

## Component Responsive Behavior

### DataTable
#### Desktop (1200px+)
- Full table layout
- All columns visible
- Horizontal scroll if needed
- Pagination at bottom

#### Tablet (768px-1199px)
- Condensed columns
- Some columns hidden
- Horizontal scroll
- Simplified pagination

#### Mobile (<768px)
- Card layout instead of table
- Stack information vertically
- Swipe actions
- Load more button

### Forms
#### Desktop
- Multi-column layouts
- Side-by-side fields
- Full-width containers

#### Tablet
- 2-column max
- Stacked complex fields
- Medium containers

#### Mobile
- Single column only
- Full-width fields
- Minimal containers

### Charts
#### Desktop
- Full-size charts
- Multiple charts side-by-side
- Detailed tooltips
- Full legends

#### Tablet
- Medium-size charts
- Charts stack vertically
- Simplified tooltips
- Condensed legends

#### Mobile
- Small charts
- Single chart per row
- Touch-friendly tooltips
- Minimal legends

## Typography Scaling

### Headings
#### Desktop
- H1: 36px
- H2: 30px
- H3: 24px
- H4: 20px

#### Tablet
- H1: 32px
- H2: 26px
- H3: 22px
- H4: 18px

#### Mobile
- H1: 28px
- H2: 24px
- H3: 20px
- H4: 16px

### Body Text
#### Desktop
- Large: 18px
- Base: 16px
- Small: 14px

#### Tablet
- Large: 16px
- Base: 15px
- Small: 13px

#### Mobile
- Large: 16px
- Base: 14px
- Small: 12px

## Spacing Adjustments

### Container Padding
- **Desktop**: 32px
- **Tablet**: 24px
- **Mobile**: 16px

### Section Gaps
- **Desktop**: 48px
- **Tablet**: 40px
- **Mobile**: 32px

### Component Gaps
- **Desktop**: 24px
- **Tablet**: 20px
- **Mobile**: 16px

### Element Gaps
- **Desktop**: 16px
- **Tablet**: 12px
- **Mobile**: 8px

## Interactive Elements

### Buttons
#### Desktop
- Standard sizes
- Hover effects
- Detailed states

#### Tablet
- Slightly larger touch targets
- Reduced hover effects
- Clear active states

#### Mobile
- Minimum 44px touch targets
- No hover effects
- Prominent active states

### Touch Targets
- **Minimum Size**: 44x44px
- **Recommended**: 48x48px
- **Spacing**: 8px minimum between targets

## Figma Responsive Setup

### Frame Sizes
```
Desktop: 1440px width
Laptop: 1024px width
Tablet: 768px width
Mobile: 375px width
```

### Auto Layout Settings
```
Desktop Components:
- Direction: Horizontal
- Gap: 24px
- Padding: 32px

Mobile Components:
- Direction: Vertical
- Gap: 16px
- Padding: 16px
```

### Constraints
- **Text**: Left & Right
- **Images**: Scale
- **Containers**: Left & Right
- **Fixed Elements**: Fixed position

## Testing Checklist
- [ ] All breakpoints display correctly
- [ ] Text remains readable at all sizes
- [ ] Touch targets are adequate on mobile
- [ ] Images scale appropriately
- [ ] Navigation works on all devices
- [ ] Forms are usable on mobile
- [ ] Tables adapt to small screens
- [ ] Charts remain functional