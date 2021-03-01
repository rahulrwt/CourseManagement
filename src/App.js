import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home'
import Course from "./Components/Course";
import Allcourses from "./Components/Allcourses"
import AddCourse from './Components/AddCourse';
import Header from './Components/Header'
import Menus from './Components/Menus';
import {
  BrowserRouter as Router,Route
} from "react-router-dom";
import Allcourse from './Components/Allcourses';
function App() {

  const btnHandle=function()
  {
    toast.success("Done");
  }
  return (
   <div>
     <Router>
       <ToastContainer/>
       <Container>
         <Header />
         <Row>
           <Col md={4}>
             <Menus/>
           </Col>
          
           <Col md={8}>
             <Route path="/" component={Home} exact/>
             <Route  path="/add-course" component={AddCourse} exact/>
             <Route path="/view-courses" component={Allcourses} exact/>
           
           </Col>
         </Row>
       </Container>
       </Router>
   </div>
  );
}
export default App;
