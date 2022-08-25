import React from "react";
import "./Home.css";
import "../index.css";
import { Link } from "react-router-dom";
// import Navbar from "./UI/Navbar";

function Home() {
	return (
		<div className="body">
			<h1 className="heading">Khelo India</h1>
			<div className="text-container">
				<p className="main-text">
					The idea behing <b>Khelo India</b> is to improve sports
					features across every college in India and encourage them to
					participate more in inter-college and intra-college
					tournaments.
					<br />
					<br />
					We believe every college / school has the basic right to
					have the sports facility which in turn help the country to
					produce many sportsmen. Thus our aim is to connect
					enthusiastic colleges and schools with the government
					directly, without any middle men. Drop in an application,
					and we'll get into touch with you.
				</p>
			</div>
			<div className="btn-home">
				<Link to="/admin/login">
					<button>Enter as Admin</button>
				</Link>
				<Link to="/user/login">
					<button>Enter as User</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
