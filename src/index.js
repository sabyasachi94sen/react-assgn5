import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// var x={
//   fname: "",
//   lname : "",
//   phn: "",
// }

// const FormData=()=>{

//   const [inputField,setInputField]=useState({
//     fname : "",
//     lname: "",
//     phn: "",
    
//   })

  

//   const handleChange=(e)=>{


//     setInputField({[e.target.name]: e.target.value});
//     x=inputField;
    
//   }

//   const submitted=()=>{

 
//      console.log("hello");
//   }

//   return (

//     <form>
//    <label>First Name</label>
//      <input type="text" name="fname" onChange={handleChange}></input>
//      <p></p>

//      <label>Last Name</label>
//      <input type="text" name="lname" onChange={handleChange}></input>
//      <p></p>

//      <label>Phone</label>
//      <input type="number" name="phn" onChange={handleChange}></input>
//      <p></p>

//      <input type="submit" onClick={submitted}></input>
   


//     </form>
//   )
// }

// const FormTable=()=>{

  




//   return (

//     <table>
//     <thead>
//       <tr>
//         <th>First name</th>
//         <th>Last name</th>
//         <th>Phone</th>
//       </tr>
//     </thead>

//     <tr>
//       <td>{x.fname}</td>
//       <td></td>
//       <td></td>
//     </tr>

//     </table>
//   )
// }


// const App=()=>{

//   return (
//     <section>
//       <FormData  />
//       <FormTable />
//     </section>
//   )
// }






ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);


