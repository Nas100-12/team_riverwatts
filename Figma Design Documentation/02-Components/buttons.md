# Button Component Specifications

## Button Variants

### Primary Button
- **Background**: Linear gradient #1e40af to #2563eb
- **Text**: White, Inter Medium 14px
- **Padding**: 12px 20px
- **Border Radius**: 8px
- **Shadow**: 0 1px 2px rgba(0, 0, 0, 0.05)
- **Hover**: Gradient #1d4ed8 to #1e40af, Shadow: 0 4px 12px rgba(37, 99, 235, 0.15)

### Secondary Button (Outline)
- **Background**: Transparent
- **Border**: 1px solid #cbd5e1
- **Text**: #475569, Inter Medium 14px
- **Padding**: 12px 20px
- **Border Radius**: 8px
- **Hover**: Background #f8fafc, Border #94a3b8

### Ghost Button
- **Background**: Transparent
- **Text**: #475569, Inter Medium 14px
- **Padding**: 12px 20px
- **Border Radius**: 8px
- **Hover**: Background #f1f5f9

## Button Sizes

### Small
- **Padding**: 8px 16px
- **Font Size**: 12px
- **Height**: 32px

### Medium (Default)
- **Padding**: 12px 20px
- **Font Size**: 14px
- **Height**: 44px

### Large
- **Padding**: 16px 24px
- **Font Size**: 16px
- **Height**: 52px

## Button States

### Default
- Normal appearance as specified above

### Hover
- Slight shadow increase
- Background color shift
- Scale: 1.02 (subtle)

### Active/Pressed
- Scale: 0.98
- Shadow reduction

### Disabled
- Opacity: 0.5
- Cursor: not-allowed
- No hover effects

### Loading
- Show spinner icon
- Text opacity: 0.7
- Disabled interaction

## Icon Buttons
- **Size**: 40x40px (medium), 32x32px (small), 48x48px (large)
- **Icon Size**: 16px (small), 20px (medium), 24px (large)
- **Border Radius**: 8px
- Same color variants as text buttons

## Figma Component Properties
```
Type: Primary | Secondary | Ghost
Size: Small | Medium | Large
State: Default | Hover | Active | Disabled | Loading
Icon: Boolean (true/false)
Text: String
```