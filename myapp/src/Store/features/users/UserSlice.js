import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userAdded(state, action) {
            state = action.payload;
        },
        userToggled(state, action){
            state = {};
        }
    }
});

export const { userAdded, userToggled } = userSlice.actions;
export default userSlice.reducer;