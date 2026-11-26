import type { Language, PageId } from '../../App'
import { StackIcons } from '../StackIcons/StackIcons'
import michiTeachPreview from '../../assets/previews/project-michi-teach.png'
import guestbookPreview from '../../assets/previews/project-ai-guestbook.png'
import incloudyPreview from '../../assets/previews/project-incloudy.png'
import mindVaultPreview from '../../assets/previews/project-mindvault.webp'
import pigSavePreview from '../../assets/previews/project-pig-save.png'
import projectWallpaper from '../../assets/project-wallpaper.jpg'
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
  highlights: string[]
  stack: string[]
  image: string
  url: string
  demoUrl?: string
  preview: string
}

type Contact = {
  number: string
  title: string
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github' | 'x'
}

const cvUrls: Record<Language, string> = {
  es: 'https://docs.google.com/document/d/1zQCpE-aCUV5xdOjbLiHfPW3USqIxA6LR00NSul9PoS4/edit?usp=sharing',
  en: 'https://docs.google.com/document/d/1lrmUYM4_M9rnnRk8-6-ZsGsdMpyfAgh35FCEShWIg10/edit?usp=sharing',
}

const contactNotes = {
  es: {
    mail: 'Para propuestas, proyectos y oportunidades.',
    linkedin: 'Trayectoria y una conversación más formal.',
    github: 'Código, proyectos y cómo trabajo.',
    x: 'Notas, avances y lo que estoy construyendo.',
  },
  en: {
    mail: 'For proposals, projects and opportunities.',
    linkedin: 'Background and a more formal conversation.',
    github: 'Code, projects and how I work.',
    x: 'Notes, progress and what I am building.',
  },
} as const

const contacts: Contact[] = [
  { number: '01', title: 'Correo', label: 'znkcristh@protonmail.com', href: 'mailto:znkcristh@protonmail.com', icon: 'mail' },
  { number: '02', title: 'LinkedIn', label: 'Cristhian Nunoncca Kuriaki', href: 'https://www.linkedin.com/in/cristhian-nunoncca-kuriaki/', icon: 'linkedin' },
  { number: '03', title: 'GitHub', label: '@CristhAXe', href: 'https://github.com/CristhAXe', icon: 'github' },
  { number: '04', title: 'X', label: '@KuCristh', href: 'https://x.com/KuCristh', icon: 'x' },
]

