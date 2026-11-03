import { Profiler, StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import Demo from "./Demo.jsx";
import LoaderComponent from "./Loader/LoaderComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}


{/* <Demo /> */}
<LoaderComponent/>

    </StrictMode>,
);


