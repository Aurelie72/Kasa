import '../pages/about.scss'
import aboutpicture from '../assets/aboutpicture.jpg'

function About() {

  return (
    <div className='about'>
        <img 
          src={aboutpicture}
          alt="paysage de montagne" 
        />
        <p>Fiabilité</p>
        <p>Respect</p>
        <p>Service</p>
        <p>Sécurité</p>

    </div>
      
    
  
  )
}

export default About;