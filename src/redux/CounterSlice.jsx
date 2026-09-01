import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count:0
}

const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{


              return {
            count:state.count+1
              }
        }
    }




})

export const {increment}=CounterSlice.actions

export default CounterSlice.reducer
