import { createReducer } from "@reduxjs/toolkit";
import { act } from "react";


let istate = {name: "", idk: "", email: "", image: "", usertype: ""};


export default createReducer(istate, (build)=>{
    build.addCase('update_idk', (state, action)=>{
        state.idk = action.payload;
    })

    build.addCase('update_image', (state, action)=>{
        state.image = action.payload;
    })
    build.addCase('update_name', (state, action)=>{
        state.name = action.payload;
    })
    build.addCase('update_usrtype', (state, action)=>{
        state.usertype = action.payload
    })

    build.addCase('update_email', (state, action)=>{
        state.email = action.payload;
    })
})