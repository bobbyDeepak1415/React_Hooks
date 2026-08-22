import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:0
}


const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
    state.count=state.count+1
        },
        decrement:(state)=>{
    state.count=state.count-1
        },
        multiplyByAmount:(state,action)=>{
    state.count=state.count+action.payload
        }
    }
})

export const {increment,decrement,multiplyByAmount}=CounterSlice.actions


export const  CounterSlice.reducer