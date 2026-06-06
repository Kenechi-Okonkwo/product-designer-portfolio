/** @type {import('tailwindcss').Config} */
// Export the Tailwind configuration object
export default {
  // Tell Tailwind which files to scan for class names so unused styles are purged in production
  content: [
    "./index.html",           // Scan the root HTML file
    "./src/**/*.{js,jsx}",    // Scan all JS and JSX files inside src/
  ],

  theme: {
    extend: {
      // Custom color palette for the portfolio
      colors: {
        // Deep dark background — almost pure black
        bg: '#080808',

        // Card and section surface colors
        surface: {
          DEFAULT: '#111111',   // Standard card background
          raised: '#1a1a1a',    // Slightly elevated card (hover state, modals)
        },

        // Accent color — purple-500 family (primary interactive color)
        accent: {
          DEFAULT: '#a855f7',   // Base accent (purple-500)
          light: '#d8b4fe',     // Light variant for text-on-dark (purple-300)
          dark: '#7c3aed',      // Dark variant for hover states (violet-600)
        },

        // Border color — subtle separator between elements
        border: '#222222',

        // Muted text — secondary information, labels
        muted: '#737373',
      },

      // Custom font families
      fontFamily: {
        // Display font for headings — geometric, modern
        display: ['Space Grotesk', 'sans-serif'],
        // Body font — clean and highly legible
        sans: ['Inter', 'sans-serif'],
      },

      // Custom animation definitions
      animation: {
        // Marquee scrolls content to the left continuously
        'marquee': 'marquee 30s linear infinite',
        // Reverse marquee scrolls content to the right
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        // Blob pulse — gentle scale animation for decorative shapes
        'blob': 'blob 8s ease-in-out infinite',
      },

      // Keyframe definitions for custom animations
      keyframes: {
        // Scrolls the element from its natural position to -50% (half its duplicated width)
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Reverse direction for the second marquee row
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        // Organic morphing shape animation for decorative blobs
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
        },
      },
    },
  },

  // No additional Tailwind plugins needed for this project
  plugins: [],
}
