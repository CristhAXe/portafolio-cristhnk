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
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-8.5m0 3.5c1-2.2 6-2.4 6 1.5V18" /></svg>
  }

  if (icon === 'x') {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" /></svg>
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3.5 6.5h17v12h-17zM4 7l8 6 8-6" /></svg>
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Michi Teach',
    category: 'The Next Craft Hackathon — 1.er lugar en Arequipa y Perú · 2.º lugar en LATAM',
    text: 'Asistente de aprendizaje que analiza la pantalla y ofrece ayuda contextual en tiempo real con IA multimodal y RAG. Participé en el desarrollo del MVP y la integración de IA, persistencia y funciones en tiempo real con Convex.',
    highlights: ['Asistente de aprendizaje contextual', 'Análisis de pantalla en tiempo real', 'Base de conocimiento con RAG'],
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
    text: 'Plataforma privada para acompañar casos educativos mediante colaboración en tiempo real y orientación asistida por IA.',
    highlights: ['Espacio privado para casos educativos', 'Colaboración entre participantes', 'Orientación durante cada caso'],
    stack: ['React', 'FastAPI', 'MongoDB', 'Portal', 'Gemini'],
    image: incloudyPreview,
    url: 'https://github.com/realtime-hackaton-2026/incloudy',
    demoUrl: 'https://incloudy-lovat.vercel.app',
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
    description: 'Desarrollador de software. Llevo la inteligencia artificial al producto para que cada entrega se note en el negocio.',
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
    description: 'Software developer. I bring AI into the product so every release shows up in the business.',
    items: [
      { number: '01', title: 'Focus', text: 'Backend development, REST API design, business logic and service integrations.' },
      { number: '02', title: 'Technologies', text: 'Python, FastAPI, PostgreSQL, Docker, REST APIs, Git and React.' },
      { number: '03', title: 'Availability', text: 'Arequipa, Peru. Available for remote opportunities and collaborations.' },
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
      { label: 'Lenguajes. ', value: 'Python, SQL, JavaScript y TypeScript.' },
      { label: 'Backend. ', value: 'FastAPI, REST, SQLAlchemy y JWT.' },
      { label: 'Datos. ', value: 'PostgreSQL y MongoDB.' },
      { label: 'Cloud. ', value: 'AWS (S3, Lambda, DynamoDB), Docker y Docker Compose.' },
      { label: 'Frontend. ', value: 'React y Tailwind CSS.' },
      { label: 'Práctica. ', value: 'Pytest y Git.' },
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
          <><strong>NEX.IA</strong> es un ERP peruano todo en uno para pymes. Integra compras, almacén, producción, ventas y tesorería, y genera la contabilidad a partir de la operación.</>,
          <>Pipeline de onboarding de datos con <strong>FastAPI</strong>, <strong>SQLAlchemy 2</strong> y <strong>PostgreSQL</strong>, con dry-run y carga transaccional idempotente. El primer cliente migró <strong>sin duplicados</strong> y <strong>sin datos a medias</strong>.</>,
          <>Generador de libros electrónicos <strong>SUNAT (PLE 5.1, 5.3, 6.1 y 14.1)</strong> sobre un núcleo REST reutilizable. Cada archivo pasa el <strong>validador oficial</strong> y un formato nuevo pide cambios mínimos.</>,
          <>Casos borde de integridad financiera y multiempresa —notas sin factura, diferencia de cambio en USD y filtros por empresa— con migraciones <strong>Alembic</strong> y tests de integración. Se eliminaron los <strong>ajustes manuales</strong>.</>,
          <>Pipeline de exportación de reportes con validación de integridad en tiempo real y telemetría en el dashboard. El formato y la validación previa quedaron automatizados y <strong>bajaron los errores de salida en producción</strong>.</>,
          <>Flujo con IA (<strong>Claude</strong> y <strong>Cursor</strong>): diseño la solución, uso la IA para acelerar y reviso cada cambio antes del commit. <strong>1.143 tests en verde</strong>.</>,
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
          <>Componentes en <strong>React</strong> que consumen y visualizan los datos de los endpoints REST.</>,
        ],
      },
    ],
  },
  {
    title: 'Estudios',
    points: [
      'Carrera técnica en Desarrollo de Sistemas de Información, 2024–2026, en curso.',
      'Summer Tech Bootcamp en aplicaciones de IA, cloud computing y ciberseguridad, julio de 2026.',
      'Formación complementaria en Claude Code y AI Skills Fest 2026.',
      'Certificaciones en curso: AWS Certified Developer – Associate y MongoDB Associate Developer.',
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
      { label: 'Languages. ', value: 'Python, SQL, JavaScript and TypeScript.' },
      { label: 'Backend. ', value: 'FastAPI, REST, SQLAlchemy and JWT.' },
      { label: 'Data. ', value: 'PostgreSQL and MongoDB.' },
      { label: 'Cloud. ', value: 'AWS (S3, Lambda, DynamoDB), Docker and Docker Compose.' },
      { label: 'Frontend. ', value: 'React and Tailwind CSS.' },
      { label: 'Practice. ', value: 'Pytest and Git.' },
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
          <><strong>NEX.IA</strong> is an all-in-one Peruvian ERP for small businesses. It covers purchasing, warehouse, production, sales and treasury, and builds the accounting from the operation.</>,
          <>A data onboarding pipeline with <strong>FastAPI</strong>, <strong>SQLAlchemy 2</strong> and <strong>PostgreSQL</strong>, with a dry run and an idempotent transactional load. The first client migrated <strong>with no duplicates</strong> and <strong>no half-written records</strong>.</>,
          <>A <strong>SUNAT</strong> electronic-books generator <strong>(PLE 5.1, 5.3, 6.1 and 14.1)</strong> on a reusable REST core. Every file passes the <strong>official validator</strong>, and a new format needs only a small change.</>,
          <>Financial-integrity and multi-company edge cases —notes without an invoice, USD exchange differences and per-company filters— covered with <strong>Alembic</strong> migrations and integration tests. <strong>Manual adjustments went away</strong>.</>,
          <>A report-export pipeline with real-time integrity checks and dashboard telemetry. Formatting and the pre-check are automated, and <strong>output errors in production went down</strong>.</>,
          <>An AI workflow with <strong>Claude</strong> and <strong>Cursor</strong>: I design the solution, use AI to move faster, and review every change before the commit. <strong>1,143 tests staying green</strong>.</>,
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
          <><strong>React</strong> components that read and display the data from the REST endpoints.</>,
        ],
      },
    ],
  },
  {
    title: 'Studies',
    points: [
      'Technical degree in Information Systems Development, 2024–2026, in progress.',
      'Summer Tech Bootcamp in AI applications, cloud computing and cybersecurity, July 2026.',
      'Further study in Claude Code and AI Skills Fest 2026.',
      'Certifications in progress: AWS Certified Developer – Associate and MongoDB Associate Developer.',
    ],
  },
  {
    title: 'Where I am headed',
    text: 'I want to stay in backend and applied AI. I am closing the AWS and MongoDB certifications and building releases that show up in the operation, not only in the code.',
  },
]

const projectEnglish = [
  { category: 'The Next Craft Hackathon — 1st place in Arequipa and Peru · 2nd place in LATAM', text: 'Learning assistant that analyzes the screen and provides contextual help in real time with multimodal AI and RAG. I contributed to the MVP and integrated AI, persistence and real-time features with Convex.', highlights: ['Contextual learning assistant', 'Real-time screen analysis', 'Knowledge base with RAG'] },
  { category: 'OPIT Summer Tech Bootcamp', text: 'Full-stack guestbook that stores messages and detects their sentiment in real time using AWS services.', highlights: ['Full-stack guestbook', 'Message storage', 'Sentiment classification'] },
  { category: 'Realtime Hackathon 2026', text: 'Private platform for supporting educational cases through real-time collaboration and AI-assisted guidance.', highlights: ['Private educational-case workspace', 'Participant collaboration', 'Guidance through each case'] },
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
              ? 'Software Engineer · Backend · IA aplicada · 1+ años de experiencia'
              : 'Software Engineer · Backend · Applied AI · 1+ years of experience'}
          </p>
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
