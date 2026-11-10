import { createSlice } from "@reduxjs/toolkit"


const initialState={
  value:32
}

const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
state.count+=1
        }
    }
})

export const {increment} =CounterSlice.actions


export default CounterSlice.reducer