---
name: Surgical Precision
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c6c6cc'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#909096'
  outline-variant: '#45474c'
  surface-tint: '#c0c6d9'
  primary: '#c0c6d9'
  on-primary: '#2a303f'
  primary-container: '#050b18'
  on-primary-container: '#737a8b'
  inverse-primary: '#585e6e'
  secondary: '#bdc8d3'
  on-secondary: '#28313b'
  secondary-container: '#3e4852'
  on-secondary-container: '#acb6c2'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#000d11'
  on-tertiary-container: '#00869c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce2f5'
  primary-fixed-dim: '#c0c6d9'
  on-primary-fixed: '#151c29'
  on-primary-fixed-variant: '#404756'
  secondary-fixed: '#dae3f0'
  secondary-fixed-dim: '#bdc8d3'
  on-secondary-fixed: '#131d25'
  on-secondary-fixed-variant: '#3e4852'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-xl:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-technical:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin-safe: 32px
---

## Brand & Style

This design system targets an elite demographic of professional athletes and high-net-worth individuals seeking the pinnacle of sports medicine. The brand personality is rooted in **surgical precision, high-tech innovation, and athletic dynamism**. It evokes a sense of calm authority and cutting-edge capability, mirroring the environment of a state-of-the-art operating suite or a high-performance training facility.

The visual style is a sophisticated blend of **Glassmorphism** and **Tactile Skeuomorphism**. By utilizing semi-transparent "glass" layers for data and metallic, extruded elements for primary actions, the UI feels like a high-end medical instrument. The aesthetic is punctuated by light—using neon cyan glows to represent energy, healing, and active biological processes against a deep, void-like midnight blue.

## Colors

The color palette is anchored in **Deep Midnight Blue (#050B18)**, providing a high-contrast, premium foundation that reduces eye strain and emphasizes technical data. **Metallic Silver (#CBD5E1)** serves as the primary structural accent, used for borders and iconography to imply durability and sterilized precision.

**Neon Cyan (#06B6D4)** is the functional highlight color. It is used sparingly for interactive states, progress indicators, and "vitality" markers. In this design system, cyan is often paired with a Gaussian blur to create a "glow" effect, simulating the light of a laser or a digital medical display. Gradients should be used on metallic elements to simulate light reflecting off brushed aluminum or steel.

## Typography

The typography system prioritizes extreme legibility and a technical aesthetic. **Lexend** is utilized for headlines; its slightly expanded, athletic proportions communicate confidence and modern movement. For body copy and technical readouts, **Inter** provides a neutral, utilitarian balance that ensures medical data remains clear and indisputable.

Use `label-caps` for category headers and metadata to provide a structured, "file-folder" organization. Headlines should maintain tight letter spacing to feel impactful, while body text requires generous line heights to accommodate complex medical terminology.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a "dashboard" feel, switching to a fluid 4-column system for mobile. A 12-column grid with 24px gutters is the standard. Layouts should be characterized by asymmetrical balance—placing dense technical data on one side and spacious imagery or action cards on the other.

Information density is high but organized. Use "safe areas" of 32px margins to prevent the UI from feeling claustrophobic. Elements should be aligned to a 4px baseline grid to reinforce the theme of surgical precision.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Glassmorphism** to create depth. Surfaces are not defined by shadows alone, but by their level of transparency and internal glow:

1.  **Base (0):** The Midnight Blue background.
2.  **Surface (1):** Semi-transparent glass (Background Blur: 12px) with a 1px Silver border at 20% opacity.
3.  **Raised (2):** Active cards or modals. These feature a 1px Silver border at 40% opacity and a subtle "Inner Glow" of Cyan at the top-left corner.
4.  **Floating (3):** Primary Action Buttons and high-priority alerts. These use "Ambient Shadows" where the shadow color is a dark Cyan, creating a soft neon under-glow.

Depth is also conveyed through "Metallic Sheen"—a diagonal linear gradient on containers that moves slightly on hover to simulate physical material.

## Shapes

The shape language is **Soft (0.25rem)**. This choice maintains the "sharp" feel of medical equipment and surgical tools while providing just enough curvature to feel modern and accessible. 

- **Containers:** Standard cards use 0.25rem (rounded-sm).
- **Interactive Elements:** Buttons and input fields use 0.5rem (rounded-lg) to make them more "touchable" and distinct from structural containers.
- **Data Markers:** Circular shapes are reserved for status indicators (e.g., a pulsing cyan dot for a live heart rate).

## Components

### 3D-Effect Buttons
Primary buttons use a "Skeuomorphic Silver" fill (gradient) with a 1px white top-border to create an extruded look. In their active state, they emit a Neon Cyan outer glow. The text is bold and high-contrast.

### Interactive Glass Cards
Cards feature a `backdrop-filter: blur(16px)`. They are outlined with a thin silver stroke. On hover, the stroke opacity increases, and a subtle cyan light appears to "scan" the top edge of the card.

### Sleek Timeline
The timeline represents a patient's recovery journey or surgical history. It consists of a vertical 1px Silver wire. Milestones are marked by small Silver squares. The "current" or "active" milestone is represented by a Cyan diamond with a persistent pulse animation (halo glow).

### Input Fields
Fields are dark with a bottom-only Silver border. Upon focus, the border transitions to Cyan, and a soft glow illuminates the placeholder text.

### Bio-Metric Chips
Small, capsule-shaped elements used to display vital signs (e.g., "98 BPM"). They feature a Midnight Blue fill and a Cyan glow around the text to simulate a digital monitor.