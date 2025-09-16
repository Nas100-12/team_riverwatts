# Card Component Specifications

## Base Card
- **Background**: Linear gradient rgba(255, 255, 255, 0.9) to rgba(248, 250, 252, 0.8)
- **Border**: 1px solid rgba(226, 232, 240, 0.6)
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: 0 1px 2px rgba(0, 0, 0, 0.05)
- **Backdrop Filter**: blur(10px) (glass morphism)

## Card Variants

### Modern Card (Default)
- Glass morphism background
- Subtle border
- Soft shadow
- **Hover**: Shadow increase to 0 8px 25px rgba(0, 0, 0, 0.1)

### Stat Card
- **Header**: Icon + Title
- **Value**: Large number (32px, Bold)
- **Change**: Small text with trend indicator
- **Layout**: Vertical stack with 16px gaps

### Feature Card
- **Icon**: 48x48px with gradient background
- **Title**: 18px Semibold
- **Description**: 14px Regular
- **Layout**: Vertical with 16px gaps

### Alert Card
- **Left Border**: 4px colored border (red/yellow/blue)
- **Icon**: Status icon
- **Content**: Title + Description
- **Actions**: Button group

## Card Sizes

### Compact
- **Padding**: 16px
- **Min Height**: 120px

### Standard
- **Padding**: 24px
- **Min Height**: 160px

### Large
- **Padding**: 32px
- **Min Height**: 200px

## Card States

### Default
- Normal appearance

### Hover
- **Shadow**: 0 8px 25px rgba(0, 0, 0, 0.1)
- **Transform**: translateY(-2px)
- **Transition**: 200ms ease

### Active/Selected
- **Border**: 2px solid #2563eb
- **Background**: Slight blue tint

### Loading
- **Skeleton**: Animated placeholder content
- **Opacity**: 0.7

## Card Layouts

### Grid Card
- **Width**: Flexible (1fr in grid)
- **Aspect Ratio**: Maintain proportions
- **Gap**: 24px between cards

### List Card
- **Width**: 100%
- **Horizontal Layout**: Icon + Content + Actions
- **Padding**: 16px 24px

## Figma Component Properties
```
Variant: Modern | Stat | Feature | Alert
Size: Compact | Standard | Large
State: Default | Hover | Active | Loading
Layout: Grid | List
Border: None | Colored (for alerts)
```

## Content Structure
```
Card Container
├── Header (Optional)
│   ├── Icon
│   └── Title
├── Body
│   ├── Main Content
│   └── Description
└── Footer (Optional)
    └── Actions
```