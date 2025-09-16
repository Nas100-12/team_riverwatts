# Color Consistency Implementation TODO

## Overview
Update all dashboard components to use consistent modern blue color scheme matching the landing page.

## Color Palette Reference
- **Primary Dark**: `blue-800` (replaces `#014174`)
- **Primary Medium**: `blue-600` (replaces `#0a8ac6`) 
- **Gradients**: `from-blue-800 to-blue-600`
- **Text Headers**: `text-blue-800`
- **Icons**: `text-blue-600`
- **Buttons**: `bg-gradient-to-r from-blue-800 to-blue-600`

## Files to Update

### 1. Sidebar Component
- [ ] `src/app/components/Sidebar.tsx`
  - Update active link colors
  - Update hover states
  - Update brand/logo colors
  - Update navigation icons

### 2. Admin Dashboard Pages
- [x] `src/app/admin/dashboard/page.tsx` ✅ COMPLETED
- [ ] `src/app/admin/devices/page.tsx`
- [ ] `src/app/admin/performance/page.tsx`
- [ ] `src/app/admin/maintenance/page.tsx`
- [ ] `src/app/admin/alerts/page.tsx`
- [ ] `src/app/admin/map/page.tsx`
- [ ] `src/app/admin/data/page.tsx`
- [ ] `src/app/admin/security/page.tsx`
- [ ] `src/app/admin/settings/page.tsx`

### 3. UI Components
- [ ] `src/app/components/ui/button.tsx` - Update primary button styles
- [ ] `src/app/components/ui/badge.tsx` - Update badge variants
- [ ] `src/app/components/Navigation.tsx` - Update navigation colors
- [ ] `src/app/components/GoogleMap.tsx` - Update map styling

### 4. Global Styles
- [ ] `src/app/globals.css` - Update CSS custom properties and utility classes

## Specific Updates Needed

### Color Replacements
```
OLD → NEW
#014174 → blue-800
#0a8ac6 → blue-600
gradient-primary → from-blue-800 to-blue-600
text-[#014174] → text-blue-800
text-[#0a8ac6] → text-blue-600
```

### Component Patterns
- Headers: `text-blue-800`
- Icons: `text-blue-600`
- Primary buttons: `bg-gradient-to-r from-blue-800 to-blue-600`
- Cards: Maintain current styling with updated accent colors
- Progress bars: Update fill colors to blue variants

## Priority Order
1. **HIGH**: Sidebar component (most visible)
2. **HIGH**: Button and Badge UI components (used everywhere)
3. **MEDIUM**: Individual admin pages
4. **LOW**: Global CSS utilities

## Implementation Notes
- Test each component after updates
- Ensure accessibility contrast ratios are maintained
- Keep hover and focus states consistent
- Preserve existing functionality while updating colors