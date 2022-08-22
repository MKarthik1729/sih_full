// import React, { useContext } from "react";
// import {
// 	AiOutlineSetting,
// 	AiOutlineLogout,
// 	AiOutlinePlusCircle,
// } from "react-icons/ai";
// // import {
// // 	BottomPart,
// // 	MainUser,
// // 	RightBottom,
// // 	SideBarPart,
// // 	TopRight,
// // 	TotDiv,
// // 	WhitePara,
// // } from "../style/interface";

// import { BiUserCircle } from "react-icons/bi";

// function AdminDashboard() {
// 	const useremail = "rohithboppey1298@gmail.com"
// 	return (
// 		<TotDiv>
// 			<TopRight>
// 				<BiUserCircle size="50" />
// 				<h4>My Profile</h4>
// 			</TopRight>
// 			<SideBarPart>
// 				<WhitePara> Here data links will be present</WhitePara>
// 				<WhitePara>Dashboard</WhitePara>
// 				<WhitePara>All Forms</WhitePara>
// 				<WhitePara>Sanctioned</WhitePara>
// 				<WhitePara>Rejected</WhitePara>
// 				<BottomPart>
// 					<WhitePara>
// 						<AiOutlineSetting size="20" /> Settings
// 					</WhitePara>
// 					<WhitePara>
// 						<AiOutlineLogout size="20" /> Logout
// 					</WhitePara>
// 				</BottomPart>
// 			</SideBarPart>
// 			<MainUser>
// 				<div>
// 					<h4>Hello Karthik</h4>
// 					<p>Here is your personal Account</p>
// 				</div>
// 				<h3>middle</h3>
// 			</MainUser>
// 			<RightBottom onClick={() => console.log()}>
// 				<AiOutlinePlusCircle size="60" />
// 				<p>New Application</p>
// 			</RightBottom>
// 		</TotDiv>
// 	);
// }

// export default AdminDashboard;

import React, { useContext } from "react";
import { store } from "../App";

const AdminDashboard = () => {
	
	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);  

	return (
		<div>
			<div>AdminDashboard</div>
			<h1>{user._id}</h1>
		</div>
	);
};

export default AdminDashboard;
