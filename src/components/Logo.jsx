import './logo.scss'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <img 
        src={logo} 
        alt="Logo maison kasa" 
        className="banner-logo" 
      />
    </div>
  )
}

export default Logo;