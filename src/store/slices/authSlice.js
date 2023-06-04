import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authe",
    initialState : {
        userInfo : {userName: 'ade', password : 'me', token : '246'}
    },
    reducers : {
        setUserDetails : (state, sentCred)=>{
            console.log(sentCred.payload)
        },
        clearUserDetails : (state)=>{}
    },
});

export default authSlice.reducer;
export const updateUser = authSlice.actions.setUserDetails;