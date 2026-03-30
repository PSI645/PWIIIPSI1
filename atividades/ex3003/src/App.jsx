import { Routes } from 'react-router-dom'
import Home from './pages/home'

// Dentro de <Routes>, adicione como PRIMEIRA rota:
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


