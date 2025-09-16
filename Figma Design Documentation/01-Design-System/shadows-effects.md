# RiverWatts Shadows & Effects System

## Shadow Levels

### Card Shadows
- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Extra Large**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

### Interactive Shadows
- **Button Hover**: `0 4px 12px rgba(37, 99, 235, 0.15)`
- **Card Hover**: `0 8px 25px rgba(0, 0, 0, 0.1)`
- **Focus Ring**: `0 0 0 3px rgba(59, 130, 246, 0.2)`

## Glass Morphism Effects
- **Background**: `rgba(255, 255, 255, 0.9)`
- **Backdrop Filter**: `blur(10px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.2)`

## Gradient Overlays
- **Card Overlay**: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)`
- **Background Pattern**: `linear-gradient(135deg, #f8fafc 0%, rgba(59, 130, 246, 0.03) 50%, #f1f5f9 100%)`

## Border Radius
- **Small**: 6px
- **Medium**: 8px
- **Large**: 12px
- **Extra Large**: 16px
- **Round**: 50%

## Figma Effects
```
Shadow/Small: Drop Shadow, X:0 Y:1 Blur:2 Color:#000000 5%
Shadow/Medium: Drop Shadow, X:0 Y:4 Blur:6 Spread:-1 Color:#000000 10%
Shadow/Large: Drop Shadow, X:0 Y:10 Blur:15 Spread:-3 Color:#000000 10%
Glass/Background: Background Blur 10px, Fill: #FFFFFF 90%
Focus/Ring: Drop Shadow, X:0 Y:0 Blur:0 Spread:3 Color:#3B82F6 20%
```

## Animation Properties
- **Duration**: 200ms (fast), 300ms (normal), 500ms (slow)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Scale**: transform: scale(1.02)
- **Button Press**: transform: scale(0.98)