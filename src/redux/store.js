import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "./headerSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		header: headerReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
