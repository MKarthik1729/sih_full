import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1 className="heading">Khelo India</h1>
			<div className="text-container">
				<p className="main-text">
					The idea behing <b>Khel India</b> is to improve sports
					features across every college in India and encourage them to
					participate more in inter-college and intra-college tournaments 
					
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
