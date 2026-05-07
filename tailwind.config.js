/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "tertiary": "#4cd7f6",
              "on-tertiary": "#003640",
              "on-secondary-fixed-variant": "#3e4852",
              "on-primary-fixed-variant": "#404756",
              "tertiary-container": "#000d11",
              "primary": "#c0c6d9",
              "error": "#ffb4ab",
              "on-primary": "#2a303f",
              "primary-fixed-dim": "#c0c6d9",
              "inverse-on-surface": "#263143",
              "surface-container-highest": "#2a3548",
              "on-secondary": "#28313b",
              "background": "#081425",
              "on-secondary-container": "#acb6c2",
              "surface-dim": "#081425",
              "surface-variant": "#2a3548",
              "tertiary-fixed": "#acedff",
              "surface-container-low": "#111c2d",
              "outline-variant": "#45474c",
              "inverse-primary": "#585e6e",
              "secondary-container": "#3e4852",
              "inverse-surface": "#d8e3fb",
              "secondary-fixed-dim": "#bdc8d3",
              "on-error": "#690005",
              "on-tertiary-fixed-variant": "#004e5c",
              "on-primary-fixed": "#151c29",
              "on-secondary-fixed": "#131d25",
              "on-tertiary-fixed": "#001f26",
              "on-tertiary-container": "#00869c",
              "secondary": "#bdc8d3",
              "outline": "#909096",
              "on-surface-variant": "#c6c6cc",
              "on-error-container": "#ffdad6",
              "error-container": "#93000a",
              "on-surface": "#d8e3fb",
              "primary-fixed": "#dce2f5",
              "on-background": "#d8e3fb",
              "surface-tint": "#c0c6d9",
              "on-primary-container": "#737a8b",
              "surface-container": "#152031",
              "surface-bright": "#2f3a4c",
              "surface-container-high": "#1f2a3c",
              "secondary-fixed": "#dae3f0",
              "tertiary-fixed-dim": "#4cd7f6",
              "surface": "#081425",
              "surface-container-lowest": "#040e1f",
              "primary-container": "#050b18",
              "silver": {
                100: "#f0f0f0", // Added silver color referenced in the code
              }
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "spacing": {
              "unit": "4px",
              "lg": "2.5rem",
              "md": "1.5rem",
              "gutter": "24px",
              "sm": "1rem",
              "xs": "0.5rem",
              "margin-safe": "32px",
              "xl": "4rem"
      },
      "fontFamily": {
              "display-xl": ["Lexend", "sans-serif"],
              "label-caps": ["Inter", "sans-serif"],
              "headline-lg": ["Lexend", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "body-md": ["Inter", "sans-serif"],
              "headline-md": ["Lexend", "sans-serif"],
              "mono-technical": ["Inter", "sans-serif"],
              "lexend": ["Lexend", "sans-serif"]
      },
      "fontSize": {
              "display-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
              "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
              "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
              "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "500"}],
              "mono-technical": ["14px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "500"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
}
