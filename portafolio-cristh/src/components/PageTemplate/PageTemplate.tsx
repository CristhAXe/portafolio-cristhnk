import type { Language, PageId } from '../../App'
import './PageTemplate.css'

type ContentPage = Exclude<PageId, 'inicio'>

type PageContent = {
  index: string
  eyebrow: string
  title: string
  description: string
  items: { number: string; title: string; text: string }[]
}

type Project = {
  number: string
  title: string
  category: string
  text: string
  stack: string[]
  url: string
  preview: string
}

type Contact = {
  number: string
  title: string
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github'
}

const contacts: Contact[] = [
  { number: '01', title: 'Correo', label: 'znkcristh@protonmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=znkcristh%40protonmail.com', icon: 'mail' },
  { number: '02', title: 'LinkedIn', label: 'Cristhian Nunoncca Kuriaki', href: 'https://www.linkedin.com/in/cristhian-nunoncca-kuriaki/', icon: 'linkedin' },
  { number: '03', title: 'GitHub', label: '@CristhAXe', href: 'https://github.com/CristhAXe', icon: 'github' },
]

function ContactIcon({ icon }: { icon: Contact['icon'] }) {
  if (icon === 'github') {
    return <svg aria-hidden="true"><use href={`${import.meta.env.BASE_URL}icons.svg#github-icon`} /></svg>
  }

  if (icon === 'linkedin') {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-8.5m0 3.5c1-2.2 6-2.4 6 1.5V18" /></svg>
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3.5 6.5h17v12h-17zM4 7l8 6 8-6" /></svg>
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Guestbook',
    category: 'Hackathon / Cloud',
    text: 'Libro de visitas full stack que almacena mensajes y detecta su sentimiento en tiempo real con servicios de AWS.',
    stack: ['AWS Lambda', 'DynamoDB', 'Comprehend', 'Python'],
    url: 'https://github.com/CristhAXe/OPIT-summer-tech-Bootcamp-cloud-project',
    preview: 'guestbook',
  },
  {
    number: '02',
    title: 'incloudy',
    category: 'Realtime Hackathon 2026',
    text: 'Plataforma colaborativa y privada para acompañar casos educativos mediante salas en tiempo real y orientación asistida por IA.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Portal', 'Gemini'],
    url: 'https://github.com/realtime-hackaton-2026/incloudy',
    preview: 'incloudy',
  },
  {
    number: '03',
    title: 'MindVault',
    category: 'IA local / RAG',
    text: 'Espacio privado de conocimiento que indexa documentos y permite realizar búsquedas semánticas con IA local.',
    stack: ['Ollama', 'Docker', 'Memorwise', 'Obsidian'],
    url: 'https://github.com/CristhAXe/MindVault',
    preview: 'mindvault',
  },
  {
    number: '04',
    title: 'Pig Save',
    category: 'Producto / Finanzas',
    text: 'Aplicación enfocada en organizar y visualizar finanzas personales mediante una experiencia clara y accesible.',
    stack: ['Web App', 'UI/UX', 'Finanzas'],
    url: 'https://github.com/CristhAXe/Pig-Save',
    preview: 'pigsave',
  },
]

const pages: Record<ContentPage, PageContent> = {
  'sobre-mi': {
    index: '02',
    eyebrow: 'Perfil / Trayectoria',
    title: 'Sobre mí',
description:
  'Desarrollador de software especializado en backend, enfocado en construir APIs seguras, escalables y fáciles de mantener con Python, FastAPI y PostgreSQL.',

items: [
  {
    number: '01',
    title: 'Enfoque',
    text: 'Desarrollo backend, construcción de APIs REST, lógica de negocio e integración de servicios.',
  },
  {
    number: '02',
    title: 'Tecnologías',
    text: 'Python, FastAPI, PostgreSQL, Docker, REST APIs, Git y React.',
  },
  {
    number: '03',
    title: 'Disponibilidad',
    text: 'Arequipa, Perú. Disponible para oportunidades y colaboraciones remotas.',
  },
],
  },
  proyectos: {
    index: '03',
    eyebrow: 'Selección / 2026',
    title: 'Proyectos',
    description:
      'Proyectos de backend, inteligencia artificial y cloud donde convierto ideas en sistemas funcionales, escalables y fáciles de mantener.',
    items: [
      { number: '01', title: 'Proyecto editorial', text: 'Landing page experimental construida con React y composición tipográfica.' },
      { number: '02', title: 'Aplicación web', text: 'Panel responsivo con componentes reutilizables y datos dinámicos.' },
      { number: '03', title: 'Próximo proyecto', text: 'Espacio reservado para tu siguiente caso de estudio.' },
    ],
  },
  contacto: {
    index: '04',
    eyebrow: 'Contacto / Disponible',
    title: 'Hablemos',
    description:
      '¿Tienes una idea, un proyecto o una oportunidad? Escríbeme y conversemos sobre cómo podemos construirla juntos.',
    items: [
      { number: '01', title: 'Correo', text: 'znkcristh@protonmail.com' },
      { number: '02', title: 'LinkedIn', text: 'Cristhian Nunoncca Kuriaki' },
      { number: '03', title: 'GitHub', text: '@CristhAXe' },
    ],
  },
}

