import type { Language, PageId } from '../../App'
import './Navbar.css'

type NavbarProps = {
  activePage: PageId
  language: Language
  onLanguageChange: (language: Language) => void
}

const labels: Record<Language, Record<PageId, string>> = {
  es: { inicio: 'Inicio', 'sobre-mi': 'Sobre mí', proyectos: 'Proyectos', contacto: 'Contacto' },
  en: { inicio: 'Home', 'sobre-mi': 'About', proyectos: 'Projects', contacto: 'Contact' },
}

const pageIds: PageId[] = ['inicio', 'sobre-mi', 'proyectos', 'contacto']

export function Navbar({ activePage, language, onLanguageChange }: NavbarProps) {
  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <div className="navbar__links">
          {pageIds.map((id) => (
            <a
              className={`navbar__link ${activePage === id ? 'is-active' : ''}`}
              href={`#${id}`}
              aria-current={activePage === id ? 'page' : undefined}
              key={id}
            >
              <span className="navbar__label">{labels[language][id]}</span>
            </a>
          ))}
        </div>
        <div className="navbar__actions">
          <button
            className="navbar__language"
            type="button"
            onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
            aria-label={language === 'es' ? 'Switch to English' : 'Switch to Spanish'}
          >
            <svg className="navbar__language-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 12h18M12 3c2.4 2.7 3.6 5.7 3.6 9s-1.2 6.3-3.6 9c-2.4-2.7-3.6-5.7-3.6-9s1.2-6.3 3.6-9z" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {language === 'es' ? 'English' : 'Spanish'}
          </button>
          <a className="navbar__pill" href="#contacto">
            {language === 'es' ? 'Contactarme' : 'Contact'}
          </a>
        </div>
      </nav>
    </header>
  )
}
