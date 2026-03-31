import { BrowserRouter, Route, Routes } from 'react-router-dom'

import home from './pages/home'
import Trapezio from './pages/Trapezio'
import IMC from './pages/IMC'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<home/>} />
      </Routes>
    </BrowserRouter>
  )
}


