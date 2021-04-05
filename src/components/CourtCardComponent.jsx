import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
	root: {
		minWidth: 330,
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	grid: {
		backgroundColor: "white",
	},
});

export default function CourtCardComponent(props) {
	const classes = useStyles();
	const noImageUrl =
		"https://causeofaction.org/wp-content/uploads/2013/09/Not-available.gif";
	const {
		name,
		address,
		city,
		province,
		country,
		hours,
		access,
		type,
		hoopCount,
		imageUrls,
	} = props.location;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={imageUrls ? imageUrls[0] : noImageUrl}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{address}
					</Typography>
					<Typography gutterBottom variant="subtitle2" component="h2">
						{city + " " + province + ", " + country}
					</Typography>
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
						item
						xs={12}
						className={classes.grid}
					>
						<Typography variant="body2" component="p">
							<b>Type:</b> {type}
						</Typography>
						<Typography variant="body2" component="p">
							<b>Hours:</b> {hours}
						</Typography>
						<Typography variant="body2" component="p">
							<b>Access:</b> {access}
						</Typography>
						<Typography variant="body2" component="p">
							<b>Number of Hoops:</b> {hoopCount}
						</Typography>
					</Grid>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					<FavoriteBorderIcon />
				</Button>
			</CardActions>
		</Card>
	);
}