function ContactIcon({ icon }: { icon: Contact['icon'] }) {
  if (icon === 'github') {
    return <svg aria-hidden="true"><use href={`${import.meta.env.BASE_URL}icons.svg#github-icon`} /></svg>
  }

  if (icon === 'linkedin') {
    return (
      <svg aria-hidden="true" className="contact-card__brand-icon" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  }

  if (icon === 'x') {
    return (
      <svg aria-hidden="true" className="contact-card__brand-icon" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3.5 6.5h17v12h-17zM4 7l8 6 8-6" /></svg>
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Michi Teach',
    category: 'The Next Craft Hackathon — 1.er lugar en Arequipa y Perú · 2.º lugar en LATAM',
    text: 'App de escritorio que asiste al usuario en tiempo real con IA multimodal y RAG según su contexto visual. Creé el cliente de escritorio en Rust/Tauri y lo conecté al backend Convex del equipo, con tokens de sesión y conversaciones aisladas por cuenta.',
    highlights: ['Asistente de aprendizaje contextual', 'App de escritorio multiplataforma en Rust/Tauri', 'Visión y RAG con conversaciones por cuenta'],
    stack: ['JavaScript', 'Tauri', 'Convex', 'OpenAI', 'RAG', 'Vector Search', 'Tavily'],
    image: michiTeachPreview,
    url: 'https://github.com/0wex/michi-teach/tree/main',
    demoUrl: 'https://drive.google.com/file/d/1N2gov0zZvOnSMF8gFQEFwvMGepVbefzL/view?usp=drive_link',
    preview: 'michiteach',
  },
  {
    number: '02',
    title: 'AI Guestbook',
    category: 'OPIT Summer Tech Bootcamp',
    text: 'Libro de visitas full stack que almacena mensajes y detecta su sentimiento en tiempo real con servicios de AWS.',
    highlights: ['Libro de visitas full stack', 'Almacenamiento de mensajes', 'Clasificación de sentimiento'],
    stack: ['AWS Lambda', 'DynamoDB', 'Comprehend', 'Python'],
    image: guestbookPreview,
    url: 'https://github.com/CristhAXe/OPIT-summer-tech-Bootcamp-cloud-project',
    preview: 'guestbook',
  },
  {
    number: '03',
    title: 'incloudy',
    category: 'Realtime Hackathon 2026',
    text: 'Plataforma de acompañamiento en tiempo real para estudiantes con necesidades educativas especiales. Desarrollé el backend FastAPI + MongoDB con API REST, autenticación JWT y webhooks firmados, e integré el Portal SDK para presencia y mensajería en tiempo real.',
    highlights: ['Backend FastAPI + MongoDB con JWT', 'Presencia y mensajería en tiempo real', 'Webhooks firmados para auditar eventos'],
    stack: ['Python', 'React', 'FastAPI', 'MongoDB', 'Portal', 'Gemini'],
    image: incloudyPreview,
    url: 'https://github.com/realtime-hackaton-2026/incloudy',
    demoUrl: 'https://incloudy-lovat.vercel.app/#/login',
    preview: 'incloudy',
  },
  {
    number: '04',
    title: 'MindVault',
    category: 'IA local / RAG',
    text: 'Espacio privado de conocimiento que indexa documentos y permite realizar búsquedas semánticas con IA local.',
    highlights: ['Biblioteca privada de documentos', 'Consultas sobre contenido indexado', 'Procesamiento ejecutado localmente'],
    stack: ['Ollama', 'Docker', 'Memorwise', 'Obsidian'],
    image: mindVaultPreview,
    url: 'https://github.com/CristhAXe/MindVault',
    preview: 'mindvault',
  },
  {
    number: '05',
    title: 'Pig Save',
    category: 'Producto / Finanzas',
    text: 'Aplicación enfocada en organizar y visualizar finanzas personales mediante una experiencia clara y accesible.',
    highlights: ['Organización de finanzas personales', 'Visualización clara de información', 'Experiencia simple y accesible'],
    stack: ['Web App', 'UI/UX', 'Finanzas'],
    image: pigSavePreview,
    url: 'https://github.com/CristhAXe/Pig-Save',
    preview: 'pigsave',
  },
]

const pages: Record<ContentPage, PageContent> = {
  'sobre-mi': {
    index: '02',
    eyebrow: 'Perfil / Trayectoria',
    title: 'Sobre mí',
    description: 'Software Engineer backend con Python y FastAPI. Llevo la IA —y el desarrollo con agentes— al producto para que cada entrega se note en el negocio.',
    items: [],
  },
  proyectos: {
    index: '03',
    eyebrow: 'Selección / 2026',
    title: 'Proyectos',
    description:
      'Una selección de aplicaciones web que construí para resolver necesidades de aprendizaje, organización y colaboración. Cada proyecto combina decisiones de producto, desarrollo y tecnología.',
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
    description: 'Backend Software Engineer with Python and FastAPI. I bring AI —and agentic development— into the product so every release shows up in the business.',
    items: [
      { number: '01', title: 'Focus', text: 'Backend development, REST API design, business logic and service integrations.' },
      { number: '02', title: 'Technologies', text: 'Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, Docker and agentic development with Cursor and Claude Code.' },
      { number: '03', title: 'Availability', text: 'Arequipa, Peru. Available for remote or hybrid opportunities and collaborations.' },
    ],
  },
  proyectos: {
    index: '03', eyebrow: 'Selected work / 2026', title: 'Projects',
    description: 'A selection of web applications I built to solve learning, organization and collaboration needs. Each project combines product, development and technology decisions.',
    items: [],
  },
  contacto: {
    index: '04', eyebrow: 'Contact / Available', title: "Let's talk",
    description: 'Have an idea, project or opportunity? Send me a message and let’s discuss how we can build it together.',
    items: [],
  },
}

const aboutEs = [
  {
    title: 'Propósito',
    text: 'Llevo la inteligencia artificial al producto para que cada entrega se note en el negocio. Diseño la solución, uso la IA para acelerar y reviso cada cambio antes de que llegue a producción.',
  },
  {
    title: 'Enfoque',
    text: 'Backend. APIs que se pueden mantener, datos con integridad e IA aplicada —RAG y agentes— con una persona revisando el resultado.',
  },
  {
    title: 'Qué ofrezco',
    points: [
      'APIs REST con autenticación, validación y tests.',
      'Modelos de datos en PostgreSQL y MongoDB, con migraciones y cargas que no dejan información a medias.',
      'IA aplicada al producto y al flujo de trabajo, sin soltar un cambio sin revisarlo.',
      'Integración y despliegue con Docker y AWS.',
    ],
  },
  {
    title: 'Stack',
    groups: [
      { label: 'Lenguajes. ', value: 'Python, SQL, JavaScript/TypeScript y Rust.' },
      { label: 'Backend. ', value: 'FastAPI, REST APIs, SQLAlchemy, Alembic y JWT.' },
      { label: 'Datos. ', value: 'PostgreSQL, MongoDB y ETL.' },
      { label: 'Cloud. ', value: 'AWS (S3, Lambda, DynamoDB), Docker, Docker Compose, GitHub Actions, Railway y Vercel.' },
      { label: 'Testing. ', value: 'Pytest y tests de integración.' },
      { label: 'Agentic. ', value: 'Desarrollo multiagente basado en contexto y skills, con Cursor y Claude Code.' },
      { label: 'Frontend e IA. ', value: 'React, Tailwind CSS, RAG, OpenAI y Gemini.' },
    ],
  },
  {
    title: 'Experiencia',
    roles: [
      {
        title: (
          <>
            <strong>Software Engineer (Backend)</strong>
            {' · '}
            <strong>JMR Consulting Association</strong>
            {' · '}
            <strong>NEX.IA</strong>
            <span className="about__role-when">Desde septiembre de 2026</span>
          </>
        ),
        points: [
          <><strong>NEX.IA</strong> es un ERP multiempresa para pymes peruanas.</>,
          <>Onboarding de datos de clientes con <strong>FastAPI</strong>, <strong>SQLAlchemy 2</strong> y <strong>PostgreSQL</strong>: plantilla Excel validada completa en dry-run, errores por hoja y fila, y carga transaccional idempotente. Habilité cargar el <strong>año contable de un cliente real</strong> desde Excel de SUNAT.</>,
          <>Libros <strong>PLE de SUNAT (5.1, 5.3, 6.1, 8.1 y 14.1; R.S. 108-2020)</strong> aprobados por el validador <strong>al primer intento</strong>, trabajando con la contadora y el jefe contable para convertir requisitos contables en funcionalidades.</>,
          <>Cerré la brecha de esquema con migraciones <strong>Alembic</strong> (<strong>34 tablas</strong> con PK, FK e índices; <strong>134 en total</strong>) y modelé casos borde multiempresa —notas sin factura, diferencia de cambio USD— con tests de integración.</>,
          <>Endurecí el login (validación de entrada <strong>CWE-20</strong>, límite de bcrypt, rechazo de campos desconocidos) y recorrí <strong>45 pantallas y 455 consultas</strong> para corregir errores 500 y fallos silenciosos.</>,
          <>Orquesté y delegué tareas a agentes (<strong>Claude</strong> y <strong>Cursor</strong>): <strong>57 PRs integrados en 10 semanas</strong> sobre una suite de <strong>1.143 tests</strong>.</>,
        ],
      },
      {
        title: (
          <>
            <strong>Software Developer Intern</strong>
            {' · '}
            <strong>Ruiz Santamaría & Asociados</strong>
            {' · '}
            <strong>Functional Neuro Lab</strong>
            <span className="about__role-when">Marzo de 2026 a septiembre de 2026</span>
          </>
        ),
        points: [
          <><strong>Functional Neuro Lab</strong> es una plataforma en producción para el análisis del estrés laboral, con dashboards de métricas diarias y semanales.</>,
          <>Endpoints REST con <strong>FastAPI</strong> y <strong>PostgreSQL</strong>, integrando la lógica de negocio de la plataforma en producción.</>,
          <>Tiempo de carga de los dashboards de <strong>5 s a 0,1 s (98 %)</strong>, con tablas de agregación diaria y semanal procesadas por un ETL nocturno, en lugar de consultas con varios JOIN en tiempo real.</>,
          <>Assets de la aplicación publicados en <strong>Amazon S3</strong> e integrados desde los servicios y componentes del sistema.</>,
        ],
      },
    ],
  },
  {
    title: 'Estudios',
    points: [
      'Carrera técnica en Desarrollo de Sistemas de Información en ISAM (Instituto Superior Antúnez de Mayolo), 2024–2026, en curso.',
      'Summer Tech Bootcamp — AI Applications, Cloud Computing & Cybersecurity en OPIT (Open Institute of Technology), julio de 2026.',
      'Formación complementaria: Claude Code in Action (Anthropic) y AI Skills Fest 2026 (Microsoft).',
      'Certificaciones con examen programado: MongoDB Associate Developer (Python), enero de 2027, y AWS Certified Developer – Associate (DVA-C03), febrero de 2027.',
      'Idiomas: español nativo e inglés B1.',
    ],
  },
  {
    title: 'Hacia dónde voy',
    text: 'Seguir en backend e inteligencia artificial aplicada al producto. Quiero cerrar las certificaciones de AWS y MongoDB y construir entregas que se noten en la operación, no solo en el código.',
  },
]

const aboutEn = [
  {
    title: 'Purpose',
    text: 'I bring AI into the product so every release shows up in the business. I design the solution, use AI to move faster, and review every change before it reaches production.',
  },
  {
    title: 'Focus',
    text: 'Backend. APIs that stay maintainable, data with integrity, and applied AI —RAG and agents— with a person checking the result.',
  },
  {
    title: 'What I offer',
    points: [
      'REST APIs with authentication, validation and tests.',
      'Data models in PostgreSQL and MongoDB, with migrations and loads that do not leave records half-written.',
      'AI applied to the product and to the workflow, with every change reviewed before it ships.',
      'Integration and deployment with Docker and AWS.',
    ],
  },
  {
    title: 'Stack',
    groups: [
      { label: 'Languages. ', value: 'Python, SQL, JavaScript/TypeScript and Rust.' },
      { label: 'Backend. ', value: 'FastAPI, REST APIs, SQLAlchemy, Alembic and JWT.' },
      { label: 'Data. ', value: 'PostgreSQL, MongoDB and ETL.' },
      { label: 'Cloud. ', value: 'AWS (S3, Lambda, DynamoDB), Docker, Docker Compose, GitHub Actions, Railway and Vercel.' },
      { label: 'Testing. ', value: 'Pytest and integration tests.' },
      { label: 'Agentic. ', value: 'Context-based multi-agent development and skills, with Cursor and Claude Code.' },
      { label: 'Frontend & AI. ', value: 'React, Tailwind CSS, RAG, OpenAI and Gemini.' },
    ],
  },
  {
    title: 'Experience',
    roles: [
      {
        title: (
          <>
            <strong>Software Engineer (Backend)</strong>
            {' · '}
            <strong>JMR Consulting Association</strong>
            {' · '}
            <strong>NEX.IA</strong>
            <span className="about__role-when">since September 2026</span>
          </>
        ),
        points: [
          <><strong>NEX.IA</strong> is a multi-company ERP for Peruvian small businesses.</>,
          <>Client data onboarding with <strong>FastAPI</strong>, <strong>SQLAlchemy 2</strong> and <strong>PostgreSQL</strong>: a fully validated Excel template in dry-run, per-sheet and per-row errors, and an idempotent transactional load. I enabled loading a <strong>real client's fiscal year</strong> from SUNAT Excel files.</>,
          <><strong>SUNAT PLE books (5.1, 5.3, 6.1, 8.1 and 14.1; R.S. 108-2020)</strong> approved by the validator <strong>on the first attempt</strong>, working with the accountant and the head accountant to turn accounting requirements into features.</>,
          <>Closed the schema gap with <strong>Alembic</strong> migrations (<strong>34 tables</strong> with PKs, FKs and indexes; <strong>134 in total</strong>) and modeled multi-company edge cases —notes without an invoice, USD exchange differences— with integration tests.</>,
          <>Hardened the login (input validation <strong>CWE-20</strong>, bcrypt limit, rejection of unknown fields) and walked <strong>45 screens and 455 queries</strong> to fix 500 errors and silent failures.</>,
          <>Orchestrated and delegated tasks to agents (<strong>Claude</strong> and <strong>Cursor</strong>): <strong>57 PRs merged in 10 weeks</strong> over a suite of <strong>1,143 tests</strong>.</>,
        ],
      },
      {
        title: (
          <>
            <strong>Software Developer Intern</strong>
            {' · '}
            <strong>Ruiz Santamaría & Asociados</strong>
            {' · '}
            <strong>Functional Neuro Lab</strong>
            <span className="about__role-when">March 2026 to September 2026</span>
          </>
        ),
        points: [
          <><strong>Functional Neuro Lab</strong> is a production platform for workplace-stress analysis, with daily and weekly metric dashboards.</>,
          <>REST endpoints with <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, wiring the business logic of the platform in production.</>,
          <>Dashboard load time from <strong>5s to 0.1s (98%)</strong>, using daily and weekly aggregation tables processed by a nightly ETL instead of multi-JOIN queries at request time.</>,
          <>Application assets published on <strong>Amazon S3</strong> and served from the system services and components.</>,
        ],
      },
    ],
  },
  {
    title: 'Studies',
    points: [
      'Technical degree in Information Systems Development at ISAM (Instituto Superior Antúnez de Mayolo), 2024–2026, in progress.',
      'Summer Tech Bootcamp — AI Applications, Cloud Computing & Cybersecurity at OPIT (Open Institute of Technology), July 2026.',
      'Further training: Claude Code in Action (Anthropic) and AI Skills Fest 2026 (Microsoft).',
      'Certification exams scheduled: MongoDB Associate Developer (Python), January 2027, and AWS Certified Developer – Associate (DVA-C03), February 2027.',
      'Languages: native Spanish and B1 English.',
    ],
  },
  {
    title: 'Where I am headed',
    text: 'I want to stay in backend and applied AI. I am closing the AWS and MongoDB certifications and building releases that show up in the operation, not only in the code.',
  },
]

const projectEnglish = [
  { category: 'The Next Craft Hackathon — 1st place in Arequipa and Peru · 2nd place in LATAM', text: 'Desktop app that assists the user in real time with multimodal AI and RAG based on their visual context. I built the Rust/Tauri desktop client and connected it to the team Convex backend, with session tokens and per-account isolated conversations.', highlights: ['Contextual learning assistant', 'Cross-platform desktop app in Rust/Tauri', 'Vision and RAG with per-account conversations'] },
  { category: 'OPIT Summer Tech Bootcamp', text: 'Full-stack guestbook that stores messages and detects their sentiment in real time using AWS services.', highlights: ['Full-stack guestbook', 'Message storage', 'Sentiment classification'] },
  { category: 'Realtime Hackathon 2026', text: 'Real-time support platform for students with special educational needs. I built the FastAPI + MongoDB backend with a REST API, JWT authentication and signed webhooks, and integrated the Portal SDK for real-time presence and messaging.', highlights: ['FastAPI + MongoDB backend with JWT', 'Real-time presence and messaging', 'Signed webhooks to audit events'] },
  { category: 'Local AI / RAG', text: 'Private knowledge workspace that indexes documents and enables semantic search with locally hosted AI.', highlights: ['Private document library', 'Queries over indexed content', 'Locally executed processing'] },
  { category: 'Product / Finance', text: 'Application focused on organizing and visualizing personal finances through a clear and accessible experience.', highlights: ['Personal finance organization', 'Clear information visualization', 'Simple accessible experience'] },
]

type PageTemplateProps = {
  page: ContentPage
  language: Language
}

export function PageTemplate({ page, language }: PageTemplateProps) {
  const content = (language === 'es' ? pages : pagesEn)[page]
  const localizedProjects = projects.map((project, index) => (
    language === 'en' ? { ...project, ...projectEnglish[index] } : project
  ))

  return (
      <section
        className={`page-template${page === 'proyectos' ? ' page-template--work' : ''}${page === 'sobre-mi' ? ' page-template--about' : ''}${page === 'contacto' ? ' page-template--contact' : ''}`}
        aria-labelledby="page-title"
        style={page === 'proyectos' ? { '--project-wallpaper': `url("${projectWallpaper}")` } as React.CSSProperties : undefined}
      >
      <div className="page-template__heading">
        <h1 id="page-title">{content.title}</h1>
        {page !== 'sobre-mi' && <p>{content.description}</p>}
      </div>

      {page === 'proyectos' ? (
        <div className="project-bands">
          {localizedProjects.map((project, index) => (
            <article className={`project-band${index % 2 === 1 ? ' project-band--flip' : ''}`} key={project.number}>
              <div className="project-band__copy">
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <StackIcons names={project.stack} label={language === 'es' ? `Stack de ${project.title}` : `${project.title} stack`} />
                <p className="project-band__meta">{project.category}</p>
                <div className="project-band__links">
                  {(project.demoUrl || project.url) && (
                    <a href={project.demoUrl ?? project.url} target="_blank" rel="noreferrer">
                      {project.demoUrl
                        ? (language === 'es' ? 'Ver demo' : 'View demo')
                        : (language === 'es' ? 'Ver repositorio' : 'View repository')}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {language === 'es' ? 'Ver repositorio' : 'View repository'}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
              <div className={`project-band__stage project-band__stage--${project.preview}${project.preview === 'michiteach' ? ' project-band__stage--portrait' : ''}`}>
                <figure className={`project-window project-window--${project.preview}${project.preview === 'michiteach' ? ' project-window--portrait' : ''}`}>
                  <div className="project-window__bar" aria-hidden="true">
                    <span className="project-window__dots" />
                    <span className="project-window__title">{project.title}</span>
                  </div>
                  <img
                    src={project.image}
                    alt={language === 'es' ? `Vista de ${project.title}` : `Preview of ${project.title}`}
                  />
                </figure>
              </div>
            </article>
          ))}
        </div>
      ) : page === 'sobre-mi' ? (
        <article className="about">
          <p className="about__role">
            {language === 'es'
              ? 'Software Engineer · Backend Python · FastAPI · Agentic Software Development · Arequipa, Perú — remoto / híbrido'
              : 'Software Engineer · Backend Python · FastAPI · Agentic Software Development · Arequipa, Peru — remote / hybrid'}
          </p>
          <div className="about__actions">
            <a
              className="about__cv-button"
              href={cvUrls[language]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'es' ? 'Ver CV' : 'View CV'} <span aria-hidden="true">↗</span>
            </a>
          </div>
          {(language === 'es' ? aboutEs : aboutEn).map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.text && <p>{section.text}</p>}
              {section.groups?.map((group) => (
                <p key={group.label}>
                  <strong>{group.label}</strong>
                  {group.value}
                </p>
              ))}
              {section.roles?.map((role, roleIndex) => (
                <div className="about__job" key={roleIndex}>
                  <p className="about__role-line">{role.title}</p>
                  <ul>
                    {role.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {section.points && (
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      ) : page === 'contacto' ? (
        <div className="page-template__grid contact-grid">
          {contacts.map((contact) => (
            <a className="page-card contact-card" href={contact.href} target="_blank" rel="noreferrer" key={contact.number}>
              <ContactIcon icon={contact.icon} />
              {contact.icon !== 'x' && (
                <h2>{language === 'en' && contact.icon === 'mail' ? 'Email' : contact.title}</h2>
              )}
              <p className="contact-card__note">{contactNotes[language][contact.icon]}</p>
              <p className="contact-card__label">{contact.label}</p>
              <span className="contact-card__arrow">↗</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="page-template__grid">
          {content.items.map((item) => (
            <article className="page-card" key={item.number}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
