import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    </>
  )
}


// # REACT_APP_BASE_URL=http://localhost:1337
// # REACT_APP_BASE_API=http://localhost:1337/api/