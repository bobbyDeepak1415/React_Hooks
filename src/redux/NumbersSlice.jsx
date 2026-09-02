import { createSlice } from "@reduxjs/toolkit";

const initialState={
    num:0
}




const NumbersSlice=createSlice({
    name:"numbers",
    initialState,
    reducers:{
        increment:()=>{
            state.num+=1
        },
        decrement:()=>{
            state.num-=1
        }
    }



})

export const {increment,decrement}=NumbersSlice.actions

export default NumbersSlice.reducer