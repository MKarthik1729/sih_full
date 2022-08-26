import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Axios from 'axios';

const Signup = (props) => {
	
	const navigate = useNavigate();
	
	const useremailRef = useRef();
	const passwordRef = useRef();
	const designationRef = useRef();
	const addressRef = useRef();
	const cityRef = useRef();
	const firstnameRef = useRef();
	const lastnameRef = useRef();
	const phonenumRef = useRef();
	
	const submitHandler = async (event) => {
		event.preventDefault();

		const temp = {
			useremail : useremailRef.current.value,
			password : passwordRef.current.value,
			designation : designationRef.current.value,
			address : addressRef.current.value,
			city : cityRef.current.value,
			firstname : firstnameRef.current.value,
			lastname : lastnameRef.current.value,
			phone : phonenumRef.current.value
		}

		console.log(temp);

		const response = await Axios.post('http://localhost:5000/user/signup', {
			useremail : useremailRef.current.value,
			password : passwordRef.current.value,
			designation : designationRef.current.value,
			address : addressRef.current.value,
			city : cityRef.current.value,
			firstname : firstnameRef.current.value,
			lastname : lastnameRef.current.value,
			phone : phonenumRef.current.value
		});

		console.log(response.data);
		navigate('/user/login');
	}

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
				<p>
					
					Enter your{" "}
					<b>
						<span style={{ fontSize: 20 }}>{props.value}</span>
					</b>{" "}
					details here to register for Khelo India.
				</p>
				<div className="login-form">
					<form onSubmit={submitHandler}>
						<h2 className="text-center">Sign up</h2>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={useremailRef}
								type="email"
								className="form-control"
								placeholder="  Email : someone@gmail.com"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={passwordRef}
								type="password"
								className="form-control"
								placeholder="  Password"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={firstnameRef}
								type="text"
								className="form-control"
								placeholder="  First Name"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={lastnameRef}
								type="text"
								className="form-control"
								placeholder="  Last Name"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={phonenumRef}
								type="text"
								className="form-control"
								placeholder="  Phone Number"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={designationRef}
								type="text"
								className="form-control"
								placeholder="  Designation at school / college"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={addressRef}
								type="text"
								className="form-control"
								placeholder="  Address of School / College"
								required="required"
							/>
						</div>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={cityRef}
								type="text"
								className="form-control"
								placeholder="  City"
								required="required"
							/>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block">
								Signup
							</button>
						</div>
						<div className="clearfix">
							{props.value === "User" && (
								<div className="clearfix">
									<a
										href="/user/login"
										className="float-right">
										Login Instead?
									</a>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
