import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: [] ,
    reducers: {
        addUser(state,action) {
            state.push(action.payload)
            console.log("addusers",action.payload)
        },
        removeuser(state,action) {
            state.splice(action.payload,"1")
        },
        deleteuser(state,action) {
            return state=[];
        }
    }
})

console.log(userSlice.actions)

export default userSlice.reducer;
export const {addUser,removeuser,deleteuser} = userSlice.actions;