import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";
import Navbar from "./UI/Navbar";

import Card from "react-bootstrap/Card";

const ShowAllApplications = (props) => {
	const navigate = useNavigate();
	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	const [allGroundRequests, setAllGroundRequests] = useState([]);
	const [allEquipmentRequests, setAllEquipmentRequests] = useState([]);
	const [allPlayfieldRequests, setAllPlayfieldRequests] = useState([]);

	const getAllRequests = async (req, res) => {
		await Axios.post(`http://localhost:5000/requests/getallrequests`, {
			email: user.useremail,
		}).then((response) => {
			// console.log(response.data);
			setAllGroundRequests(response.data[0]);
			setAllEquipmentRequests(response.data[1]);
			setAllPlayfieldRequests(response.data[2]);
		});
	};

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/user/login");
		}
		getAllRequests();
		// eslint-disable-next-line
	}, []);

	const getTypeOfRequest = (req_type) => {
		if (req_type === "get_grounds") {
			return "Sports Ground";
		} else if (req_type === "get_equipment") {
			return "Sports Equipment";
		} else if (req_type === "get_playfield") {
			return "Playfield";
		}
	};

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

	const groundData = () => {
		const data = [];
		let x = 0;
		for (let i in allGroundRequests) {
			let temp;
			if (x % 3 === 0) {
				temp = (
					<div
						style={{
							padding: 20,
							alignItems: "center",
							display: "flex",
							justifyContent: "center",
						}}>
						<Card style={{ width: "50%", margin: 20, padding: 30 }}>
							<Card.Body>
								<Card.Title>
									Request for{" "}
									<b>{getTypeOfRequest(user.useremail)}</b>
								</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									From <b>{allGroundRequests[i].useremail}</b>
								</Card.Subtitle>
								<Card.Text>
									Ground Area and Shape &nbsp; : &nbsp;{" "}
									<b>{allGroundRequests[i].ground_area}</b>
									<br />
									Purpose for Ground &nbsp; : &nbsp;{" "}
									<b>{allGroundRequests[i].purpose}</b>
									<br />
									Additional Information Provided &nbsp; :
									&nbsp;{" "}
									<b>{allGroundRequests[i].addn_info}</b>
									<br />
									Status &nbsp; : &nbsp;
									<span
										style={{
											color: getColour(
												allGroundRequests[i].status
											),
										}}>
										{allGroundRequests[i].status}
									</span>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				);
			} else {
				temp = (
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for{" "}
							<b>{getTypeOfRequest(user.useremail)}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{allGroundRequests[i].useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							Ground Area and Shape &nbsp; : &nbsp;{" "}
							<b>{allGroundRequests[i].ground_area}</b>
							<br />
							Purpose for Ground &nbsp; : &nbsp;{" "}
							<b>{allGroundRequests[i].purpose}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{allGroundRequests[i].addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(
										allGroundRequests[i].status
									),
								}}>
								{allGroundRequests[i].status}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>)
			}
			console.log(allPlayfieldRequests[i]);

			data.push(temp);
		}

		return data;
	};

	console.log(
		allGroundRequests[0],
		allEquipmentRequests[0],
		allPlayfieldRequests
	);

	return (
		<div>
			<Navbar user="User" />
			<br></br>
			All Applications of <b>{user._id}</b>
			<div
				style={{
					padding: 20,
					alignItems: "center",
					display: "flex",
					justifyContent: "center",
				}}>
				{groundData()}
			</div>
		</div>
	);
};

export default ShowAllApplications;
