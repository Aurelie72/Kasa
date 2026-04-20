import '../styles/collapse.scss'
import { useState } from 'react'
import vectorClose from '../assets/vector-close.svg'
import vectorOpen from '../assets/vector-open.svg'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <img src={isOpen ? vectorOpen : vectorClose} alt="toggle icon"></img>
      </div>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse