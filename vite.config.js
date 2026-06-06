// Import the defineConfig helper from Vite for type-safe configuration
import { defineConfig } from 'vite'

// Import the official Vite plugin for React (enables JSX transform + Fast Refresh)
import react from '@vitejs/plugin-react'

// Export the Vite configuration object
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages — sets the asset base path to the repo name
  base: '/new-ai-port/',
})
