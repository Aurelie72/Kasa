import '../styles/about.scss'
import aboutpicture from '../assets/aboutpicture.jpg'
import Collapse from '../components/Collapse'
import { valeurs } from '../data/valeurs'

function About() {

  return (
    <div className='about'>
        <img 
          src={aboutpicture}
          alt="paysage de montagne" 
          className="banner"
        />

              <div className="container-collapse">
        {valeurs.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
           ))}
          </div>
    </div>
  )
}

export default About;
