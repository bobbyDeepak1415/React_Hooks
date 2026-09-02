import { createSlice } from "@reduxjs/toolkit";

const initialState={
    num:0
}




const NumbersSlice=createSlice({
    name:"numbers",
    initialState,
    reducers:{
        increment:(state)=>{
            state.num+=1
        },
        decrement:(state)=>{
            state.num-=1
        },
        multiplyByAmount:(state,action)=>{
            state.num*=action.payload
        },
    }



})

export const {increment,decrement,multiplyByAmount}=NumbersSlice.actions

export default NumbersSlice.reducer