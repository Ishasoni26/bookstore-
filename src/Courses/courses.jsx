import React from 'react'
import Footer from '../Components/Footer'
import Course from '../Components/Course'



const courses = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default courses
