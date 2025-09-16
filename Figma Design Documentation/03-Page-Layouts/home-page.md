# Home Page Layout Specifications

## Page Structure
```
┌─────────────────────────────────────────────────────────┐
│                    Navigation Bar                       │
├─────────────────────────────────────────────────────────┤
│                    Hero Section                         │
├─────────────────────────────────────────────────────────┤
│                   Stats Section                         │
├─────────────────────────────────────────────────────────┤
│              Technology Showcase                        │
├─────────────────────────────────────────────────────────┤
│                Features Section                         │
├─────────────────────────────────────────────────────────┤
│            Energy Visualization                         │
├─────────────────────────────────────────────────────────┤
│               Testimonials                              │
├─────────────────────────────────────────────────────────┤
│                 FAQ Section                             │
├─────────────────────────────────────────────────────────┤
│                 CTA Section                             │
├─────────────────────────────────────────────────────────┤
│                    Footer                               │
└─────────────────────────────────────────────────────────┘
```

## Hero Section
- **Height**: 100vh (full viewport)
- **Background**: Gradient with animated elements
- **Layout**: Centered content with image/video

### Hero Content
- **Container**: Max-width 1200px, centered
- **Layout**: 2-column (60/40 split)
- **Left**: Text content
- **Right**: Hero image/animation

### Hero Typography
- **Main Headline**: Inter Bold 64px (desktop), 48px (mobile)
- **Subheadline**: Inter Regular 24px (desktop), 18px (mobile)
- **Description**: Inter Regular 18px, max-width 600px
- **CTA Buttons**: Primary + Secondary, 24px gap

## Stats Section
- **Background**: Light gradient
- **Padding**: 80px 0
- **Layout**: 4-column grid (responsive)

### Stat Cards
- **Layout**: Icon + Number + Label
- **Animation**: Count-up on scroll
- **Spacing**: 48px gap between cards

## Technology Showcase
- **Background**: White with subtle pattern
- **Padding**: 120px 0
- **Layout**: 3-column grid

### Technology Cards
- **Size**: Equal height cards
- **Icon**: 64px with colored background
- **Colors**: Purple, Orange, Emerald (different per card)
- **Content**: Title + Description + Learn More link

## Features Section
- **Background**: Gradient blue to slate
- **Padding**: 120px 0
- **Layout**: 3-column grid

### Feature Cards
- **Style**: Glass morphism
- **Icon**: 48px with gradient background
- **Colors**: Purple, Orange, Emerald
- **Animation**: Hover lift effect

## Energy Visualization
- **Background**: Dark with blue accents
- **Padding**: 120px 0
- **Layout**: 2-column (text + visual)

### Content Layout
- **Left**: Explanatory text (40%)
- **Right**: Interactive chart/diagram (60%)
- **Gap**: 80px between columns

## Testimonials
- **Background**: Light gradient
- **Padding**: 120px 0
- **Layout**: 3-column grid

### Testimonial Cards
- **Style**: White cards with shadows
- **Content**: Quote + Avatar + Name + Role
- **Avatar**: 64px circle
- **Quote**: Italic text with quotation marks

## FAQ Section
- **Background**: White
- **Padding**: 120px 0
- **Layout**: Single column, max-width 800px

### FAQ Items
- **Style**: Accordion with smooth animations
- **Question**: Bold text with expand icon
- **Answer**: Regular text with fade-in animation

## CTA Section
- **Background**: Dark with topographic pattern
- **Padding**: 120px 0
- **Layout**: Centered content

### CTA Content
- **Title**: Large white text
- **Description**: Light gray text
- **Buttons**: Primary + Secondary
- **Background**: Floating particles animation

## Footer
- **Background**: Very dark (slate-950 to blue-950)
- **Padding**: 80px 0 40px 0
- **Layout**: 4-column grid + bottom bar

### Footer Sections
- **Company Info**: Logo + description
- **Quick Links**: Navigation links
- **Services**: Service links
- **Contact**: Contact information + social icons

## Responsive Breakpoints

### Desktop (1200px+)
- Full multi-column layouts
- Large typography
- Full-size images

### Tablet (768px-1199px)
- 2-column layouts become stacked
- Medium typography
- Adjusted spacing

### Mobile (<768px)
- Single column layouts
- Smaller typography
- Reduced padding
- Stacked elements

## Animation Specifications

### Scroll Animations
- **Fade In**: Elements appear on scroll
- **Slide Up**: Cards slide up with stagger
- **Count Up**: Numbers animate on view
- **Parallax**: Background elements move slower

### Hover Animations
- **Card Lift**: Transform translateY(-8px)
- **Button Hover**: Scale and shadow increase
- **Image Zoom**: Subtle scale on hover

### Loading Animations
- **Page Load**: Stagger animation for sections
- **Image Load**: Fade in when loaded
- **Chart Load**: Draw-in animation

## Figma Page Structure
```
Home Page
├── Navigation
├── Hero Section
│   ├── Hero Content
│   ├── Hero Image
│   └── CTA Buttons
├── Stats Section
│   └── Stat Cards (4x)
├── Technology Showcase
│   └── Tech Cards (3x)
├── Features Section
│   └── Feature Cards (3x)
├── Energy Visualization
│   ├── Content Text
│   └── Chart/Diagram
├── Testimonials
│   └── Testimonial Cards (3x)
├── FAQ Section
│   └── FAQ Items
├── CTA Section
│   ├── CTA Content
│   └── Action Buttons
└── Footer
    ├── Footer Columns (4x)
    └── Footer Bottom
```

## Content Guidelines
- **Headings**: Clear hierarchy with consistent sizing
- **Body Text**: Readable line height (1.6)
- **CTAs**: Action-oriented language
- **Images**: High quality, consistent style
- **Icons**: Consistent style and sizing
- **Spacing**: Generous whitespace for readability