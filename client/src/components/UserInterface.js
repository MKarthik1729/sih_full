import React, { useContext } from "react";

import { store } from "../App";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./UI/Navbar";

function UserInterface() {
	const navigate = useNavigate();

	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/user/login");
		}
	});

	return (
		// <TotDiv>
		// 	<TopRight>
		// 		<BiUserCircle size="60" />
		// 		<h4>My Profile</h4>
		// 	</TopRight>
		// 	<SideBarPart>
		// 		<Link to="/user/application_status">
		// 			<WhitePara>Check your application status</WhitePara>
		// 		</Link>
		// 		<BottomPart>
		// 			<WhitePara>
		// 				<AiOutlineSetting size="20" /> Settings
		// 			</WhitePara>
		// 			<WhitePara>
		// 				<Link to="/user/login">
		// 					<AiOutlineLogout size="20" /> Logout
		// 				</Link>
		// 			</WhitePara>
		// 		</BottomPart>
		// 	</SideBarPart>
		// 	<MainUser>
		// 		<div>
		// 			<h1>Hello {`${user.firstname} ${user.lastname}`}</h1>
		// 			<p>Welcome back to your personal Account</p>
		// 			<p>
		// 				Your User ID is <b>{user._id}</b>
		// 			</p>
		// 		</div>
		// 		<h3>
		// 			You can check your applications on the left side or create a
		// 			new application at the bottom right!
		// 		</h3>
		// 	</MainUser>
		// 	<RightBottom
		// 		onClick={() => {
		// 			navigate("/user/request");
		// 		}}>
		// 		<div>
		// 			<AiOutlinePlusCircle
		// 				size="75"
		// 				style={{ color: "#6d0391" }}
		// 			/>
		// 		</div>
		// 		<p style={{ color: "#6d0391" }}>New Application</p>
		// 	</RightBottom>
		// </TotDiv>
		<div>
			<Navbar user="User" />
			<div style={{ marginTop: 100 }}>
				<h1>Hello {`${user.firstname} ${user.lastname}`}</h1>
				<p>Welcome back to your User Account</p>
				<p>
					Track any application of yours{" "}
					<Link to="/user/application_status">here</Link> or keep a
					new application <Link to="/user/request">here</Link>
				</p>
			</div>
		</div>
	);
}

export default UserInterface;
