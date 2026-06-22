import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form1 from "./FormValidation/Form1";
// import './index.css'
// import App from './App.jsx'
// import Demo from "./Demo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Demo /> */}
    <Form1/>
  </StrictMode>,
);
