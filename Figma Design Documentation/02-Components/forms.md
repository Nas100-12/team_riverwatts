# Form Component Specifications

## Input Fields

### Text Input
- **Height**: 44px
- **Padding**: 12px 16px
- **Border**: 1px solid #cbd5e1
- **Border Radius**: 8px
- **Background**: rgba(255, 255, 255, 0.8)
- **Font**: Inter Regular 14px
- **Placeholder**: Color #94a3b8

### Input States
- **Default**: Border #cbd5e1
- **Focus**: Border #2563eb, Ring 0 0 0 3px rgba(59, 130, 246, 0.2)
- **Error**: Border #dc2626, Ring 0 0 0 3px rgba(220, 38, 38, 0.2)
- **Success**: Border #16a34a, Ring 0 0 0 3px rgba(22, 163, 74, 0.2)
- **Disabled**: Background #f1f5f9, Color #94a3b8, Cursor not-allowed

### Input with Icon
- **Left Icon**: Padding left 44px, Icon 20x20px at 12px from left
- **Right Icon**: Padding right 44px, Icon 20x20px at 12px from right
- **Icon Color**: #64748b (default), #2563eb (focus)

## Labels
- **Font**: Inter Medium 14px
- **Color**: #374151
- **Margin Bottom**: 8px
- **Required Indicator**: Red asterisk (*)

## Form Layout

### Field Group
- **Margin Bottom**: 24px
- **Label**: Above input with 8px gap
- **Help Text**: Below input with 4px gap
- **Error Text**: Below input with 4px gap, Color #dc2626

### Form Grid
- **Gap**: 24px horizontal, 24px vertical
- **Columns**: 1 (mobile), 2 (tablet), 3 (desktop)

## Special Inputs

### Search Input
- **Left Icon**: Search icon
- **Placeholder**: "Search..."
- **Width**: 320px (desktop), 100% (mobile)

### Password Input
- **Right Icon**: Eye/Eye-off toggle
- **Type**: password/text toggle

### Select Dropdown
- **Height**: 44px
- **Right Icon**: Chevron down
- **Dropdown**: Glass morphism card with options
- **Option Height**: 40px
- **Option Padding**: 12px 16px

### Checkbox
- **Size**: 20x20px
- **Border**: 2px solid #cbd5e1
- **Border Radius**: 4px
- **Checked**: Background #2563eb, White checkmark
- **Label**: 16px margin left

### Radio Button
- **Size**: 20x20px
- **Border**: 2px solid #cbd5e1
- **Border Radius**: 50%
- **Selected**: Background #2563eb, White dot
- **Label**: 16px margin left

### Toggle Switch
- **Width**: 44px
- **Height**: 24px
- **Background**: #cbd5e1 (off), #2563eb (on)
- **Handle**: 20x20px white circle
- **Border Radius**: 12px

## Form Validation

### Error States
- **Border**: #dc2626
- **Ring**: rgba(220, 38, 38, 0.2)
- **Error Message**: #dc2626, 12px font

### Success States
- **Border**: #16a34a
- **Ring**: rgba(22, 163, 74, 0.2)
- **Success Message**: #16a34a, 12px font

### Loading States
- **Spinner**: Inside input or button
- **Disabled**: All form elements
- **Opacity**: 0.7

## Figma Components
```
Input
├── Text Input (Default/Focus/Error/Success/Disabled)
├── Search Input
├── Password Input
└── Input with Icon

Select
├── Dropdown (Closed/Open)
├── Option Item (Default/Hover/Selected)
└── Multi-select

Checkbox
├── Checkbox (Unchecked/Checked/Indeterminate/Disabled)
└── Checkbox Group

Radio
├── Radio Button (Unselected/Selected/Disabled)
└── Radio Group

Toggle
├── Switch (Off/On/Disabled)
└── Toggle Group

Form Layout
├── Field Group
├── Form Grid
└── Form Actions
```