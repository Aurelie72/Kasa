import '../styles/header.scss'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo.jsx'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header


