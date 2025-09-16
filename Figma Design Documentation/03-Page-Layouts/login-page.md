# Login Page Layout Specifications

## Page Structure
```
┌─────────────────────────────────────────────────────────┐
│                  Full Screen Layout                     │
│  ┌─────────────────┐    ┌─────────────────────────────┐ │
│  │                 │    │                             │ │
│  │   Left Panel    │    │        Right Panel          │ │
│  │   (Branding)    │    │      (Login Form)           │ │
│  │                 │    │                             │ │
│  │                 │    │                             │ │
│  └─────────────────┘    └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Overall Layout
- **Height**: 100vh
- **Background**: Dark gradient with animated particles
- **Layout**: 2-column split (50/50 on desktop)

## Background
- **Base**: Linear gradient #0f172a to #1e293b
- **Overlay**: Animated floating particles
- **Pattern**: Subtle geometric overlay

## Left Panel (Branding)
- **Width**: 50% (desktop), hidden (mobile)
- **Background**: Darker gradient with blue accents
- **Content**: Centered vertically

### Branding Content
- **Logo**: Large RiverWatts logo (120px height)
- **Title**: "Hydrokinetic Energy Management"
- **Subtitle**: "Monitor, Control, Optimize"
- **Features List**: 3-4 key features with icons
- **Illustration**: Abstract energy/water graphics

### Typography
- **Title**: Inter Bold 48px, White
- **Subtitle**: Inter Regular 24px, rgba(255, 255, 255, 0.8)
- **Features**: Inter Medium 18px, rgba(255, 255, 255, 0.9)

## Right Panel (Login Form)
- **Width**: 50% (desktop), 100% (mobile)
- **Background**: Glass morphism card
- **Position**: Centered vertically and horizontally

### Form Container
- **Width**: 400px max
- **Padding**: 48px
- **Background**: rgba(255, 255, 255, 0.95)
- **Border Radius**: 24px
- **Backdrop Filter**: blur(20px)
- **Shadow**: 0 20px 25px rgba(0, 0, 0, 0.1)

### Form Header
- **Logo**: Small logo (40px)
- **Title**: "Welcome Back"
- **Subtitle**: "Sign in to your account"
- **Gap**: 24px between elements

### Form Fields
- **Username Input**:
  - Label: "Username"
  - Placeholder: "Enter your username"
  - Icon: User icon (left)
  
- **Password Input**:
  - Label: "Password"
  - Placeholder: "Enter your password"
  - Icon: Lock icon (left), Eye toggle (right)

- **Field Gap**: 24px
- **Input Height**: 52px
- **Input Styling**: Glass morphism with subtle borders

### Form Actions
- **Login Button**: 
  - Full width
  - Height: 52px
  - Gradient background
  - Text: "Sign In"
  
- **Remember Me**: Checkbox with label
- **Forgot Password**: Link (right aligned)

### Form Footer
- **Divider**: "or" with lines
- **Alternative Login**: Social login buttons (if needed)
- **Sign Up Link**: "Don't have an account? Sign up"

## Interactive Elements

### Floating Particles
- **Count**: 20-30 particles
- **Size**: 2-8px circles
- **Color**: rgba(59, 130, 246, 0.3)
- **Animation**: Slow float with fade in/out
- **Movement**: Random gentle drift

### Form Animations
- **Page Load**: Form slides in from right
- **Input Focus**: Glow effect and scale
- **Button Hover**: Gradient shift and shadow
- **Error States**: Shake animation

## Responsive Design

### Desktop (1200px+)
- 50/50 split layout
- Full branding panel
- Centered form

### Tablet (768px-1199px)
- 40/60 split
- Condensed branding
- Slightly smaller form

### Mobile (<768px)
- Single column
- Hidden branding panel
- Full-width form
- Reduced padding

## Error States
- **Invalid Credentials**: Red border on inputs, error message
- **Network Error**: Toast notification
- **Loading State**: Button spinner, disabled form

## Success States
- **Login Success**: Green checkmark, redirect animation
- **Form Validation**: Green borders on valid inputs

## Figma Components
```
Login Page
├── Background
│   ├── Gradient Overlay
│   ├── Particle System
│   └── Geometric Pattern
├── Left Panel
│   ├── Logo
│   ├── Branding Text
│   ├── Features List
│   └── Illustration
└── Right Panel
    ├── Form Container
    │   ├── Form Header
    │   ├── Input Fields
    │   ├── Form Actions
    │   └── Form Footer
    └── Glass Morphism Effects
```

## Color Specifications
- **Background Gradient**: #0f172a to #1e293b
- **Form Background**: rgba(255, 255, 255, 0.95)
- **Text Primary**: #1e293b
- **Text Secondary**: #64748b
- **Accent Blue**: #2563eb
- **Success Green**: #16a34a
- **Error Red**: #dc2626