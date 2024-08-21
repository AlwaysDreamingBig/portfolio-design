/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
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
            hover:'#00e187',
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-fast': 'spin 0.5s linear infinite',  // Faster rotation
        'spin-slow': 'spin 4s linear infinite',   // Slower rotation
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
