import React,{useContext} from 'react';
import MaterialTable from "material-table";
import {Link} from "react-router-dom";
import { StudentContext } from './StudentContext';

import "./index.css";




const Student=()=>{

    var [students]=useContext(StudentContext);
    


  

        const columns=[
            {title : "Name",field: "Name"},
            {title : "Age",field: "Age"},
            {title : "Course",field: "Course"},
         
            {title : "Batch",field: "Batch"},
            {title : "Change" ,field : "Change"}

            
        ]


   

       
            
            

        
       

        return (
           
           <div className="student-wrap">

           <div className="text-wrap">
                <span className="span-1"><h3>Student Details</h3></span>
                <Link to="/student-desc" className="btn btn-success">Add Students</Link>
            </div>

            <MaterialTable title="" style={{width:"60%",margin:"auto" ,position:"relative",top: "40px" ,height:"50"}}
            data={students}
            columns={columns}
            options={{search:false,
            paging:false}} />

             </div>


        )
    
}

export default Student;