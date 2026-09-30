import type { Config } from "tailwindcss"

export default {
  // Perfect UI 1.0 with Tailwind 3 (perfectui docs/tailwindcss.md):
  // Preflight is off, and the dark variant follows data-pui-mode.
  corePlugins: { preflight: false },
  darkMode: ["selector", '[data-pui-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pui: {
          text: "var(--pui-text)",
          muted: "var(--pui-text-muted)",
          border: "var(--pui-border)",
          theme: "var(--pui-theme)",
          error: "var(--pui-error)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
