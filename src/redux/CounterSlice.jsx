import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:0
}


const CounterSlice=createSlice({
    initialState,
    // name:"counter",
    name:"hello",
    reducers:{
        decrement:(state)=>{
state.count-=1
        }
    }

})


export const {decrement} =CounterSlice.actions

export default CounterSlice.reducer