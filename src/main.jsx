import { Profiler, StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import Demo from "./Demo.jsx";
import { Provider } from "react-redux";
import store from './redux/store.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      

<Demo />
    </Provider>
    </StrictMode>,
);
