import { createSerializableStateInvariantMiddleware, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userAdded(state, action) {
            state = [action.payload];
            return state;
        },
        userToggled(state, action){
            return [];
        }
    }
});

export const { userAdded, userToggled } = userSlice.actions;
export default userSlice.reducer;