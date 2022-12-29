import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userAdded(state, action) {
            state.push(action.payload);
        },
        userToggled(state, action){
            const user = state.find(user => user === action.payload);
        }
    }
});

export const { userAdded, userToggled } = userSlice.actions;
export default userSlice.reducer;