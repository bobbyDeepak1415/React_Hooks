// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'
// import Demo from './Demo.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Demo/>
//   </StrictMode>,
// )

let str = "AAABBCCADDDDBA";

function display(str) {
  let result = "";
  let obj = {};
  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen = new Set();

  for (let i of str) {
    if (!seen.has(i)) {
      result += i + obj[i];
      seen.add(i);
    }
  }

  return result;
}

console.log(display(str));
