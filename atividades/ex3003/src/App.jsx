import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ImpostoRenda from './pages/ImpostoRenda'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/imposto-renda' element={<ImpostoRenda />} />
      </Routes>
    </BrowserRouter>
  )
}


