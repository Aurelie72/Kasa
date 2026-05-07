import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

import LogementDetails from './pages/LogementDetails'

import Error from './pages/Error';

function AppRouter() {
  return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/logement/:id" element={<LogementDetails />} />
         <Route path="*" element={<Error/>} />
      </Routes>  
  )
}

export default AppRouter