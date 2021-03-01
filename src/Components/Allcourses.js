import React, { useState ,useEffect} from 'react'
import Course from "./Course"
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';

const Allcourse=()=>{

useEffect(()=>{
    document.title="All Courses || Course Management";
    getAllCoursesFromServer();              //calling server
},[])

//function to call server

const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{

            toast.success("Courses has been loaded")
            setCourses(response.data);
        },
        (error)=>{
           toast.error("Something went wrong",{position:'bottom-right'});
        }
    )
}

    const [courses,setCourses]=useState([
      
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