import { Profiler, StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import Demo from "./Demo.jsx";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

<BrowserRouter>
<Demo />
</BrowserRouter>



    </StrictMode>,
);


