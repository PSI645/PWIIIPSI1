import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import MediaEscolar from './pages/MediaEscolar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="media" element={<MediaEscolar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
