import { EditorialTitle } from '../EditorialTitle/EditorialTitle'
import heroVisual from '../../assets/previews/hero-code-abstract.jpg'
import chalkAnimal from '../../assets/chalk-animal.png'
import './Hero.css'
import type { Language } from '../../App'

export function Hero({ language }: { language: Language }) {
  const copy = language === 'es'
    ? {
        statement: 'Desarrollador de software. Llevo la inteligencia artificial al producto para que cada entrega se note en el negocio.',
        detail: 'Python · FastAPI · PostgreSQL · Docker · APIs · IA',
        projects: 'Ver proyectos',
        contact: 'Contactarme',
        focus: ['Software Engineer', 'Backend Systems · IA · Cloud'],
      }
    : {
        statement: 'Software developer. I bring AI into the product so every release shows up in the business.',
        detail: 'Python · FastAPI · PostgreSQL · Docker · APIs · AI',
        projects: 'View projects',
        contact: 'Get in touch',
        focus: ['Software Engineer', 'Backend Systems · AI · Cloud'],
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
              {copy.projects} <span aria-hidden="true">↗</span>
            </a>
            <a className="hero__button" href="#contacto">
              {copy.contact} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
