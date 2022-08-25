import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import { store } from "../App";

import "./adminFormStyles.css";

function Login(props) {
	const [user, setUser] = useContext(store);

	const navigate = useNavigate();

	const useremailRef = useRef();
	const passwordRef = useRef();

	const submitHandler = async (event) => {
		event.preventDefault();

		Axios.post(
			`http://localhost:5000/${
				props.value === "Admin" ? "admin" : "user"
			}/login`,
			{
				useremail: useremailRef.current.value,
				password: passwordRef.current.value,
			}
		)
			.then((res) => {
				let u = res.data;
				console.log(u);
				if (u === null) {
					alert("Invalid username or password");
				} else {
					// <Link to={'/admin/dashboard'}></Link>
					setUser(u);
					console.log(user);
					if (props.value === "Admin") {
						navigate("/admin/dashboard");
					} else if (props.value === "User") {
						navigate("/user/dashboard");
					}
				}
			})
			.catch((err) => {
				alert("Invalid username or password");
			});
	};

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
					{" "}
					Enter your{" "}
					<b>
						<span style={{ fontSize: 20 }}>{props.value}</span>
					</b>{" "}
					details here to log-in.
				</p>
				<div className="btn-home">
					{props.value === "User" ? (
						<Link to="/admin/login">
							<button>Enter as Admin</button>
						</Link>
					) : (
						<Link to="/user/login">
							<button>Enter as User</button>
						</Link>
					)}
				</div>
				<div className="login-form">
					<form onSubmit={submitHandler}>
						<h2 className="text-center">Log in</h2>
						<div className="form-group">
							<input
								style={{ margin: 10 }}
								ref={useremailRef}
								type="email"
								className="form-control"
								placeholder="  xyz@gmail.com"
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
						<div className="forgot-password">
							<a
								href="/user/login/forgotPassword"
								className="float-right">
								Forgot Password?
							</a>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block">
								Login
							</button>
						</div>
						<div className="clearfix">
							{props.value === "User" && (
								<div className="clearfix">
									<a
										href="/user/signup"
										className="float-right">
										New user? Register instead
									</a>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
