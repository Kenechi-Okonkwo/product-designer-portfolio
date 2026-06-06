// projects.js — central data source for all portfolio projects
// Keeping data separate from components makes it easy to add/edit projects without touching UI code

export const projects = [
  {
    id: 1,                                    // Unique identifier used as React list key
    name: 'Pluritongues',                     // Display name of the project
    tagline: 'African Languages Learning Platform', // Short descriptor shown on card
    description:
      'Designed an end-to-end learning experience that makes African language acquisition accessible, engaging, and culturally authentic — bridging the gap between heritage and modern digital education.',
    category: 'design',                       // Used by the filter tabs (design | dev | all)
    tech: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'], // Tech/tools displayed as tags
    // Gradient used as fallback if image fails to load
    gradient: 'from-violet-900 via-purple-800 to-violet-600',
    accentColor: '#a855f7',                   // Matches the gradient for glow effects
    emoji: '🌍',                              // Decorative icon shown on the card
    image: 'assets/img/PT/PTCoverPage.png',
    images: ['assets/img/PT/PTCoverPage.png'],
  },
  {
    id: 2,
    name: 'Evently',
    tagline: 'Ticketing & Vendor Hiring Platform',
    description:
      'Created a unified platform for event discovery, ticket purchasing, and vendor/talent hiring — simplifying the entire event lifecycle from planning to execution for both organizers and attendees.',
    category: 'design',
    tech: ['UI/UX Design', 'Figma', 'UX Research', 'Information Architecture'],
    gradient: 'from-blue-900 via-indigo-800 to-blue-600',
    accentColor: '#6366f1',
    emoji: '🎟️',
    image: 'assets/img/Ticketing.jpg',
    images: ['assets/img/Ticketing.jpg'],
  },
  {
    id: 3,
    name: 'TripMatch',
    tagline: 'Travel Comparison Platform',
    description:
      'Designed a smart travel comparison experience that surfaces personalised flight, hotel, and itinerary options — reducing decision fatigue and making travel planning feel effortless.',
    category: 'design',
    tech: ['UI/UX Design', 'Figma', 'Interaction Design', 'User Testing'],
    gradient: 'from-emerald-900 via-teal-800 to-emerald-600',
    accentColor: '#10b981',
    emoji: '✈️',
    image: 'assets/img/TripMatch/TripMatch.jpg',
    images: ['assets/img/TripMatch/TripMatch.jpg'],
  },
  {
    id: 4,
    name: 'Vanta Business',
    tagline: 'Sales & Inventory Management App',
    description:
      'Built a comprehensive business management application that gives SMEs real-time visibility into sales, stock levels, and revenue — designed for clarity under complex operational data.',
    category: 'design',
    tech: ['Product Design', 'Figma', 'UX Research', 'Prototyping'],
    gradient: 'from-orange-900 via-amber-800 to-orange-600',
    accentColor: '#f59e0b',
    emoji: '📊',
    image: 'assets/img/VantaBusiness/VantaCoverPage.png',
    images: [
      'assets/img/VantaBusiness/VantaCoverPage.png',
      'assets/img/VantaBusiness/theChallenge.png',
      'assets/img/VantaBusiness/ProductObjective.png',
      'assets/img/VantaBusiness/DesignProcess.png',
      'assets/img/VantaBusiness/ProductFeature.png',
    ],
  },
  {
    id: 5,
    name: 'UI Showcase',
    tagline: 'Design Portfolio & UI Exploration',
    description:
      'A curated collection of UI components, visual explorations, and design system fragments — demonstrating versatility in visual design across diverse industries and interaction patterns.',
    category: 'design',
    tech: ['UI Design', 'Figma', 'Visual Design', 'Design Systems'],
    gradient: 'from-pink-900 via-rose-800 to-pink-600',
    accentColor: '#ec4899',
    emoji: '✨',
    image: 'assets/img/Dashboard.png',
    images: [
      'assets/img/Dashboard.png',
      'assets/img/Dashboard Two.png',
    ],
  },
]

// Filter tab definitions — used by the Projects component to render filter buttons
export const filterTabs = [
  { label: 'All Work', value: 'all' },        // Shows every project
  { label: 'Design',   value: 'design' },     // Shows only design projects
  { label: 'Dev',      value: 'dev' },        // Shows only development projects (for future use)
]
