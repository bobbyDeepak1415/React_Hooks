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



let str='Hellopppp World'


function display(str){

  let arr=str.split(" ")
  let result=[]

  for(let i of arr){
result.push(`${i}-${i.length}`)
  }

  return result

}


console.log(display(str))