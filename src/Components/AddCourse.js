 
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import { Container, Form, FormGroup, Input ,Button} from 'reactstrap'
import base_url from '../api/bootapi';

const AddCourse=()=>
{

    useEffect(()=>{
        document.title="Add Course || Course Management";
    },[])

    const [course,setCourse ]=useState({});
 
    const handleForm=(e)=>{
        console.log(course);

        e.preventDefault();
    }

    //creating fumction to post data on server

    const postDataToServer=(course)=>{
                axios.post(`${base_url}/courses`,course).then(
                    (response)=>{
                        toast.success("Course added");
                    },
                    (error)=>{
                            console.log(error);
                            toast.error("Something went wrong;")
                    }
                )
    }

    return(
        <div>
            <h1 className="text-center my-3"></h1>
            <Form onSubmit={handleForm} >
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                    type="text"
                     placeholder="Enter here" 
                     name="userId"
                     id="userId"
                     onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}

                     />
                </FormGroup>
             
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title here" 
                    id="userId"
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label form="description">Course Description</label>
                    <Input type="textarea"
                     placeholder="Enter Description here" 
                    id="description"
                    style={{height:150}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                  />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success"> Add Course</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>

        </div>
    )
}
export default AddCourse;