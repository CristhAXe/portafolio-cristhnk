import portrait from '../../assets/editorial-portrait.png'
import './Portrait.css'
import type { Language } from '../../App'

export function Portrait({ language }: { language: Language }) {
  return (
    <figure className="portrait">
      <img src={portrait} alt={language === 'es' ? 'Retrato editorial en blanco y negro' : 'Black and white editorial portrait'} />
      <figcaption>{language === 'es' ? 'foto actual, 2026' : 'current photo, 2026'}</figcaption>
    </figure>
  )
}
