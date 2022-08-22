import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'

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
          path="/skills"
          element={<Skills />}
        />
        <Route
          path="/projects"
          element={<Projects />}
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
