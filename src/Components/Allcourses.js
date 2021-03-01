import React, { useState } from 'react'
import Course from "./Course"

const Allcourse=()=>{

    const [courses,setCourses]=useState([
        {title:"Java Course",description:"this is demo course"},
        {title:"Django Course",description:"this is demo course"}
    ])
    return(
        <div>
            <h1>All Course</h1>
            <p> List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=><Course course={item} />) :"NO COURSES" 
            }
        </div>


    )
}
export default Allcourse;