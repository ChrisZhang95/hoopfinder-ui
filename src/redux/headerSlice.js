import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
	name: "header",
	initialState: {
		drawerOpened: false,
		drawerWidth: 0,
	},
	reducers: {
		openDrawer: (state, action) => {
			state.drawerOpened = true;
			state.drawerWidth = action.payload;
		},
		closeDrawer: (state, action) => {
			state.drawerOpened = false;
			state.drawerWidth = action.payload;
		},
	},
});

export const { openDrawer, closeDrawer } = headerSlice.actions;
export const selectHeaderState = (state) => state.header;
export default headerSlice.reducer;
