import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { CategoryPage } from './pages/CategoryPage'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="websites" element={<CategoryPage kind="website" />} />
          <Route path="apps" element={<CategoryPage kind="webapp" />} />
          <Route path="games" element={<CategoryPage kind="game" />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
