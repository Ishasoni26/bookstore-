import React from 'react'
import Home from './home/home'
import Courses from './Courses/courses'
import { Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'
import Contact from './Components/contact'
const App = () => {
  return (
    <> 
    <div className='dark:bg-slate-600 dark:text-white'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
    </>
  
     
  )
}

export default App
