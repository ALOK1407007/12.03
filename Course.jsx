import React from 'react'



const Course = (props) => {
	if(props.courseDetails.courseAvail===true){ 
  return (
    <>
	 {props.courseDetails.courseName},
	 {props.courseDetails.courseDuration},
	 <button style={{color:'red',fontSize:"25px",backgroundColor:"black"}}>course Avail</button>
    </>
  )}
  else {
	return( 
	<div>
	 {props.courseDetails.courseName} <br/>
	 <button style={{color:'violet'}}>course not Avail</button>
	</div>)
  }
}

export default Course