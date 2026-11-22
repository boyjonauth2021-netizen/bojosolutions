import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { kindMeta, kindOrder } from '../catalog'

export function Layout() {
  return (
    <>
      <header className="bar">
        <NavLink className="brand" to="/" end>
          <img src={logo} alt="" width="36" height="36" />
          <span>Bojo Solutions</span>
        </NavLink>
        <nav>
          {kindOrder.map((kind) => (
            <NavLink key={kind} to={kindMeta[kind].path}>
              {kindMeta[kind].nav}
            </NavLink>
          ))}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="foot">
          <img src={logo} alt="" width="32" height="32" />
          <div>
            <strong>Bojo Solutions</strong>
            <span>North of Mauritius</span>
          </div>
        </div>
        <a href="mailto:boyjonauth2022@gmail.com">boyjonauth2022@gmail.com</a>
      </footer>
    </>
  )
}
