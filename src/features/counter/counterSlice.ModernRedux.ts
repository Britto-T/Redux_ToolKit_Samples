import { createSlice,PayloadAction} from "@reduxjs/toolkit";

interface IcounterState{
    value:number;
}

const initialState:IcounterState={
    value:0
}

const modernCounterSlice = createSlice({
    name:"modernCounter",
    initialState,
    reducers:{
        incremented(state){
            state.value++;
        },
        amountAdded(state,action:PayloadAction<number>){
            state.value += action.payload;
        },
    }
})

export const {incremented,amountAdded} = modernCounterSlice.actions;
export default modernCounterSlice.reducer;

