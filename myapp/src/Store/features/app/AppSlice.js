import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: { app: {}},
    reducers: {
        appAdded(state, action){
            state = {
                app: action.payload
            };
        },
        appToggled(state, action){
            state = { app: {} };
        }
    }
});

export const { appAdded, appToggled } = appSlice.actions;
export default appSlice.reducer;