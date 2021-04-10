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
import { useSelector } from "react-redux";
import { selectHeaderState } from "../redux/headerSlice";
import "../styles/components.scss";

export default function FormDialog(props) {
	const headerState = useSelector(selectHeaderState);
	const courtWizardInfo = headerState.courtWizardInfo;

	const [address, setAddress] = useState(null);
	const [city, setCity] = useState(null);
	const [province, setProvince] = useState(null);
	const [country, setCountry] = useState(null);
	const [name, setName] = useState(null);
	const [hours, setHours] = useState(null);
	const [hoopCount, setHoopCount] = useState(1);
	const [access, setAccess] = useState(CourtAccessTypes.Public);
	const [type, setType] = useState(CourtTypes.Outdoor);

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	};

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const handleProvinceChange = (e) => {
		setProvince(e.target.value);
	};
	const handleCountryChange = (e) => {
		setCountry(e.target.value);
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleHoursChange = (e) => {
		setHours(e.target.value);
	};
	const handleHoopCountChange = (e) => {
		setHoopCount(e.target.value);
	};
	const handleAccessChange = (e) => {
		setAccess(e.target.value);
	};
	const handleTypeChange = (e) => {
		setType(e.target.value);
	};

	const onCourtSubmit = (e) => {
		e.preventDefault();
		if (!address || !city || !province || !country) {
			alert("incomplete information, cannot submit court");
		}

		const newCourt = {
			address,
			city,
			province,
			country,
			name,
			hours,
			hoopCount,
			access,
			type,
		};

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newCourt),
		};

		fetch("http://localhost:8000/courts/create", requestOptions)
			.then((res) => {
				console.log(res.json());
			})
			.catch((err) => console.log(err.json()));
	};

	if (!courtWizardInfo) {
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
							A request will be sent to the admin, the court will
							be available on HoopFinder once it's approved
						</DialogContentText>
						<form>
							<Grid
								container
								item
								xs={12}
								spacing={3}
								alignItems="center"
							>
								<Grid item xs={8}>
									<TextField
										autoFocus
										required
										margin="dense"
										id="address"
										label="Address"
										type="text"
										fullWidth
										value={address}
										onChange={handleAddressChange}
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
										value={city}
										onChange={handleCityChange}
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
										value={province}
										onChange={handleProvinceChange}
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
										value={country}
										onChange={handleCountryChange}
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
										value={name}
										onChange={handleNameChange}
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
										value={hours}
										onChange={handleHoursChange}
									/>
								</Grid>

								<Grid item xs={3}>
									<InputLabel id="demo-simple-select-outlined-label">
										Access
									</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select"
										value={access}
										onChange={handleAccessChange}
									>
										<MenuItem
											value={CourtAccessTypes.Public}
										>
											{CourtAccessTypes.Public}
										</MenuItem>
										<MenuItem
											value={CourtAccessTypes.Private}
										>
											{CourtAccessTypes.Private}
										</MenuItem>
										<MenuItem
											value={CourtAccessTypes.Membership}
										>
											{CourtAccessTypes.Membership}
										</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={3}>
									<InputLabel id="demo-simple-select-helper-label">
										Type
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={type}
										onChange={handleTypeChange}
									>
										<MenuItem value={CourtTypes.Outdoor}>
											{CourtTypes.Outdoor}
										</MenuItem>
										<MenuItem value={CourtTypes.Indoor}>
											{CourtTypes.Indoor}
										</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={6}>
									<TextField
										autoFocus
										margin="dense"
										id="hoopCount"
										label="Number of Hoops"
										type="number"
										fullWidth
										value={hoopCount}
										onChange={handleHoopCountChange}
									/>
								</Grid>
							</Grid>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={props.closeWizard} color="primary">
							Cancel
						</Button>
						<Button color="primary" onClick={onCourtSubmit}>
							Confirm
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	} else {
		return (
			<div>
				<Dialog
					open={props.open}
					onClose={props.closeWizard}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Court Details
					</DialogTitle>
					<DialogContent dividers={true}>
						{/* <DialogContentText>
						A request will be sent to the admin, the court will
						be available on HoopFinder once it's approved
					</DialogContentText> */}
						<form disabled className="court-wizard-form">
							<Grid
								container
								item
								xs={12}
								spacing={3}
								alignItems="center"
							>
								<Grid item xs={8}>
									<TextField
										autoFocus
										required
										disabled
										margin="dense"
										id="address"
										label="Address"
										type="text"
										fullWidth
										value={courtWizardInfo.address}
										onChange={handleAddressChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										autoFocus
										required
										disabled
										margin="dense"
										id="city"
										label="City"
										type="text"
										fullWidth
										value={courtWizardInfo.city}
										onChange={handleCityChange}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										autoFocus
										required
										disabled
										margin="dense"
										id="province"
										label="Province"
										type="text"
										fullWidth
										value={courtWizardInfo.province}
										onChange={handleProvinceChange}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										autoFocus
										required
										disabled
										margin="dense"
										id="country"
										label="Country"
										type="text"
										fullWidth
										value={courtWizardInfo.country}
										onChange={handleCountryChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										autoFocus
										margin="dense"
										disabled
										id="name"
										label="Name"
										type="text"
										fullWidth
										value={courtWizardInfo.name}
										onChange={handleNameChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										autoFocus
										margin="dense"
										disabled
										id="hours"
										label="Hours"
										type="text"
										fullWidth
										value={courtWizardInfo.hours}
										onChange={handleHoursChange}
									/>
								</Grid>

								<Grid item xs={3}>
									<InputLabel id="demo-simple-select-outlined-label">
										Access
									</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select"
										value={courtWizardInfo.access}
										disabled
										className="select"
										onChange={handleAccessChange}
									>
										<MenuItem
											value={CourtAccessTypes.Public}
										>
											{CourtAccessTypes.Public}
										</MenuItem>
										<MenuItem
											value={CourtAccessTypes.Private}
										>
											{CourtAccessTypes.Private}
										</MenuItem>
										<MenuItem
											value={CourtAccessTypes.Membership}
										>
											{CourtAccessTypes.Membership}
										</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={3}>
									<InputLabel id="demo-simple-select-helper-label">
										Type
									</InputLabel>
									<Select
										disabled
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={courtWizardInfo.type}
										onChange={handleTypeChange}
									>
										<MenuItem value={CourtTypes.Outdoor}>
											{CourtTypes.Outdoor}
										</MenuItem>
										<MenuItem value={CourtTypes.Indoor}>
											{CourtTypes.Indoor}
										</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={6}>
									<TextField
										autoFocus
										margin="dense"
										disabled
										id="hoopCount"
										label="Number of Hoops"
										type="number"
										fullWidth
										value={courtWizardInfo.hoopCount}
										onChange={handleHoopCountChange}
									/>
								</Grid>
							</Grid>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={props.closeWizard} color="primary">
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
