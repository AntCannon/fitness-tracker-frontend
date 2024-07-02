import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
import New from './Pages/New'
import FourOFour from './Pages/FourOFour'

import NavBar from './Components/NavBar'

function App() {
  

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workouts' element={<Index />} />
          <Route path='/workouts/:id' element={<Show />} />
          <Route path='/workouts/:id/edit' element={<Edit />} />
          <Route path='/workouts/new' element={<New />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
