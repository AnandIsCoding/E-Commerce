import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
const MobileOption = lazy(()=>import('./components/MobileOption')) 
const NotFound = lazy(()=>import('./pages/NotFound'))
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <MobileOption/>
    </div>
  )
}

export default App
