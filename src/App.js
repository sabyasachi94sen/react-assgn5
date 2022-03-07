import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Contact from './Contact.js';
import Home from './Home.js';
import Student from "./Student.js";

import Studentdesc from "./Student-desc.js"
import Header from './Header.js'
import { StudentProvider } from "./StudentContext.js";



const App=()=> {


  


  
  

    
  return (

    <>
   
   
    <Router>
    <StudentProvider>
      <Header />
   
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
       
        <Route path="/student" element={<Student />} />
        <Route path="/student/1" element={<Contact /> } />
        <Route path="/student-desc" element={<Studentdesc /> } >
          <Route path=":path" element={<Studentdesc />} />

          </Route>
        
       
          

        
         
      </Routes>
      </ StudentProvider>
      
    </Router>
   
    
    </>
   
  );
}

export default App;
