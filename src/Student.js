import React from 'react';
import MaterialTable from "material-table";
import {Link,useLocation} from "react-router-dom";
import "./index.css";




const Student=()=>{


    const data=[
        {Name:"John",Age: "26", Course: "MERN" ,Batch:"October",Change : <Link to="/student-desc">Edit</Link> },
        {Name:"Doe",Age: "25", Course: "MERN" ,Batch:"November",Change : <Link to="/student-desc" >Edit</Link>},
        {Name:"Biden",Age: "26", Course: "MERN" ,Batch:"September",Change : <Link to="/student-desc" >Edit</Link>},
        {Name:"Barar",Age: "22", Course: "MERN" ,Batch:"September",Change : <Link to="/student-desc" >Edit</Link>},
        {Name:"Choel",Age: "23", Course: "MERN" ,Batch:"December",Change : <Link to="/student-desc" >Edit</Link>},
        {Name:"Barack",Age: "24", Course: "MERN" ,Batch:"October",Change : <Link to="/student-desc" >Edit</Link>} ]

        const columns=[
            {title : "Name",field: "Name"},
            {title : "Age",field: "Age"},
            {title : "Course",field: "Course"},
         
            {title : "Batch",field: "Batch"},
            {title : "Change" ,field : "Change"}

            
        ]

    var location=useLocation();
    console.log(location.state);

    if(location.state!=null)
    {

    var x=location.state.newData;
    data.push(x);  
    console.log(data); 

    
    }


   

       
            
            

        
       

        return (
           
           <div className="student-wrap">

           <div className="text-wrap">
                <span className="span-1"><h3>Student Details</h3></span>
                <Link to="/student-desc" className="btn btn-success">Add Students</Link>
            </div>

            <MaterialTable title="" style={{width:"60%",margin:"auto" ,position:"relative",top: "40px" ,height:"50"}}
            data={data}
            columns={columns}
            options={{search:false,
            paging:false}} />

             </div>


        )
    
}

export default Student;