const pagesEn: Record<ContentPage, PageContent> = {
  'sobre-mi': {
    index: '02', eyebrow: 'Profile / Background', title: 'About me',
    description: 'Backend-focused software developer building secure, scalable and maintainable APIs with Python, FastAPI and PostgreSQL.',
    items: [
      { number: '01', title: 'Focus', text: 'Backend development, REST API design, business logic and service integrations.' },
      { number: '02', title: 'Technologies', text: 'Python, FastAPI, PostgreSQL, Docker, REST APIs, Git and React.' },
      { number: '03', title: 'Availability', text: 'Arequipa, Peru. Available for remote opportunities and collaborations.' },
    ],
  },
  proyectos: {
    index: '03', eyebrow: 'Selected work / 2026', title: 'Projects',
    description: 'Backend, artificial intelligence and cloud projects where I turn ideas into functional, scalable and maintainable systems.',
    items: [],
  },
  contacto: {
    index: '04', eyebrow: 'Contact / Available', title: "Let's talk",
    description: 'Have an idea, project or opportunity? Send me a message and let’s discuss how we can build it together.',
    items: [],
  },
}

const projectEnglish = [
  { category: 'Hackathon / Cloud', text: 'Full-stack guestbook that stores messages and detects their sentiment in real time using AWS services.' },
  { category: 'Realtime Hackathon 2026', text: 'Private collaborative platform for supporting educational cases through real-time rooms and AI-assisted guidance.' },
  { category: 'Local AI / RAG', text: 'Private knowledge workspace that indexes documents and enables semantic search with locally hosted AI.' },
  { category: 'Product / Finance', text: 'Application focused on organizing and visualizing personal finances through a clear and accessible experience.' },
]

type PageTemplateProps = {
  page: ContentPage
  language: Language
}

export function PageTemplate({ page, language }: PageTemplateProps) {
  const content = (language === 'es' ? pages : pagesEn)[page]

  return (
    <section className="page-template" aria-labelledby="page-title">
      <div className="page-template__ghost" aria-hidden="true">{content.index}</div>
      <p className="page-template__eyebrow">{content.eyebrow}</p>

      <div className="page-template__heading">
        <span>{content.index} / 04</span>
        <h1 id="page-title">{content.title}</h1>
        <p>{content.description}</p>
      </div>

      {page === 'proyectos' ? (
        <div className="projects-grid">
          {projects.map((project, index) => {
            const localizedProject = language === 'en' ? { ...project, ...projectEnglish[index] } : project
            return (
            <article className="project-card" key={project.number}>
              <a className={`project-preview project-preview--${project.preview}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`${language === 'es' ? 'Ver' : 'View'} ${project.title} ${language === 'es' ? 'en' : 'on'} GitHub`}>
                <span className="project-preview__bar"><i /><i /><i /></span>
                <span className="project-preview__scene" aria-hidden="true">
                  <b>{project.number}</b>
                  <em>{project.title}</em>
                  <span /><span /><span />
                </span>
              </a>
              <div className="project-card__content">
                <p className="project-card__category">{localizedProject.category}</p>
                <h2>{project.title}</h2>
                <p className="project-card__description">{localizedProject.text}</p>
                <ul className="project-card__stack" aria-label={language === 'es' ? 'Tecnologías' : 'Technologies'}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <a className="project-card__link" href={project.url} target="_blank" rel="noreferrer">{language === 'es' ? 'Ver repositorio' : 'View repository'} <span>↗</span></a>
              </div>
            </article>
            )
          })}
        </div>
      ) : page === 'contacto' ? (
        <div className="page-template__grid contact-grid">
          {contacts.map((contact) => (
            <a className="page-card contact-card" href={contact.href} target="_blank" rel="noreferrer" key={contact.number}>
              <span className="page-card__number">{contact.number}</span>
              <ContactIcon icon={contact.icon} />
              <h2>{language === 'en' && contact.icon === 'mail' ? 'Email' : contact.title}</h2>
              <p>{contact.label}</p>
              <span className="contact-card__arrow">↗</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="page-template__grid">
          {content.items.map((item) => (
            <article className="page-card" key={item.number}>
              <span className="page-card__number">{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}

      <footer className="page-template__footer">
        <span>Cristhian — Software Developer</span>
        <a href="#inicio">{language === 'es' ? 'Volver al inicio' : 'Back to home'} ↗</a>
      </footer>
    </section>
  )
}
