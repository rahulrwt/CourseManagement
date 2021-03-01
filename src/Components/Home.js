import React from 'react'
import {Jumbotron,Container,Button} from "reactstrap";

const Home=()=>
{
    return (
        <div>
            <Jumbotron className="text-center  ">
                <h1> Courses Management</h1>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
                
            </Jumbotron>
        </div>
    )
}
export default Home;