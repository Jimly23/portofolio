import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/templates/Navbar'

function App() {

  return (
    <Router>
      <div className='relative mt-20'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
