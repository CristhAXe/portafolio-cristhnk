import { EditorialTitle } from '../EditorialTitle/EditorialTitle'
import heroVisual from '../../assets/previews/hero-code-abstract.jpg'
import chalkAnimal from '../../assets/chalk-animal.png'
import './Hero.css'
import type { Language } from '../../App'

export function Hero({ language }: { language: Language }) {
  const copy = language === 'es'
    ? {
        statement: 'Software Engineer backend con Python y FastAPI. Llevo la IA —y el desarrollo con agentes— al producto para que cada entrega se note en el negocio.',
        detail: 'Python · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Agentic AI',
        projects: 'Ver proyectos',
        contact: 'Contactarme',
        focus: ['Software Engineer', 'Backend Python · FastAPI · Agentic Software Development'],
      }
    : {
        statement: 'Backend Software Engineer with Python and FastAPI. I bring AI —and agentic development— into the product so every release shows up in the business.',
        detail: 'Python · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Agentic AI',
        projects: 'View projects',
        contact: 'Get in touch',
        focus: ['Software Engineer', 'Backend Python · FastAPI · Agentic Software Development'],
      }

  return (
    <section className="hero" aria-labelledby="hero-title">

      <div className="hero__grid" aria-hidden="true" />
      <figure className="hero__chalk" aria-hidden="true">
        <img src={chalkAnimal} alt="" />
      </figure>
      <div className="hero__content">
        <p className="hero__eyebrow">
          {copy.focus.map((line) => <span key={line}>{line}</span>)}
        </p>
        <div id="hero-title">
          <EditorialTitle lines={['Cristhian', 'Nunoncca Kuriaki']} />
        </div>
        <div className="hero__bottom-row">
          <div className="hero__summary">
            <p className="hero__statement">{copy.statement}</p>
            <p className="hero__stack">{copy.detail}</p>
          </div>
          <figure className="hero__visual">
            <img
              src={heroVisual}
              alt={language === 'es' ? 'Composición abstracta de interfaces y código' : 'Abstract composition of interfaces and code'}
            />
          </figure>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#proyectos">
              {copy.projects}
            </a>
            <a className="hero__button" href="#contacto">
              {copy.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
