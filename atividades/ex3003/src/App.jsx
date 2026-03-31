import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/HomePage'
import HomePage from './pages/HomePage'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}


