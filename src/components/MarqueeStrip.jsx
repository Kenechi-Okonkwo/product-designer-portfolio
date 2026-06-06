// Import React — required for JSX
import React from 'react'

// Words/phrases displayed in the marquee strips
// Duplicated inside the component to create the seamless infinite loop illusion
const keywords = [
  'UI Design', 'UX Research', 'Figma', 'React', 'Product Thinking',
  'Prototyping', 'Design Systems', 'User Testing', 'Tailwind CSS',
  'Information Architecture', 'Wireframing', 'Interaction Design',
]

// A small diamond separator rendered between each keyword
function Separator() {
  return (
    // aria-hidden hides the decoration from screen readers
    <span className="mx-4 text-accent opacity-50" aria-hidden="true">◆</span>
  )
}

function MarqueeStrip() {
  // Double the keywords array so the marquee can scroll seamlessly:
  // When the first copy scrolls off-screen, the second copy fills its place,
  // and CSS animation resets the position — making it look infinite.
  const doubled = [...keywords, ...keywords]

  return (
    // Outer section — acts as the visual boundary for both marquee rows
    // overflow-hidden clips the text that scrolls beyond the edges
    <section className="border-y border-border overflow-hidden py-4 bg-surface/30" aria-hidden="true">

      {/* ── ROW 1 — scrolls left ────────────────────────────────────────── */}
      <div className="relative flex">
        {/* Inner flex row — animate-marquee moves it left continuously */}
        <div className="flex items-center animate-marquee whitespace-nowrap will-change-transform">
          {doubled.map((word, i) => (
            // Each keyword + separator pair; key uses index since duplicated words exist
            <span key={i} className="flex items-center text-sm font-medium text-muted uppercase tracking-widest">
              {word}
              <Separator />
            </span>
          ))}
        </div>
      </div>

      {/* ── ROW 2 — scrolls right (reverse direction) ──────────────────── */}
      <div className="relative flex mt-3">
        {/* animate-marquee-reverse scrolls from -50% back to 0% (opposite direction) */}
        <div className="flex items-center animate-marquee-reverse whitespace-nowrap will-change-transform">
          {/* Reversed order of keywords for visual variety */}
          {[...doubled].reverse().map((word, i) => (
            <span key={i} className="flex items-center text-sm font-medium text-accent/40 uppercase tracking-widest">
              {word}
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Export so App.jsx can render it between Hero and About
export default MarqueeStrip
