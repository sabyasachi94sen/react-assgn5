
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './Contact.js';
import Home from './Home.js';
import Student from "./Student.js";

import Studentdesc from "./Student-desc.js"
import Header from './Header.js'



const App=()=> {


  


  
  

    
  return (

    <>
   
    <Router>
      <Header />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/1" element={<Contact /> } />
        <Route path="/student-desc" element={<Studentdesc /> } />
        
          

        
         
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
