import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
	name: "header",
	initialState: {
		drawerOpened: false,
		drawerWidth: 0,
		courtWizardOpened: false,
		courtWizardInfo: null,
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
		openCourtWizard: (state, action) => {
			state.courtWizardOpened = true;
			state.courtWizardInfo = action.payload;
		},
		closeCourtWizard: (state) => {
			state.courtWizardOpened = false;
		},
	},
});

export const {
	openDrawer,
	closeDrawer,
	openCourtWizard,
	closeCourtWizard,
} = headerSlice.actions;
export const selectHeaderState = (state) => state.header;
export default headerSlice.reducer;
