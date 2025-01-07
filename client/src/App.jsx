import React, { lazy, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
const MobileOption = lazy(()=>import('./components/MobileOption')) 
const NotFound = lazy(()=>import('./pages/NotFound'))

function App() {
  const [animateCategories, setAnimatecategories] = useState(false)
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home animateCategories={animateCategories} setAnimatecategories={setAnimatecategories}  /> } />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <MobileOption setAnimatecategories={setAnimatecategories} />
    </div>
  )
}

export default App
