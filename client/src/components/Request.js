import React from "react";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";


function Request() {
	return (
		<div>
			<Link to="/" style={{
        textDecoration: "none"
      }}>
				<h1 className="heading">Khelo India</h1>
			</Link>

			<div
				style={{
					margin: 30,
				}}>
				<Tabs  />
			</div>
		</div>
	);
}

export default Request;
