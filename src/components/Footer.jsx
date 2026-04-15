import '../styles/footer.scss'
import logowhite from '../assets/logowhite.svg'



const Footer = () => {
  return (
      <div className="footer">
        <img 
          src={logowhite} 
          alt="Logo maison kasa blanc" 
          className="banner-logo" 
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
  )
}

export default Footer;