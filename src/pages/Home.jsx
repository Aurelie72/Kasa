import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logements.json'
import './home.scss'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="cards-container">
        {logements.map((logement) => (
          <Card className="cards"
            key={logement.id}        
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home