import { Routes } from 'react-router-dom'

import home from './pages/home'
import Trapezio from './pages/Trapezio'
import IMC from './pages/IMC'

export default function App(){
  return(
<Routes>
  <Route path='/'            element={<home />}         />
  <Route path='/trapezio'    element={<Trapezio />}     />
  <Route path='/imc'         element={<IMC />}          />
  // ... demais rotas
</Routes>
  )
}


