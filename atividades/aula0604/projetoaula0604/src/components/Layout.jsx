import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Exercícios de Fixação</h1>
      </header>

      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'ativo' : ''}>
          Início
        </NavLink>
        <NavLink to="/media" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Média Escolar
        </NavLink>
        <NavLink to="/desconto" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Desconto
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Curso Técnico de Desenvolvimento de Sistemas — 3º Semestre</p>
      </footer>
    </div>
  )
}
