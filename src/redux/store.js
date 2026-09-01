import { configureStore } from "@reduxjs/toolkit";
import 

const store=configureStore({
    reducer:{
counter:CounterReducer
    }
})

export default store