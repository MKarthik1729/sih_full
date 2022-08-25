import React, { useContext } from "react";
import {
	AiOutlineSetting,
	AiOutlineLogout,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import {
	BottomPart,
	MainUser,
	RightBottom,
	SideBarPart,
	TopRight,
	TotDiv,
	WhitePara,
} from "./interface";

import { store } from "../App";

import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./UI/Navbar";

const AdminDashboard = () => {
	const navigate = useNavigate();

	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/admin/login");
		}
	});

	return (
		// <TotDiv>
		// 		<SideBarPart>
		// 			<Link to="/admin/application_status">
		// 				<WhitePara>Check All application status</WhitePara>
		// 			</Link>
		// 			<BottomPart>
		// 				<WhitePara>
		// 					<Link to="/admin/login">
		// 						<AiOutlineLogout size="20" /> Logout
		// 					</Link>
		// 				</WhitePara>
		// 			</BottomPart>
		// 		</SideBarPart>
		// 		<MainUser>
		// 			<div>
		// 				<h1>Hello {`${user.fullname}`}</h1>
		// 				<p>Welcome back to your Admin Account</p>
		// 				<p>
		// 					Your Admin ID is <b>{user._id}</b>
		// 				</p>
		// 			</div>
		// 			<h3>
		// 				Check All Applications from the Left to accept or reject.
		// 			</h3>
		// 		</MainUser>

		// 	</TotDiv>
		<>
			<Navbar user="Admin" />
			<div style = {{marginTop: 100}}>
				<h1>Hello {`${user.fullname}`}</h1>
				<p>Welcome back to your Admin Account</p>
				<p>
					Your Admin ID is <b>{user._id}</b>
				</p>
			</div>
		</>
	);
};

export default AdminDashboard;
