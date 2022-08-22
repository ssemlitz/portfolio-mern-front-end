import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<Landing />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Work />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  )
}

export default App
