import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { CourtAccessTypes } from "../constants/court/CourtAccessTypes";
import { CourtTypes } from "../constants/court/CourtTypes";

export default function FormDialog(props) {
	const [access, setAccess] = useState(CourtAccessTypes.Public);
	const [type, setType] = useState(CourtTypes.Outdoor);
	return (
		<div>
			<Dialog
				open={props.open}
				onClose={props.closeWizard}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Add a new court
				</DialogTitle>
				<DialogContent dividers={true}>
					<DialogContentText>
						A request will be sent to the admin, the court will be
						available on HoopFinder once it's approved
					</DialogContentText>
					<form>
						<Grid container item xs={12} spacing={3}>
							<Grid item xs={8}>
								<TextField
									autoFocus
									required
									margin="dense"
									id="address"
									label="Address"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									autoFocus
									required
									margin="dense"
									id="city"
									label="City"
									type="text"
									fullWidth
									item
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									autoFocus
									required
									margin="dense"
									id="province"
									label="Province"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									autoFocus
									required
									margin="dense"
									id="country"
									label="Country"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									autoFocus
									margin="dense"
									id="name"
									label="Name"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									autoFocus
									margin="dense"
									id="hours"
									label="Hours"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={6}>
								<InputLabel id="demo-simple-select-helper-label">
									Access
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={access}
									onChange={(e) => setAccess(e.target.value)}
								>
									<MenuItem value={CourtAccessTypes.Public}>
										{CourtAccessTypes.Public}
									</MenuItem>
									<MenuItem value={CourtAccessTypes.Private}>
										{CourtAccessTypes.Private}
									</MenuItem>
									<MenuItem
										value={CourtAccessTypes.Membership}
									>
										{CourtAccessTypes.Membership}
									</MenuItem>
								</Select>
							</Grid>
							<Grid item xs={6}>
								<InputLabel id="demo-simple-select-helper-label">
									Type
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									<MenuItem value={CourtTypes.Outdoor}>
										{CourtTypes.Outdoor}
									</MenuItem>
									<MenuItem value={CourtTypes.Indoor}>
										{CourtTypes.Indoor}
									</MenuItem>
								</Select>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.closeWizard} color="primary">
						Cancel
					</Button>
					<Button color="primary">Confirm</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
