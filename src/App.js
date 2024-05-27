import React from 'react'
import Navbar from './pages/navbar'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App