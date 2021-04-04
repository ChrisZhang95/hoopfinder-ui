import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CourtCardComponent from "../components/CourtCardComponent";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: 10,
		marginLeft: 20,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function ListViewContainer() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root} spacing={3}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={4}>
					{new Array(20).fill(0).map((value) => (
						<Grid key={value} item>
							<CourtCardComponent />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
