import React, { useContext, useEffect, useState, useRef } from "react";

import "./tabs.css";
import "./form.css";
import { store } from "../App";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Tabs = () => {
	// eslint-disable-next-line no-unused-vars
	const [user, setUser] = useContext(store);

	const navigate = useNavigate();
	// const [req1, setReq1] = useState({
	// 	groundArea: "",
	// 	purpose: "",
	// 	requirements: "",
	// });

	// const [req2, setReq2] = useState({
	// 	sportsEquipment: "",
	// 	numPeople: "",
	// 	details: "",
	// });

	// const [req3, setReq3] = useState({
	// 	additionalArea: "",
	// 	agedPeople: "",
	// 	additionalDetails: "",
	// });

	// const reqOneGroundAreaHandler = (e) => {
	// 	setReq1((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			groundArea: e.target.value,
	// 		};
	// 	});
	// };

	// const reqOnePurposeHandler = (e) => {
	// 	setReq1((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 		    purpose : e.target.value,
	// 		};
	// 	});
	// };

	// const reqOneRequirementsHandler = (e) => {
	// 	setReq1((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			requirements: e.target.value,
	// 		};
	// 	});
	// };

	// const reqTwoSportsEquipmentHandler = (e) => {
	// 	setReq2((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			sportsEquipment: e.target.value,
	// 		}
	// 	})
	// }

	// const reqTwoNumPeopleHandler = (e) => {
	// 	setReq2((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			numPeople: e.target.value,
	// 		}
	// 	})
	// }

	// const reqTwoDetailsHandler = (e) => {
	// 	setReq2((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			details: e.target.value,
	// 		}
	// 	})
	// }

	// const reqThreeAdditionalAreaHandler = (e) => {
	// 	setReq3((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			additionalArea : e.target.value,
	// 		}
	// 	})
	// }

	// const reqThreeAgedPeopleHandler = (e) => {
	// 	setReq3((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			agedPeople : e.target.value,
	// 		}
	// 	})
	// }

	// const reqThreeAdditionalDetailsHandler = (e) => {
	// 	setReq3((prevReq) => {
	// 		return {
	// 			...prevReq,
	// 			additionalDetails: e.target.value,
	// 		}
	// 	})
	// }

	const reqOneInputOne = useRef("");
	const reqOneInputTwo = useRef("");
	const reqOneInputThree = useRef("");

	const reqTwoInputOne = useRef("");
	const reqTwoInputTwo = useRef("");
	const reqTwoInputThree = useRef("");

	const reqThreeInputOne = useRef("");
	const reqThreeInputTwo = useRef("");
	const reqThreeInputThree = useRef("");

	console.log(user, Object.keys(user).length);

	const submitHandler1 = async (event) => {
		event.preventDefault();

		const temp = {
			request_type: "get_grounds",
			useremail: user.useremail,
			ground_area: reqOneInputOne.current.value,
			purpose: reqOneInputTwo.current.value,
			addn_info: reqOneInputThree.current.value,
		};

		console.log(temp);

		const res = await Axios.post(
			"http://localhost:5000/requests/newRequest",
			{
				request_type: "get_grounds",
				useremail: user.useremail,
				ground_area: reqOneInputOne.current.value,
				purpose: reqOneInputTwo.current.value,
				addn_info: reqOneInputThree.current.value,
			}
		);

		const data = res.data;
		if (data.token[0]) {
			console.log("Token found");
			console.log(data);
			navigate("/user/application_status");
		} else {
			navigate("/user/login");
		}
	};

	const submitHandler2 = async (event) => {
		event.preventDefault();
		const temp = {
			request_type: "get_equipment",
			useremail: user.useremail,
			name: reqTwoInputOne.current.value,
			number_of_items_and_reason: reqTwoInputTwo.current.value,
			addn_info: reqTwoInputThree.current.value,
		};

		console.log(temp);

		const result = await Axios.post(
			"http://localhost:5000/requests/newRequest",
			{
				request_type: "get_equipment",
				useremail: user.useremail,
				name: reqTwoInputOne.current.value,
				number_of_items_and_reason: reqTwoInputTwo.current.value,
				addn_info: reqTwoInputThree.current.value,
			}
		);

		const data = result.data;
		if (data.token[0]) {
			console.log("Token found");
			console.log(data);
			navigate("/user/application_status");
		} else {
			navigate("/user/login");
		}
	};

	const submitHandler3 = async (event) => {
		event.preventDefault();
		const temp = {
			request_type: "get_playfield",
			useremail: user.useremail,
			name: reqThreeInputOne.current.value,
			intended_age_and_reason: reqThreeInputTwo.current.value,
			addn_info: reqThreeInputThree.current.value,
		};

		console.log(temp);

		const result = await Axios.post(
			"http://localhost:5000/requests/newRequest",
			{
				request_type: "get_playfield",
				useremail: user.useremail,
				required_for: reqThreeInputOne.current.value,
				intended_age_and_reason: reqThreeInputTwo.current.value,
				addn_info: reqThreeInputThree.current.value,
			}
		);

		const data = result.data;
		if (data.token[0]) {
			console.log("Token found");
			console.log(data);
			navigate("/user/application_status");
		} else {
			navigate("/user/login");
		}
	};

	
	useEffect(() => {
		if (Object.keys(user).length === 0) {
			navigate("/user/login");
		}
		// eslint-disable-next-line
	}, []);

	// eslint-disable-next-line
	
	const [currentTab, setCurrentTab] = useState("1");

	const SchoolDetails = (
		<div class="body">
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">First Name</label>
						<input
							class="input--style-4"
							type="text"
							name="firstname"
							value={user.firstname}
							disabled
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">Last Name</label>
						<input
							class="input--style-4"
							type="text"
							name="lastname"
							value={user.lastname}
							disabled
						/>
					</div>
				</div>
			</div>
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">Email Address</label>
						<input
							class="input--style-4"
							type="email"
							name="email"
							value={user.useremail}
							disabled
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">Designation</label>
						<input
							class="input--style-4"
							type="text"
							name="designation"
							value={user.designation}
							disabled
						/>
					</div>
				</div>
			</div>
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">Phone Number</label>
						<input
							class="input--style-4"
							type="tel"
							name="phonenumber"
							value={user.phone}
							disabled
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">City</label>
						<input
							class="input--style-4"
							type="text"
							name="city"
							value={user.city}
							disabled
						/>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div class="input-group">
						<label class="label">School Address</label>
						<input
							class="input--style-4"
							type="text"
							name="address"
							value={user.address}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);

	const tabs = [
		{
			id: 1,
			tabTitle: "Request for Grounds",
			content: (
				<form autoComplete="off" onSubmit={submitHandler1}>
					<div class="body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Required Ground Area (in sq mts.)
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
										// onChange={reqOneGroundAreaHandler}
										// value={groundArea}
										ref={reqOneInputOne}
										required
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Purpose for ground (Name of the Sport)
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose"
										// onChange={reqOnePurposeHandler}
										// value={purpose}
										ref={reqOneInputTwo}
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Requirements (Ploughing,
									Gardening etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
									// onChange={reqOneRequirementsHandler}
									// value={requirements}
									ref={reqOneInputThree}
									required
								/>
							</div>
						</div>
						<br />
						<hr />
						<br />

						<p> School Details : - </p>
					</div>

					{SchoolDetails}
					<div class="p-t-15">
						<button
							class="btn btn--radius-2 btn--blue"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			),
		},
		{
			id: 2,
			tabTitle: "Request for Sports Equipment",
			content: (
				<form autoComplete="off" onSubmit={submitHandler2}>
					<div class="body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Required Sports Equipment
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
										// onChange={reqTwoSportsEquipmentHandler}
										// value={sportsEquipment}
										ref={reqTwoInputOne}
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Number of people and reason it is
										intended for
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose"
										// onChange={reqTwoNumPeopleHandler}
										// value={numPeople}
										ref={reqTwoInputTwo}
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Details (Information about
									divisons in items, etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
									// onChange={reqTwoDetailsHandler}
									// value={details}
									ref={reqTwoInputThree}
								/>
							</div>
						</div>
						<br />
						<hr />
						<br />
						<p> School Details : - </p>
						{SchoolDetails}
					</div>

					<div class="p-t-15">
						<button
							class="btn btn--radius-2 btn--blue"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			),
		},
		{
			id: 3,
			tabTitle: "Request for play areas",
			title: "Title 3",
			content: (
				<form autoComplete="off" onSubmit={submitHandler3}>
					<div class="body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Purpose for additional Area
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
										// onChange = {reqThreeAdditionalAreaHandler}
										// value={additionalArea}
										ref={reqThreeInputOne}
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Intented age meant for which aged people
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose"
										// onChange = {reqThreeAgedPeopleHandler}
										// value={agedPeople}
										ref={reqThreeInputTwo}
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Details (Information about
									installation of benches, slides, etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
									// onChange={reqThreeAdditionalDetailsHandler}
									// value={additionalDetails}
									ref={reqThreeInputThree}
								/>
							</div>
						</div>
						<br />
						<hr />
						<br />

						<p> School Details : - </p>
						{SchoolDetails}
					</div>

					<div class="p-t-15">
						<button type="submit">Submit</button>
					</div>
				</form>
			),
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className="container">
			<div className="tabs">
				{tabs.map((tab, i) => (
					<button
						key={i}
						id={tab.id}
						disabled={currentTab === `${tab.id}`}
						onClick={handleTabClick}>
						{tab.tabTitle}
					</button>
				))}
			</div>
			<div className="content">
				{tabs.map((tab, i) => (
					<div key={i}>
						{currentTab === `${tab.id}` && (
							<div>
								<p>{tab.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
