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
    headline: 'We understand that language is\nthe fundamental aspect of human identity',
    subtext: 'As the product designer on Pluritongues, I approached this project with a simple belief: language ability isn\'t fixed by age or background, it\'s learnable, given the right approach. That belief shaped every design decision that followed. Rather than treating African language learning as a checklist of vocabulary and grammar drills, my goal was to design an experience that felt engaging enough to sustain real motivation, and culturally grounded enough to make the languages feel alive rather than abstracted. The product\'s job, as I saw it, was to lower the barrier to entry, making it easier for people to start, stick with it, and build genuine connection across cultures along the way.',
    image: 'assets/img/PT/PTCoverPage.png',
    images: [],
    overviewTitle: 'Overview',
    overviewText: 'Africa holds roughly a third of the world\'s languages, yet UNESCO classifies nearly 428 of them as endangered, concentrated in central and equatorial regions. Colonial-era policy, urban migration, and shifting generational priorities are eroding even widely-spoken languages. Igbo, my own mother tongue and spoken by tens of millions, carries this same endangered classification. Speaker count alone doesn\'t guarantee survival.\n\nThe diaspora faces a parallel but different erosion: not policy, but distance and assimilation. Children of immigrants often understand a heritage language passively by the second generation, with no structured, engaging path back to it, just academic disconnection or an unsustainable phone call home.\n\nDesigning from Enugu for a global audience, I had to build something that works both as a genuine entry point on the continent and a reconnection bridge abroad. Pluritongues exists to close that gap, not as a preservation archive, but as an experience vibrant enough that people choose to spend time in these languages.',
    competitorsTitle: 'Competitors',
    competitorsText: 'When I started designing Pluritongues, I needed to be honest about the fact that this isn\'t an empty market. There are real players, some of them well-funded and well-loved. So rather than pretend we\'re inventing a category, I mapped where the existing options sit and where the genuine gaps are.\n\nThe competitors fall into roughly three buckets. First, the global generalists: Duolingo, Mondly, Babbel. Duolingo offers Swahili and Zulu with its signature gamified approach, reaching millions of users worldwide, but African languages are a small afterthought bolted onto a framework built for European ones. Most major platforms were designed around languages like French, Spanish, and German, which share grammar and pronunciation patterns, and they struggle to capture what makes African languages distinct, particularly tonal structure, where the same word at a different pitch means something entirely different. As an Igbo speaker, this is exactly the failure I feel most acutely: a tool that treats Igbo like "Spanish with different words" will never actually teach Igbo.\n\nSecond, the dedicated African-language apps, and this is where the real competition lives. NKENNE positions itself as the premier dedicated African language app, with a community of over 150,000 users across 14 languages including Igbo, Yoruba, Swahili, and Twi, built around lessons from accredited educators plus community chat, podcasts, and music. Its LiiVE feature offers one-on-one sessions with native-speaking tutors, bridging app-based learning and real conversation. That\'s a serious, well-built product and notably, it already does two of our three pillars (community and tutors). LangaApp is the other direct rival: a free, gamified, bite-size app covering Igbo, Yoruba, Hausa and more, with lessons designed by native speakers and offline mode.\n\nThird, the web-first and niche platforms. Ubuntu Talks offers paid one-on-one tutoring across 14 languages, while others like Zivo and Genii Games (which teaches through gaming) cover a spread of languages for free. These are fragmented, often dated, and rarely mobile-first.\n\nWhere this leaves Pluritongues. The uncomfortable truth I had to sit with is that NKENNE already occupies a lot of the territory I care about: community plus tutors plus a real user base. So our differentiation can\'t just be "we also have a community." For me, the defensible edge has to be in the learning experience itself: the multi-sensory pillar, audio, video, and imagery embedded into interactive stories, is where most of these competitors are still thin. Most are still flashcard-and-lesson formats with community grafted on top. If Pluritongues makes the actual moment-to-moment learning more immersive and narrative-driven, and pairs that with the cultural specificity these languages demand (tone, context, motif) rather than a flattened pan-African template, that\'s a real wedge. Community and tutors are table stakes now; the quality and texture of the content is the fight.',
    appOverviewTitle: 'App Overview',
    appOverviewText: 'Pluritongues is a mobile first language learning platform built for African languages, designed to feel less like a study tool and more like a doorway into a living culture. As the product designer, I approached every feature with one test: does this make someone want to come back tomorrow, or does it feel like an obligation?\n\nThe experience is built around three core pillars. The first is multi-sensory learning, audio, video, and imagery are woven directly into interactive activities and stories, so a learner isn\'t memorizing isolated words but absorbing language the way it\'s actually lived: spoken with rhythm, seen in context, tied to a narrative they want to follow to the end. I leaned on this deliberately because language retention sticks better when it\'s attached to a story or a sound rather than a flashcard.\n\nThe second is language partners and community, direct connection with other learners and native speakers, so practice becomes conversation rather than one-directional content consumption. This was non-negotiable for me; a language without people to use it with stays abstract no matter how good the lesson design is.\n\nThe third is language tutors, dedicated, experienced instructors who guide learners past what self-paced content alone can offer, bringing cultural fluency that comes from having lived inside a language, not just studied it. That standard came directly from my own relationship with Igbo; fluency was never just grammar to me.\n\nVisually, I anchored the brand around a confident, approachable blue (#169FED), and icon and UI details were designed around specific cultural motifs rather than generic global app conventions. Each language was meant to feel distinct, not flattened into a single template. Progress-sharing was written as a social, celebratory act rather than a private streak counter, because if the product\'s mission is connection, its own mechanics needed to reflect that.\n\nTogether, these pillars hold three things in tension that most language apps treat as separate problems: immersive content, human connection, and guided expertise built into one experience designed to feel personal rather than mass-produced.',
    goalsTitle: 'Goals',
    goalsText: 'These three pillars aren\'t abstract values I inherited from a brief, they came out of my own frustration with how most language apps treat learning as a solo grind against a leaderboard. As the designer behind Pluritongues, I wanted the product to feel like the opposite of that.\n\nCommunity came first because language without people is just vocabulary. I designed the platform so learners interact with native speakers directly, not just consume pre-recorded content. When I was working through the UX copy for our progress-sharing feature, the goal was specifically to make learning feel visible and social, something you share with others rather than something you do alone in a tab.\n\nFun and interactive activities mattered to me because I\'ve watched too many learners (myself included, when I\'ve tried picking up a new language) abandon apps the moment they start feeling like homework. Every interaction I designed, down to icon choices and the small visual details, was meant to keep the experience feeling alive rather than clinical.\n\nAnd dedicated, experienced teachers matter to me personally because of my own relationship with Igbo. Fluency in a language isn\'t just grammar; it\'s the cultural fluency that comes from someone who\'s lived inside the language, not just studied it. That\'s the standard I held the product to.\n\nIf I\'m honest, this project is as much about closing a gap I feel in my own life as it is a product brief, and I think that personal stake is part of what makes the design decisions feel intentional rather than generic.',
    headlineImages: [
      'assets/img/PT/PT Headline img-01.png',
      'assets/img/PT/PT Headline img-02.png',
    ],
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
