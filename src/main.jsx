import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Child1 from "./Child1";
// import './index.css'
// import App from './App.jsx'
// import Demo from "./Demo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Demo /> */}
    <Child1/>
    
  </StrictMode>,
);
