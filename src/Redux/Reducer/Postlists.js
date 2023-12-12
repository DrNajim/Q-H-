import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getList=createAsyncThunk("PostLists/getList", async ()=>{
    return axios.get("https://dummyjson.com/posts",)
    .then(res=>{ 
        return res.data}) 
    .catch(err=>console.log(err))
})  
export const update=createAsyncThunk("PostLists/update", async (newtet)=>{
    return axios.put(`https://dummyjson.com/posts/${newtet.id}`,{ body: newtet.body})
    .then(res=>{console.log(res.data)
        return res.data}) 
    .catch(err=>console.log(err))
})  
const PostlistsSlice = createSlice({
    name : "Tasks",
    initialState : {
        tasks :[],
        status:"",
        erreur:"",
    },
    reducers:{
    },
    extraReducers: (builder)=>
    builder.addCase(getList.fulfilled, (state, action)=>{
        state.tasks=action.payload
        state.status="Accepted"
    })
    .addCase(getList.rejected, (state, action)=>{
        state.erreur=action.payload
        state.status="Rejected"
    })
    .addCase(getList.pending, (state, action)=>{
        state.status="Pending"})
    .addCase(update.fulfilled, (state, action)=>{
        state.tasks=action.payload
        state.status="Accepted"
    })
    .addCase(update.rejected, (state, action)=>{
        state.erreur=action.payload
        state.status="Rejected"
    })
    .addCase(update.pending, (state, action)=>{
        state.status="Pending"
    }) 
    })

export const {setstat}= PostlistsSlice.actions
export default PostlistsSlice.reducer

