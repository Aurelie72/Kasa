import { useParams } from 'react-router-dom'
import '../pages/logementdetails.scss'
import logements from '../data/logements.json'
import Collapse from '../components/Collapse'

import fullstar from '../assets/fullstar.svg'
import emptystar from '../assets/emptystar.svg'

import Tags from '../components/Tags.jsx'
import Equipements from '../components/Equipements.jsx'

import Error from '../pages/Error.jsx'
import Slideshow from '../components/Slideshow'

function LogementDetails() {
  const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    if (!logement) {
  return (
<Error />
)
}
  return (
    <div className="logement">
      <div>
        <Slideshow pictures={logement.pictures} />
      </div>
      <section>
      <div>
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>

      <div className="tags-container">
        {logement.tags.map((tag) => (
          <Tags key={tag}   
          tag={tag}     
          />
        ))}
      </div>
      </div>
      <div>
        <span>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="photo propriétaire" />
        </span>
<div>
  {[...Array(5)].map((_, i) => (
    <img key={i}
    src= {i < logement.rating ? fullstar : emptystar} 
    alt ="staricon"
    />
    
  ))}
</div>
      </div>
      </section>
      <div>
  
            <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>
    
            <Collapse title="Equipements">
              <div className="equipement-container">
        {logement.equipments.map((equipement) => (
 
          <Equipements key={equipement}   
            equipement={equipement}     
          />
        ))}
      </div>
        

      </Collapse>
         </div>
      </div>
  )
}

export default LogementDetails


