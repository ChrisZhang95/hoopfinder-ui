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

const location = {
	address: "1101 Bay Street",
	city: "Toronto",
	province: "ON",
	country: "Canada",
	name: "YMCA",
	hours: "24 hours",
	access: "public",
	type: "outdoor",
	hoopCount: 4,
	imageUrls: [
		"https://i.pinimg.com/originals/2f/ea/e3/2feae37441231bd364465a71a401403f.png",
	],
};

export default function ListViewContainer() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root} spacing={3}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={4}>
					{new Array(20).fill(0).map((value) => (
						<Grid key={value} item>
							<CourtCardComponent location={location} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
