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
        <button className="navbar__language" type="button" onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')} aria-label={language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'}>
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>
    </header>
  )
}
