import React from 'react'
import Navbar from './pages/navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Navbar/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App