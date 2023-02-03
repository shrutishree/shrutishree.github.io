import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
	Box, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import './AboutUs.css';
import { MdOutlinePermContactCalendar, MdEmail, MdCall, MdEdit, MdOutlineArrowBack } from 'react-icons/md'
import { ImCross } from 'react-icons/im';


function CardList() {
	// Creating style object
	// const classes = useStyles();

	// Defining a state named rows
	// which we can update by calling on setRows function
	const [rows, setRows] = useState([
		{ id: 1, email: "", mobileNumber: "" },
	]);

	const [rowsContact, setRowsContact] = useState([
		{ id: 1, mobileNumber: "" },
	]);

	// Initial states
	const [open, setOpen] = useState(false);
	const [openPopup, setOpenPopup] = useState(false);
	const [isEdit, setEdit] = useState(false);
	const [openEdit, setopenEdit] = useState(false);
	const [disable, setDisable] = useState(true);
	const [showConfirm, setShowConfirm] = useState(false);

	// Function For closing the alert snackbar
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	// Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length,
				email: ""
			},
		]);
		setEdit(true);
	};

	const handleAddContact = () => {
		setRowsContact([
			...rowsContact,
			{
				id: rowsContact.length,
				mobileNumber: ""
			},

		]);
		setEdit(true);
	};

	// Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

	// Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	// The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	// Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

	// Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i

	const handleRemove = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	// Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

	return (
		<>
			<div className="cards">
				<div className='cardItemsContainer'>
					<div className="cardItems">
						<div className="items"><MdOutlinePermContactCalendar />Contact</div>
						<div className="items"><MdEmail /> shruti.shree@gmail.com </div>
						<div className="items"><MdCall /> 897898876</div>
					</div>
					<div onClick={() => setOpenPopup(true)}><MdEdit /></div>
				</div>
				<div className='cardItemsContainer'>
					<div className="cardItems">
						<div className="items"><MdOutlinePermContactCalendar /> Contact</div>
						<div className="items"><MdEmail /> shruti.shree@gmail.com </div>
						<div className="items"><MdCall /> 897898876</div>
					</div>
					<div onClick={() => setOpenPopup(true)}><MdEdit /></div>
				</div>
				<div className='cardItemsContainer'>
					<div className="cardItems">
						<div className="items"><MdOutlinePermContactCalendar /> Contact</div>
						<div className="items"><MdEmail /> shruti.shree@gmail.com </div>
						<div className="items"><MdCall /> 897898876</div>
					</div>
					<div onClick={() => setOpenPopup(true)}><MdEdit /></div>
				</div>
				<div className='cardItemsContainer'>
					<div className="cardItems">
						<div className="items"><MdOutlinePermContactCalendar /> Contact</div>
						<div className="items"><MdEmail /> shruti.shree@gmail.com </div>
						<div className="items"><MdCall /> 897898876</div>
					</div>
					<div onClick={() => setOpen(true)}><MdEdit /></div>
				</div>
			</div>
			{openPopup && (
				<div className="rightSideBar">
					{!openEdit ? (
						<>
							<div className="aboutUs"> <span onClick={() => setOpenPopup(false)}><MdOutlineArrowBack /></span>Contact</div>
							<div className="contactcards">
								<div className='contactcardsContainer'>
									<div className="contactCardItems">
										<div className="items"><MdOutlinePermContactCalendar />Marketing Team</div>
										<div className="items"><MdEmail /> row@gmail.com </div>
										<div className="items"><MdCall /> 789876543</div>
									</div>
									<div><DeleteOutlineIcon /></div>
									<div onClick={() => setopenEdit(true)}><MdEdit /></div>
								</div>
								<div className='contactcardsContainer'>
									<div className="contactCardItems">
										<div className="items"><MdOutlinePermContactCalendar /> Sales Team</div>
										<div className="items"><MdEmail /> sales@gmail.com </div>
										<div className="items"><MdCall /> 897898876</div>
									</div>
									<DeleteOutlineIcon />
									<div onClick={() => setopenEdit(true)}><MdEdit /></div>
								</div>
								<div className='contactcardsContainer'>
									<div className="contactCardItems">
										<div className="items"><MdOutlinePermContactCalendar /> Sales Team</div>
										<div className="items"><MdEmail /> sales@gmail.com </div>
										<div className="items"><MdCall /> 897898876</div>
									</div>
									<DeleteOutlineIcon />
									<div onClick={() => setopenEdit(true)}><MdEdit /></div>
								</div>
								<div className='contactcardsContainer'>
									<div className="contactCardItems">
										<div className="items"><MdOutlinePermContactCalendar /> Sales Team</div>
										<div className="items"><MdEmail /> sales@gmail.com </div>
										<div className="items"><MdCall /> 897898876</div>
									</div>
									<DeleteOutlineIcon />
									<div onClick={() => setopenEdit(true)}><MdEdit /></div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="aboutUs"> <span onClick={() => setopenEdit(false)}><MdOutlineArrowBack /></span>Contact</div>
							<TableBody>
								<div>
									<Snackbar
										open={open}
										autoHideDuration={2000}
										onClose={handleClose}
									>
										<Alert onClose={handleClose} severity="success">
											Record saved successfully!
										</Alert>
									</Snackbar>
									<Box>
										<Table>
											<TableHead>Email ID</TableHead>
											<TableBody>
												{rows.map((row, i) => {
													return (
														<div style={{ display: "flex", justifyContent: "space-between" }}>
															<div>
																<TableCell padding="none" margin="20px">
																	<input
																		value={row.email}
																		name="email"
																		onChange={(e) => handleInputChange(e, i)}
																	/>
																</TableCell>
															</div>
														</div>
													)
												})}
												{rows.length < 2 && (
													<button className="addMore" onClick={handleAdd}>
														<AddBoxIcon onClick={handleAdd} />
														ADD MORE
													</button>
												)}
											</TableBody>
											<TableBody>
												<TableHead>Mobile Number</TableHead>
												{rowsContact.map((row, i) => {
													return (
														<div style={{ display: "flex", justifyContent: "space-between" }}>
															<div>
																<TableCell padding="none">
																	<input
																		value={row.mobileNumber}
																		name="mobileNumber"
																		onChange={(e) => handleInputChange(e, i)}
																	/>
																</TableCell>
															</div>
														</div>
													)
												})}
												{rowsContact.length < 2 && (
													<button className="addMore" onClick={handleAddContact}>
														<AddBoxIcon onClick={handleAddContact} />
														ADD MORE
													</button>
												)}
												<div>
													<TableRow>
														{/* {isEdit ? (
																	<Button className="mr10" onClick={handleConfirm}>
																		<ClearIcon />
																	</Button>
																) : (
																	<Button className="mr10" onClick={handleConfirm}>
																		<DeleteOutlineIcon />
																	</Button>
																)} */}
														{showConfirm && (
															<div>
																<Dialog
																	open={showConfirm}
																	onClose={handleNo}
																	aria-labelledby="alert-dialog-title"
																	aria-describedby="alert-dialog-description"
																>
																	<DialogTitle id="alert-dialog-title">
																		{"Confirm Delete"}
																	</DialogTitle>
																	<DialogContent>
																		<DialogContentText id="alert-dialog-description">
																			Are you sure to delete
																		</DialogContentText>
																	</DialogContent>
																	<DialogActions>
																		{/* <Button
																					onClick={() => handleRemoveClick()}
																					color="primary"
																					autoFocus
																				>
																					Yes
																				</Button>
																				<Button
																					onClick={handleNo}
																					color="primary"
																					autoFocus
																				>
																					No
																				</Button> */}
																	</DialogActions>
																</Dialog>
															</div>
														)}
													</TableRow>
												</div>
											</TableBody>
										</Table>
									</Box>
								</div>
							</TableBody>
						</>
					)}
					<div className="saveButton" onClick={handleSave}>Save</div>
				</div>
			)}
		</>
	);
}

export default CardList;
