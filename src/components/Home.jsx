import logements from '../data/logements.json'
import './home.scss'

function Home() {
  console.log(logements)

  return (
    <div className="home">
      <h1>Accueil</h1>
    </div>
  )
}

export default Home