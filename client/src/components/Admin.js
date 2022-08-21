import React from "react";
import { Link } from "react-router-dom";

import "./adminFormStyles.css";

function Admin() {
	const content = [
		{
			useremail: "karthik.m20@iiits.in",
			request_type: "get_grounds",
			ground_area: "A rectangular cricket field",
			purpose: "Cricket and hybrid games",
			addn_info: "Should be as soon as possible and be neat",
		},
	];
	return (
		<div>
			<Link
				to="/"
				style={{
					textDecoration: "none",
				}}>
				<h1 className="heading">Khelo India</h1>
			</Link>

			<div style={{ margin: 30 }}>
				<p> Enter your Admin details here to log-in.</p>
				<div class="login-form">
					<form>
						<h2 class="text-center">Log in</h2>
						<div class="form-group">
							<input
								type="email"
								class="form-control"
								placeholder="Useremail"
								required="required"
							/>
						</div>
						<div class="form-group">
							<input
								type="password"
								class="form-control"
								placeholder="Password"
								required="required"
							/>
						</div>
						<div class="form-group">
							<button
								type="submit"
								class="btn btn-primary btn-block">
								Log in
							</button>
						</div>
						<div class="clearfix">
							<a href="#" class="float-right">
								Forgot Password?
							</a>
						</div>
					</form>
					<p class="text-center">
						<a href="#">Create an Account</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Admin;
