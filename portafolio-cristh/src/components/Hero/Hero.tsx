import { EditorialTitle } from '../EditorialTitle/EditorialTitle'
import { Portrait } from '../Portrait/Portrait'
import { TextBlock } from '../TextBlock/TextBlock'
import './Hero.css'
import type { Language } from '../../App'

export function Hero({ language }: { language: Language }) {
  return (
    <section className="hero" aria-labelledby="hero-title">

      <div className="hero__monogram" aria-hidden="true">
        Cmnk
      </div>

      <div id="hero-title">
        <EditorialTitle lines={['Software', 'Developer', 'Cristhian']} />
      </div>

      <TextBlock className="hero__intro">
        {language === 'es' ? 'Desarrollador enfocado en backend' : 'Backend focused Developer'}
      </TextBlock>

      <TextBlock className="hero__description">
        {language === 'es'
          ? 'Curioso por naturaleza, convierto ideas en soluciones digitales mientras aprendo, experimento y mejoro con cada proyecto.'
          : 'Curious by nature, I turn ideas into digital solutions while learning, experimenting and improving with every project.'}
      </TextBlock>

      <Portrait language={language} />

      <div className="hero__footer" aria-hidden="true">
        <span>Arequipa, Peru</span>
      </div>
    </section>
  )
}
