import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { AppThunk } from "../../app/store";

interface IStudent{
    studentDetails:any
}

const initialState:IStudent={
    studentDetails:[]
}

const studentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        setStudentDetails(state,action:PayloadAction<any>){
            state.studentDetails = action.payload;
        }
    }
})

export const getStudentDetails = ():AppThunk=>async(dispatch)=>{
    try{
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        if(result.data){
            dispatch(setStudentDetails(result.data));
        }
    }
    catch{

    }
}

export const{setStudentDetails} = studentSlice.actions;
export default studentSlice.reducer