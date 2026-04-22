import '../styles/collapse.scss'
import { useState } from 'react'
import vectorClose from '../assets/vector-close.svg'
import vectorOpen from '../assets/vector-open.svg'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <img className={`collapse-arrow ${isOpen ? "open" : ""}`}
        src={vectorClose} alt="toggle icon"></img>
      </div>
      {/* src={isOpen ? vectorOpen : vectorClose} */}
   <div className="collapse-content">
        {children}
      </div>
      {/* {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )} */}
    </div>
  )
}

export default Collapse