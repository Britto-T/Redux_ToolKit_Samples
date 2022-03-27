import {bindActionCreators, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IBank{
    value:number;
    showComponent:boolean;
}

const initialState:IBank={
    value:0,
    showComponent:false,
}

const BankSlice = createSlice({
    name:"Bank",
    initialState,
    reducers:{
        onDepositMoney(state,action:PayloadAction<number>){
            state.value= state.value + action.payload;
        },
        onWithdrawMoney(state,action:PayloadAction<number>){
            state.value= state.value - action.payload;
        },
        onBankrupt(state){
            state.value= 0;
        },
        onShow_Hide(state,action:PayloadAction<boolean>){
            state.showComponent=action.payload;
        },
    }
})

export const{onDepositMoney,onWithdrawMoney,onBankrupt,onShow_Hide} = BankSlice.actions
export default BankSlice.reducer

