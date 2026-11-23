import { useEffect, useRef, type CSSProperties } from 'react'

const technologies: Record<string, { color: string; glyph: Glyph }> = {
  JavaScript: { color: '#F7DF1E', glyph: 'javascript' },
  Tauri: { color: '#FFC131', glyph: 'tauri' },
  Convex: { color: '#F3A73B', glyph: 'convex' },
  OpenAI: { color: '#10A37F', glyph: 'openai' },
  RAG: { color: '#C4B5FD', glyph: 'rag' },
  'Vector Search': { color: '#8B8BFF', glyph: 'search' },
  Tavily: { color: '#60A5FA', glyph: 'tavily' },
  'AWS Lambda': { color: '#FF9900', glyph: 'lambda' },
  DynamoDB: { color: '#527FFF', glyph: 'database' },
  Comprehend: { color: '#FF9900', glyph: 'comprehend' },
  Python: { color: '#4B8BBE', glyph: 'python' },
  React: { color: '#61DAFB', glyph: 'react' },
  FastAPI: { color: '#009688', glyph: 'fastapi' },
  MongoDB: { color: '#47A248', glyph: 'mongo' },
  Portal: { color: '#7C9CFF', glyph: 'portal' },
  Gemini: { color: '#8E75FF', glyph: 'gemini' },
  Ollama: { color: '#E8E8E3', glyph: 'ollama' },
  Docker: { color: '#2496ED', glyph: 'docker' },
  Memorwise: { color: '#2DD4BF', glyph: 'memorwise' },
  Obsidian: { color: '#A78BFA', glyph: 'obsidian' },
  'Web App': { color: '#E8E8E3', glyph: 'web' },
  'UI/UX': { color: '#F472B6', glyph: 'ui' },
  Finanzas: { color: '#34D399', glyph: 'finance' },
}

type Glyph = keyof typeof glyphs

const glyphs = {
  javascript: <text x="4" y="16" fontSize="9" fontWeight="700">JS</text>,
  tauri: <path d="M12 3 4 8v8l8 5 8-5V8l-8-5zm0 3.2 4.8 3v5.6L12 17.8 7.2 14.8V9.2L12 6.2z" />,
  convex: <path d="M5 16c2-6 4-9 7-9s5 3 7 9" fill="none" stroke="currentColor" strokeWidth="1.8" />,
  openai: <path d="M12 4.5a3 3 0 0 1 2.6 1.5 3 3 0 0 1 2.6 4.5 3 3 0 0 1 0 3 3 3 0 0 1-2.6 4.5A3 3 0 0 1 12 19.5a3 3 0 0 1-2.6-1.5 3 3 0 0 1-2.6-4.5 3 3 0 0 1 0-3 3 3 0 0 1 2.6-4.5A3 3 0 0 1 12 4.5z" fill="none" stroke="currentColor" strokeWidth="1.4" />,
  rag: <path d="M6 6h8l4 4v8H6V6zm8 0v4h4" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  search: <><circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="m15.5 15.5 3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></>,
  tavily: <path d="M12 4 6 18h3l1-2.5h4L15 18h3L12 4zm0 5.2 1.2 3.3h-2.4L12 9.2z" />,
  lambda: <path d="M8 18 14 6h3L10 18H8zm0 0h6" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  database: <><ellipse cx="12" cy="7" rx="6" ry="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M6 7v10c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V7" fill="none" stroke="currentColor" strokeWidth="1.5" /></>,
  comprehend: <path d="M5 15c1.5-4 3.2-6 7-6s5.5 2 7 6" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  python: <><circle cx="9" cy="8" r="1" /><circle cx="15" cy="16" r="1" /><path d="M8 4h5.5A2.5 2.5 0 0 1 16 6.5V10H9.5A2.5 2.5 0 0 0 7 12.5V14H5.5A2.5 2.5 0 0 1 3 11.5V6.5A2.5 2.5 0 0 1 5.5 4H8zm8 16H10.5A2.5 2.5 0 0 1 8 17.5V14h6.5a2.5 2.5 0 0 0 2.5-2.5V10h1.5A2.5 2.5 0 0 1 21 12.5v5A2.5 2.5 0 0 1 18.5 20H16z" /></>,
  react: <><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="currentColor" strokeWidth="1.3" /><ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" /></>,
  fastapi: <path d="M13 3 6 13h5l-1 8 8-11h-5l0-7z" />,
  mongo: <path d="M12 3s4 4.2 4 9-2 7.2-2 7.2S12 21 12 21s-2-1.8-2-1.8S8 16 8 12 12 3 12 3z" />,
  portal: <><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="2.2" /></>,
  gemini: <path d="M12 3c1.2 4.2 3.6 6.6 7.8 7.8C15.6 12 13.2 14.4 12 18.6 10.8 14.4 8.4 12 4.2 10.8 8.4 9.6 10.8 7.2 12 3z" />,
  ollama: <path d="M8 16c0-4 1.6-7 4-7s4 3 4 7H8zm-2 2h12" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  docker: <path d="M4 13h3V10H4v3zm4 0h3V10H8v3zm4 0h3V10h-3v3zM8 9h3V6H8v3zm4 0h3V6h-3v3zM4 16c1.2 2.2 3.4 3 6.2 3 4.2 0 6.8-1.6 8-4.2-1.6.4-3 .2-4.2-.6 1.4-1 2.2-2.4 2.2-4.2h-2.2c0 1.2-.6 2-1.8 2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />,
  memorwise: <path d="M7 7h10v10H7zM9 9h6v6H9z" fill="none" stroke="currentColor" strokeWidth="1.5" />,
  obsidian: <path d="M12 3 5 8.5 12 21l7-12.5L12 3zm0 5.2 2.6 4.4L12 16.2 9.4 12.6 12 8.2z" />,
  web: <><rect x="4" y="5" width="16" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M4 9h16" stroke="currentColor" strokeWidth="1.5" /></>,
  ui: <path d="M5 16 9 6l3 6 2-3 5 7H5z" fill="none" stroke="currentColor" strokeWidth="1.5" />,
  finance: <><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 8v8M9.5 10.2c.6-.8 1.4-1.2 2.5-1.2 1.4 0 2.3.7 2.3 1.7S13.4 12.4 12 12.4 9.7 13.1 9.7 14.1s.9 1.7 2.3 1.7c1.1 0 1.9-.4 2.5-1.2" fill="none" stroke="currentColor" strokeWidth="1.4" /></>,
}

