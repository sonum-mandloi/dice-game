import { createSlice } from '@reduxjs/toolkit'


const SliceDice = createSlice({
    name:"dice",
    initialState:{
        SelectedNoList:[],
        RoleList:[0]
    },
    reducers:{
     getSelectedNo(state,action){
        state.SelectedNoList = action.payload
     },
     getRoleDice(state,action){
         const storeTotal = state.SelectedNoList === action.payload
         console.log(storeTotal);
         if(storeTotal){
            state.RoleList=state.RoleList + action.payload
         }else{
            state.RoleList = state.RoleList - 2
         }
     },
     getReset(state,action){
        state.RoleList = action.payload
     }
    }
})
export const{getSelectedNo,getRoleDice,getReset}=SliceDice.actions
export default SliceDice.reducer