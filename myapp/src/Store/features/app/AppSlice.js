import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: [],
    reducers: {
        appAdded(state, action){
            console.log('app => ', action.payload);
            return [action.payload];
        },
        appToggled(state, action){
            return [];
        }
    }
});

export const { appAdded, appToggled } = appSlice.actions;
export default appSlice.reducer;