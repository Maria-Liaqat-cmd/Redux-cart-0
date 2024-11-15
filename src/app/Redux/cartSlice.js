"use client"

import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
       name:"Cart",
    initialState:[],
       reducers:{
        increment(state,action){
            state.push(action.payload)
        },
        decrement(state,action){
            return state.filter((item)=>item.id !== action.payload);
        }
       }
    })
  
export const {increment,decrement}=cartSlice.actions;
export default cartSlice.reducer