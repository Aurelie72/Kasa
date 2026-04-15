import '../styles/logo.scss'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='logo'>
      <img 
        src={logo} 
        alt="Logo maison kasa"  
      />
    </div>
  )
}

export default Logo;