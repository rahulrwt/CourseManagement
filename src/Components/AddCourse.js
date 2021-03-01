 
import React from 'react'
import { Container, Form, FormGroup, Input ,Button} from 'reactstrap'

const AddCourse=()=>
{
    return(
        <div>
            <h1 className="text-center my-3"></h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                    type="text"
                     placeholder="Enter here" 
                     name="userId"
                     id="userId"
                     />
                </FormGroup>
             
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title here" 
                    id="Title"/>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea"
                     placeholder="Enter Description here" 
                    id="Title"
                    style={{height:150}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success"> Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>

        </div>
    )
}
export default AddCourse;