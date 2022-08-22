import React from "react";
import { Link } from "react-router-dom";

import "./adminFormStyles.css";

function ForgotPassword(props) {
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
				<p> Enter your email to find the <b><span style = {{fontSize : 20}}>{props.value}</span></b> details.</p>
				<div class="login-form">
					<form onSubmit= ''>
						<h2 class="text-center">Log in</h2>
						<div class="form-group">
							<input
								style={{ margin: 10 }}
								type="email"
								class="form-control"
								placeholder="  xyz@gmail.com"
								required="required"
							/>
						</div>

						<div class="form-group">
							<button
								type="submit"
								class="btn btn-primary btn-block">
								Submit
							</button>
						</div>
					
					</form>
					 
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
