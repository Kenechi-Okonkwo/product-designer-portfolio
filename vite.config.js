// Import the defineConfig helper from Vite for type-safe configuration
import { defineConfig } from 'vite'

// Import the official Vite plugin for React (enables JSX transform + Fast Refresh)
import react from '@vitejs/plugin-react'

// Export the Vite configuration object
export default defineConfig({
  // Register the React plugin so Vite knows how to process .jsx files
  plugins: [react()],
})
