/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
      serif: ['Merriweather', 'ui-serif', 'Georgia'],
      playfair: ['Playfair Display', 'ui-serif', 'Georgia'],
      mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      'source-code': ['Source Code Pro', 'ui-monospace', 'SFMono-Regular'],
      poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
      primary: "var(--font-jetbrainsMono)",
      sevillana: ['Sevillana', 'ui-serif', 'Georgia'],
      jetbrainsmono: ['var(--font-jetbrainsmono)'],
      nerkoOne: ['Nerko One', 'ui-serif', 'Georgia'],
      caveat: ['Caveat', 'sans-serif'],
      'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
      'pixelify-sans': ['Pixelify Sans', 'sans-serif'],
      silkscreen: ['Silkscreen', 'cursive'],
      rubikBubbles: ['Rubik Bubbles', 'cursive'],
      bangers: ['Bangers', 'cursive'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      'sxl': '1400px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-fast': 'spin 0.5s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#1c1c22',
          accent: {
            DEFAULT: '#00ff99',
            hover: '#00e187',
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
