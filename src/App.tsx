import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AcademicProjects from './pages/AcademicProjects'
import PersonalProjects from './pages/PersonalProjects'
import Experience from './pages/Experience'
import Articles from './pages/Articles'
import ArticleReader from './pages/ArticleReader'
import Admin from './pages/Admin'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/academic" element={<AcademicProjects />} />
          <Route path="/projects/personal" element={<PersonalProjects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleReader />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  )
}
