import React,{useContext,useState} from "react";
import "./index.css";
import {Link,useParams,useNavigate} from "react-router-dom";
import { StudentContext } from './StudentContext';



const Studentdesc=()=>{
  var [students,setStudents]=useContext(StudentContext);
  var {path}=useParams();

  var navigate=useNavigate();

  const pathChange=()=>{

    navigate("/student");
  }

   

    const [inputField,setInputField]=useState({
        Name: "",
        Age:"",
        Course: "",
        Batch: "",
  })




   
    // constructor(){
    //     super();
    //     this.state={
    
    //       name : "",
    //       dept :"",
    //       rating : "",
    //       divState:false,
    //       user :[]
    //     }
    //   }
    //    handleChange=(event)=>{
       
    
    //     this.setState({
    //       [event.target.name]: event.target.value})
        
    //    }
    
    //    clickHandler=(event)=>{
    
    //     event.preventDefault();
    
    //     var tempObj={
    //       name: this.state.name,
    //       dept : this.state.dept,
    //       rating: this.state.rating,
          
    //     }
    
    //     var Arr=this.state.user;
    //     Arr.push(tempObj);
    //     this.setState({user: Arr,divState:true});
    
    
    //    }
    

   const eventHandler=(event)=>{

      setInputField({
        ...inputField,
        [event.target.name]: event.target.value,
    })

    }

   const studentData=()=>{
     var len;
    if(path===undefined )
    len=students.length;
    else
    len=path;

    
    console.log(path);


    var tempObj={
      
      Name:inputField.Name,
      Age:inputField.Age,
      Course:inputField.Course,
      Batch:inputField.Batch,
      Change:<Link to={`/student-desc/${len}`}>Edit</Link>,
      index:len,
      
      
       }
        if(path===undefined)
       setStudents([...students,tempObj])
       else
       {
         students[path]=tempObj;
       }

       
       
      
      
      

   }

   var inputVal=[];
 
   if(path===undefined)
   {
   inputVal[0]=[{Name:"",Age:"",Course:"",Batch:""}];
  
   }
   else{
   inputVal[0]=students[path];
   
  
   }
   
     return (

        <>

        <div className="contact-wrap">
             <div className="wrapper">

     <div className="wrap-1">

           <label >Name :</label>
           <input type="text" id="name" defaultValue={inputVal[0].Name} name="Name" onChange={eventHandler}></input>

          <label>Age :</label>
          <input type="number" id="age"  defaultValue={inputVal[0].Age} name="Age" onChange={eventHandler}></input>

          </div>
         <div className="wrap-2">


          <label>Course :</label>
           <input type="text" id="course"   defaultValue={inputVal[0].Course}   name="Course" onChange={eventHandler}></input>

            <label>Batch :</label>
            <input type="text" id="batch"  defaultValue={inputVal[0].Batch}  name="Batch" onChange={eventHandler}></input>

          

           </div>
 



            
            
            
        </div>

        <div className="btn-wrap">


        <button className="btn btn-warning" onClick={pathChange} >Cancel</button>

   <Link to="/student" className="btn btn-warning" onClick={studentData} >Submit</Link>

 </div>

        </div>
        </>

       )
    
    
       }

export default Studentdesc;