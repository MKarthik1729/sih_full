import React, { useState } from "react";
import { Link } from "react-router-dom";
import Userpage from "../user/Userpage";
import { AdminURL } from "../values";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userpage from "../user/Userpage";
import { AdminURL } from "../values";

import { AiOutlineUser } from "react-icons/ai";
import { StyledDiv, SubmitButton } from "../style/button";
import {
	ForgotP,
	FormDiv,
	ImgDiv,
	LoginDiv,
	StyledInput,
} from "../style/login";

function Admin() {
	const [id, setId] = useState();
	const [Pass, setPass] = useState();
	const [Url, setUrl] = useState(true);
	// setUrl('/');
	const HandleSubmit = async (e) => {
		e.preventDefault();
		// console.log(id,Pass)
		console.log(AdminURL);
		const result = await fetch(AdminURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: id,
				pass: Pass,
			}),
		});
		const fin = await result.json();

		console.log(fin.id);
		fin.id && setUrl(fin.id);
		// history.push('/NewAdmin')
	};
	return (
		<StyledDiv>
			<LoginDiv>
				<FormDiv>
					{/* <label> */}
					{/* <FaUser size='20' /> */}
					<AiOutlineUser size="20%" />
					<div>
						<p>Admin</p>
						{Url && (
							<form>
								<label>
									<StyledInput
										placeholder="email"
										type="text"
										onChange={(e) => setId(e.target.value)}
									/>
								</label>
								<br />
								<br />
								<label>
									<StyledInput
										placeholder="Password"
										type="Password"
										onChange={(e) =>
											setPass(e.target.value)
										}
									/>
								</label>

								<SubmitButton onClick={HandleSubmit}>
									Login
								</SubmitButton>
								<ForgotP>forget Password</ForgotP>
							</form>
						)}
						{!Url && <Userpage hello={Url} />}
					</div>
				</FormDiv>
				<ImgDiv></ImgDiv>
			</LoginDiv>
		</StyledDiv>
	);
}

export default Admin;
