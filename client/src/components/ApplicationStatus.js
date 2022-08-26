import React, { useContext, useRef, useState } from "react";
import Card from "react-bootstrap/Card";


import { store } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";
import Navbar from "./UI/Navbar";

const ApplicationStatus = () => {
	const navigate = useNavigate();

	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/user/login");
		}
		// eslint-disable-next-line
	});

	const tokenRef = useRef();

	const [details, setDetails] = useState({});

	// console.log(details.results);
	// console.log(typeof details);

	const submitHandler = async (event) => {
		event.preventDefault();
			

		if (tokenRef.current.value.length === 24) {
			const response = await Axios.post(
				"http://localhost:5000/requests/search_for_request",
				{
					token: tokenRef.current.value,
					searching_useremail : user.useremail	
				}
			);

			const data = response.data;
			console.log(data);	
			setDetails(data);
		}else{
			alert("Please enter a 24 digit code to your mail")
		}
	};	

	const getTypeOfRequest = (req_type) => {
		if(req_type === "get_grounds"){
			return "Sports Ground"
		}
		else if(req_type === 'get_equipment'){
			return "Sports Equipment"
		}
		else if(req_type === 'get_playfield'){
			return "Playfield"
		}
	}

	const getColour = (status) => {
		if (status === "Accepted") {
			return "#168205";
		} else if (status === "Pending") {
			console.log("yellow");
			return "#8c8606";
		} else {
			return "red";
		}
	};

	const generateContent = (req_type) => {
		if (req_type === "get_grounds") {
			return (	
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{getTypeOfRequest(details.request_type)}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							School Adrress &nbsp; : &nbsp;{" "}
							<b>{details.result.school_addr}</b>
							<br />
							Ground Area and Shape &nbsp; : &nbsp;{" "}
							<b>{details.result.ground_area}</b>
							<br />
							Status of Ground &nbsp; : &nbsp;{" "}
							<b>{(details.result.status_of_ground)?"Renovation":"Construction"}</b>
							<br />
							Estimated Price &nbsp; : &nbsp;{" "}
							<b>{details.result.approx_price}</b>
							<br />
							Purpose for Ground &nbsp; : &nbsp;{" "}
							<b>{details.result.purpose}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
							</span>
							<br />
							Remarks &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.remarks}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		} else if (req_type === "get_equipment") {
			return (
				
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{getTypeOfRequest(details.request_type)}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							Name of equipment needed &nbsp; : &nbsp;{" "}
							<b>{details.result.name_of_equipment}</b>
							<br />
							Intended number of people : &nbsp; : &nbsp;{" "}
							<b>{details.result.number_of_items}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
							</span>
							<br />
							Remarks &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.remarks}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		} else {
			return (
				
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{getTypeOfRequest(details.request_type)}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							<div>
								The purpose behind playarea / relaxation area
								&nbsp; : &nbsp;{" "}
							</div>
							<b>{details.result.required_for}</b>
							<br />
							Intended age : &nbsp; : &nbsp;{" "}
							<b>{details.result.intended_age}</b>
							<br />
							Approximate Usage: &nbsp; : &nbsp;{" "}
							<b>{details.result.approx_usage_per_week} per week</b>
							<br />
							Approximate Amount Requested : &nbsp; : &nbsp;{" "}
							<b>{details.result.approx_price}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
								
							</span>
							<br />
							Remarks &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.remarks}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	};

	return (
		<div>
			{/* <TotDiv>
				<SideBarPart>
					<Link to="/user/dashboard">
						<WhitePara>Go to Dashboard</WhitePara>
					</Link>
					<BottomPart>
						<WhitePara>
							<AiOutlineSetting size="20" /> Settings
						</WhitePara>
						<WhitePara>
							<Link to="/user/login">
								<AiOutlineLogout size="20" /> Logout
							</Link>
						</WhitePara>
					</BottomPart>
				</SideBarPart>
				<MainUser>
					<div>
						<p>
							Your User ID is <b>{user._id}</b>
						</p>
						<div class="input-group">
							<br></br>
							<form onSubmit={submitHandler}>
								<input
									type="text"
									class="form-control"
									placeholder="User ID Token from email"
									aria-label="User ID Token from email"
									aria-describedby="basic-addon2"
									style={{ width: "50%" }}
									ref={tokenRef}
								/>
								<br></br>
								<div class="input-group-append">
									<button
										class="btn btn-outline-secondary"
										type="submit">
										Generate Application Status
									</button>
								</div>
							</form>
						</div>
						<br></br>
						{details.result === undefined ? (
							<p>Enter the ID and search for results</p>
						) : (
							<div>{generateContent(details.request_type)}</div>
						)}
					</div>
				</MainUser>
				<RightBottom
					onClick={() => {
						navigate("/user/request");
					}}>
					<div>
						<AiOutlinePlusCircle
							size="75"
							style={{ color: "#6d0391" }}
						/>
					</div>
					<p style={{ color: "#6d0391" }}>New Application</p>
				</RightBottom>
			</TotDiv> */}

			<Navbar user="User" />
			<div class="input-group">
				<br></br>
				<form onSubmit={submitHandler}>
					<button disabled>Token no :</button>
					<input
						type="text"
						class="form-control"
						placeholder="User ID Token from email"
						aria-label="User ID Token from email"
						aria-describedby="basic-addon2"
						style={{ width: "50%" }}
						ref={tokenRef}
						minLength='12'
					/>
					<br></br>
					<div class="input-group-append">
						<button
							style={{ marginTop: 15 }}
							class="btn btn-outline-secondary"
							type="submit">
							Generate Application Status
						</button>
					</div>
				</form>
			</div>
			<br></br>
			{details.error && <p>No requests found to this email</p>}
			{details.result === undefined ? (
				<p>Enter the valid email ID and search for results</p>
			) : (
				<div
					style={{
						padding: 20,
						alignItems: "center",
						display: "flex",
						justifyContent: "center",
					}}>
					{generateContent(details.request_type)}
				</div>
			)}

			<div></div>
		</div>
	);
};

export default ApplicationStatus;
