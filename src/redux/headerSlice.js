import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
	name: "header",
	initialState: {
		drawerOpened: false,
		drawerWidth: 0,
		newCourtWizardOpened: false,
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
		openNewCourtWizard: (state) => {
			state.newCourtWizardOpened = true;
		},
		closeNewCourtWizard: (state) => {
			state.newCourtWizardOpened = false;
		},
	},
});

export const {
	openDrawer,
	closeDrawer,
	openNewCourtWizard,
	closeNewCourtWizard,
} = headerSlice.actions;
export const selectHeaderState = (state) => state.header;
export default headerSlice.reducer;
