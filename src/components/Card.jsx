import { Link } from 'react-router-dom'
import './card.scss'

function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  )
}

export default Card