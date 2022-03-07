import React ,{createContext,useState} from "react";






export const StudentContext=createContext();

export const StudentProvider=(props)=>{
        var [students,setStudents] =useState([])
  

    return (
        
        <>
      

        <StudentContext.Provider value={[students,setStudents]}>
           {props.children}
        </StudentContext.Provider>
        </>
    )
}