function Mark({ glyph }: { glyph: Glyph }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {glyphs[glyph]}
    </svg>
  )
}

export function StackIcons({ names, label }: { names: string[]; label: string }) {
  const items = names.filter((name) => technologies[name])
  const row = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const element = row.current
    if (!element || items.length <= 4) return

    const mobile = window.matchMedia('(max-width: 900px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let direction = 1
    let paused = false
    let last = performance.now()

    const step = () => {
      const now = performance.now()
      const delta = Math.min(32, now - last)
      last = now
      const max = element.scrollWidth - element.clientWidth
      if (mobile.matches && !reduced.matches && !paused && max > 8) {
        element.scrollLeft += direction * delta * 0.04
        if (element.scrollLeft <= 0) direction = 1
        if (element.scrollLeft >= max - 1) direction = -1
      }
    }

    const pause = () => { paused = true }
    const resume = () => { paused = false }
    element.addEventListener('pointerdown', pause)
    element.addEventListener('pointerup', resume)
    element.addEventListener('pointercancel', resume)
    const timer = window.setInterval(step, 16)

    return () => {
      window.clearInterval(timer)
      element.removeEventListener('pointerdown', pause)
      element.removeEventListener('pointerup', resume)
      element.removeEventListener('pointercancel', resume)
    }
  }, [items.length])

  return (
    <ul
      className={`project-stack${items.length <= 4 ? ' project-stack--fit' : ''}`}
      aria-label={label}
      ref={row}
      style={items.length <= 4 ? { '--stack-count': items.length } as CSSProperties : undefined}
    >
      {items.map((name) => (
        <li
          className="project-stack__item"
          key={name}
          style={{ '--tech': technologies[name].color } as CSSProperties}
        >
          <span className="project-stack__icon">
            <Mark glyph={technologies[name].glyph} />
          </span>
          <span className="project-stack__name">{name}</span>
        </li>
      ))}
    </ul>
  )
}
