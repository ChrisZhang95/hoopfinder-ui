import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectHeaderState } from "../redux/headerSlice";
import ListViewContainer from "./ListViewContainer";
import { Switch, Route, Redirect } from "react-router-dom";
export default function ContentContainer() {
	const headerState = useSelector(selectHeaderState);
	const useStyle = makeStyles((theme) => ({
		content: {
			width: "100%",
			height: "100%",
		},
		contentShift: {
			width: `calc(100% - ${headerState.drawerWidth}px)`,
			marginLeft: headerState.drawerWidth,
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	}));
	const classes = useStyle();
	return (
		<div
			className={clsx(classes.content, {
				[classes.contentShift]: headerState.drawerOpened,
			})}
		>
			<Switch>
				<Route exact path="/">
					<Redirect to="/list" />
				</Route>
				<Route path="/list" component={ListViewContainer} />
			</Switch>
		</div>
	);
}
