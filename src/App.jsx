import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'

import Project from './Routes/Project'
import About from './Routes/About'
import "./index.css"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
