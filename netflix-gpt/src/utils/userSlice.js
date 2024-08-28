import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            console.log("action-----------------", action);
            return action.payload;
        },
        deleteUser: () => {
            return {};
        }
    }
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;