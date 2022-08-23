import React, { useContext, useState } from "react";

import { store } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";

import "./appstatus.css";

const ApplicationStatusAll = () => {
	const navigate = useNavigate();

	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	const [allGroundRequests, setAllGroundRequests] = useState({});
	const [allEquipmentRequests, setAllEquipmentRequests] = useState({});
	const [allPlayfieldRequests, setAllPlayfieldRequests] = useState({});

	// console.log("Ground Requests", allGroundRequests[0].useremail);

	const getAllRequests = async () => {
		const response = await Axios.get(
			"http://localhost:5000/requests/getallrequests"
		);
		console.log(response.data);
		setAllGroundRequests(response.data.get_ground);
		setAllEquipmentRequests(response.data.get_equipment);
		setAllPlayfieldRequests(response.data.get_playfield);
	};

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/admin/login");
		}

		// eslint-disable-next-line
		getAllRequests();
	}, []);

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

	const Handler = async (req_type, status, id) => {
		const response = await Axios.post(
			"http://localhost:5000/requests/change_status",
			{
				req_type: req_type,
				change_status_to: status,
				id : id 
			}
		);

		console.log(response);

		window.location.reload();
	};

	const groundData = () => {
		const data = [];
		for (let i in allGroundRequests) {
			console.log(allGroundRequests[i]);
			// const temp = <p>Registered Mail : {allGroundRequests[i].useremail}</p>;
			const temp = (
				<>
					<tr>
						<td>{allGroundRequests[i].useremail}</td>
						<td>{allGroundRequests[i].ground_area}</td>
						<td>{allGroundRequests[i].purpose}</td>
						<td>{allGroundRequests[i].addn_info}</td>
						<td
							style={{
								color: getColour(allGroundRequests[i].status),
							}}>
							{allGroundRequests[i].status}
						</td>
						{allGroundRequests[i].status === "Pending" && (
							<td>
								<button
									onClick={() =>
										Handler("get_ground", "Accepted", allGroundRequests[i]._id)
									}>
									Accept
								</button>
								<button
									onClick={() =>
										Handler("get_ground", "Rejected", allGroundRequests[i]._id)
									}>
									Reject
								</button>
							</td>
						)}
					</tr>
				</>
			);
			data.push(temp);
		}
		// console.log(allGroundRequests);

		return data;
	};

	const equipmentData = () => {
		const data = [];
		for (let i in allEquipmentRequests) {
			console.log(allEquipmentRequests[i]);
			// const temp = <p>Registered Mail : {allGroundRequests[i].useremail}</p>;
			const temp = (
				<>
					<tr>
						<td>{allEquipmentRequests[i].useremail}</td>
						<td>{allEquipmentRequests[i].name}</td>
						<td>
							{allEquipmentRequests[i].number_of_items_and_reason}
						</td>
						<td>{allEquipmentRequests[i].addn_info}</td>
						<td
							style={{
								color: getColour(allEquipmentRequests[i].status),
							}}>
							{allEquipmentRequests[i].status}
						</td>
						{allEquipmentRequests[i].status === "Pending" && (
							<td>
								<button
									onClick={() =>
										Handler("get_equipment", "Accepted", allEquipmentRequests[i]._id)
									}>
									Accept
								</button>
								<button
									onClick={() =>
										Handler("get_equipment", "Rejected", allEquipmentRequests[i]._id)
									}>
									Reject
								</button>
							</td>
						)}
					</tr>
				</>
			);
			data.push(temp);
		}
		// console.log(allGroundRequests);

		return data;
	};

	const playfieldData = () => {
		const data = [];
		for (let i in allPlayfieldRequests) {
			console.log(allPlayfieldRequests[i]);
			// const temp = <p>Registered Mail : {allGroundRequests[i].useremail}</p>;
			const temp = (
				<>
					<tr>
						<td>{allPlayfieldRequests[i].useremail}</td>
						<td>{allPlayfieldRequests[i].required_for}</td>
						<td>
							{allPlayfieldRequests[i].intended_age_and_reason}
						</td>
						<td>{allPlayfieldRequests[i].addn_info}</td>
						<td
							style={{
								color: getColour(allPlayfieldRequests[i].status),
							}}>
							{allPlayfieldRequests[i].status}
						</td>
						{allPlayfieldRequests[i].status === "Pending" && (
							<td>
								<button
									onClick={() =>
										Handler("get_playfield", "Accepted", allPlayfieldRequests[i]._id)
									}>
									Accept
								</button>
								<button
									onClick={() =>
										Handler("get_playfield", "Rejected", allPlayfieldRequests[i]._id)
									}>
									Reject
								</button>
							</td>
						)}
					</tr>
				</>
			);
			data.push(temp);
		}
		// console.log(allGroundRequests);

		return data;
	};

	return (
		<div>
			<div>
				<p>
					Your Admin ID is <b>{user._id}</b>
				</p>
				<h2>Request for Grounds : </h2>
				<div class="card-holder">
					<table>
						<tr>
							<th>Registered Mail</th>
							<th>Estimate about Ground Area</th>
							<th>Purpose for ground</th>
							<th>Additional Information</th>
							<th>Status</th>
							<th>Change Status</th>
						</tr>
						{groundData()}
					</table>
				</div>
				<br></br>
				<br></br>
				<h2>Request for Equipment : </h2>
				<div class="card-holder">
					<table>
						<tr>
							<th>Registered Mail</th>
							<th>Name of equipment needed</th>
							<th>Number of items and reason</th>
							<th>Additional Information</th>
							<th>Status</th>
							<th>Change Status</th>
						</tr>
						{equipmentData()}
					</table>
				</div>

				<br></br>
				<br></br>
				<h2>Request for Playfield : </h2>
				<div class="card-holder">
					<table>
						<tr>
							<th>Registered Mail</th>
							<th>Purpose of playfield</th>
							<th>Intended age</th>
							<th>Additional Information</th>
							<th>Status</th>
							<th>Change Status</th>
						</tr>
						{playfieldData()}
					</table>
				</div>
			</div>
			<div>
				<br></br>
			</div>
		</div>
	);
};

export default ApplicationStatusAll;
