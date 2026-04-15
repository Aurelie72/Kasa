import { NavLink } from 'react-router-dom'
import '../styles/navigation.scss'

const Navigation = () => {
  return (
    <div >
      <nav>
        <ul className="navigation">
          <li >
            <NavLink to="/home" className={(nav)=>(nav.isActive ? " nav-link nav-active" :"nav-link")}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(nav)=>(nav.isActive ? "nav-link nav-active" :"nav-link")}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation; 




