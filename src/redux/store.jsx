import { configureStore } from "@reduxjs/toolkit";
import NumbersReducer from './NumbersSlice'

 const store=configureStore({
    reducer:{
  numbers:NumbersReducer
    }
})

export default store