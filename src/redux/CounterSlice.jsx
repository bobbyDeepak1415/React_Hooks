import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:0
}


const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:()=>{

        },
        decrement:()=>{

        },
    }

})


export default CounterSlice.reducer