import React from 'react'
import Course from './Course';

const App = () => {
  return (
    <div>
      <Course courseDetails={{
        courseName:"MERN",
        courseAvail:true,
        courseDuration:"3 month"
      }} />
    </div>
  )
}

export default App
