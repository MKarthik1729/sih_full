import React, { useContext } from "react";

import { store } from "../App";

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
		// eslint-disable-next-line
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
			<div style={{ marginTop: 100 }}>
				<h1>Hello {`${user.fullname}`}</h1>
				<p>Welcome back to your Admin Account</p>
				<p>
					Track all the applications{" "}
					<Link to="/admin/all_applications">here</Link> 
				</p>
			</div>
		</>
	);
};

export default AdminDashboard;
