import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1 className="heading">Khelo India</h1>
			<div classname = "text-container">
			<p classname = "main-text">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			</div>
			<div className="btn-home">
				<Link to="/admin">
					<button>Enter as Admin</button>
				</Link>
				<Link to="/user/request">
					<button>Enter as User</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
