import React from "react";
import "./index.css";
import {Link} from "react-router-dom";



class Studentdesc extends React.Component{

    state={
        Name: "",
        Age:"",
        Course: "",
        Batch: "",
        Edit : "",
  
        
    }

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
    

   eventHandler=(event)=>{

    
    this.setState({
        [event.target.name]: event.target.value,
    })
     
   }

  
   
 
   



    render(){

          var tempObj={
        Name:this.state.Name,
        Age:this.state.Age,
        Course:this.state.Course,
        Batch:this.state.Batch,
        
         }
         console.log(tempObj);


     
     
     
       

       

       return (

        <div className="contact-wrap">
             <div className="wrapper">

     <div className="wrap-1">

           <label >Name :</label>
           <input type="text" id="name" name="Name" onChange={this.eventHandler.bind(this)}></input>

          <label>Age :</label>
          <input type="number" id="age" name="Age" onChange={this.eventHandler.bind(this)}></input>

          </div>
         <div className="wrap-2">


          <label>Course :</label>
           <input type="text" id="course" name="Course" onChange={this.eventHandler.bind(this)}></input>

            <label>Batch :</label>
            <input type="text" id="batch" name="Batch" onChange={this.eventHandler.bind(this)}></input>

          

           </div>
 



            
            
            
        </div>

        <div className="btn-wrap">


        <button className="btn btn-warning" disabled >Cancel</button>

   <Link to="/student" className="btn btn-warning" state={{newData:tempObj}}>Submit</Link>

 </div>

        </div>

       )
    }
    
}

export default Studentdesc;