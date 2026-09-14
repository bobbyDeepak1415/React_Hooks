// import { Profiler, StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import './index.css'
// // import App from './App.jsx'
// import Demo from "./Demo.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
      

// <Demo />

//     </StrictMode>,
// );



let str="Hello world"


function display(str){


  let arr=str.split(" ")

  let result=[]

  for(let i of arr){
    let seen=new Set(i)
result.push(`${i}-${seen.size}`)
  }
  

return result  

}


console.log(display(str))

