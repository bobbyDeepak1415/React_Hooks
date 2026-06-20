import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import Demo from "./Demo.jsx";
// import Form1 from "./FormValidation/Form1.jsx";
// import Form2 from "./FormValidation/Form2.jsx";
import Form1 from "./FormValidation/Form1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Demo /> */}
    <Form1/>
  </StrictMode>,
);



