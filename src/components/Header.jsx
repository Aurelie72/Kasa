import './header.scss'
import Navigation from '../components/Navigation'
import Logo from './LOGO'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header


