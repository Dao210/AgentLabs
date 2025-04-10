
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)',
        'accent-gradient': 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
        'gradient-tech': 'linear-gradient(135deg, rgba(16, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)) 0deg, hsl(var(--accent)) 180deg, hsl(var(--secondary)) 360deg)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
