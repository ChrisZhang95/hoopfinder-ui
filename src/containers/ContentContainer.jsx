import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectHeaderState } from "../redux/headerSlice";

export default function ContentContainer() {
	const headerState = useSelector(selectHeaderState);
	const useStyle = makeStyles((theme) => ({
		content: {
			width: "100%",
			height: "100%",
			backgroundColor: "#20000f",
			textAlign: "left",
			color: "white",
		},
		contentShift: {
			textAlign: "left",
			height: "100%",
			color: "white",
			backgroundColor: "#20000f",
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
			this is some content
		</div>
	);
}
