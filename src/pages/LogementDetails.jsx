import { useParams } from 'react-router-dom'
import '../pages/logementdetails.scss'
import logements from '../data/logements.json'


function LogementDetails() {
  const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    if (!logement) {
  return (
      <div className="page">
        <div className="logement-not-found">
          <h1>Logement non trouvé 🙈</h1>
          <p>Le logement demandé n'existe pas.</p>
        </div>
      </div>)}
  return (
    <div className="logement">
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <button>{logement.tags}</button>
<p>test page logement</p>
      </div>
  )
}

export default LogementDetails


