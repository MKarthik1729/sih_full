import React, { useState } from "react";

import "./tabs.css";
import "./form.css";

const submitHandler = () => {};

const Tabs = () => {
	const [currentTab, setCurrentTab] = useState("1");

	const SchoolDetails = (
		<div class = "body"> 
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">First Name</label>
						<input
							class="input--style-4"
							type="text"
							name="firstname"
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">Last Name</label>
						<input
							class="input--style-4"
							type="text"
							name="lastname"
						/>
					</div>
				</div>
			</div>
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">Email ID</label>
						<input
							class="input--style-4"
							type="email"
							name="email"
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">Designation</label>
						<input
							class="input--style-4"
							type="text"
							name="designation"
						/>
					</div>
				</div>
			</div>
			<div class="row row-space">
				<div class="col-2">
					<div class="input-group">
						<label class="label">Phone Number</label>
						<input
							class="input--style-4"
							type="tel"
							name="phonenumber"
						/>
					</div>
				</div>
				<div class="col-2">
					<div class="input-group">
						<label class="label">City</label>
						<input class="input--style-4" type="text" name="city" />
					</div>
				</div>
			</div>
			<div class="row row-space">
				{/* <div class="col">
			<div class="input-group">
				<label class="label">Password</label>
				<input
					class="input--style-4"
					type="password"
					name="password"
				/>
			</div>
		</div> */}
			</div>
			<div>
				<div>
					<div class="input-group">
						<label class="label">School Address</label>
						<input
							class="input--style-4"
							type="text"
							name="address"
						/>
					</div>
				</div>
			</div>
		</div>
	);

	const tabs = [
		{
			id: 1,
			tabTitle: "Request for Grounds",
			content: (
				
				<form autoComplete="off">
					<div class = "body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Required Ground Area (in sq mts.)
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
										required
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Purpose for ground (Name of the Sport)
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose" 
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Requirements (Ploughing,
									Gardening etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
									required
								/>
							</div>
						</div>
					<br />
					<hr />
					<br />

					<p> School Details : - </p>
					</div>

					{SchoolDetails}
					<div class="p-t-15">
						<button
							class="btn btn--radius-2 btn--blue"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			),
		},
		{
			id: 2,
			tabTitle: "Request for Sports Equipment",
			content: (
				<form autoComplete="off">
					<div class = "body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Required Sports Equipment
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Number of people and reason it is
										intended for
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose"
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Details (Information about
									divisons in items, etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
								/>
							</div>
						</div>
					<br />
					<hr />
					<br />
					<p> School Details : - </p>
					{SchoolDetails}
					</div>

					<div class="p-t-15">
						<button
							class="btn btn--radius-2 btn--blue"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			),
		},
		{
			id: 3,
			tabTitle: "Request for play areas",
			title: "Title 3",
			content: (
				<form autoComplete="off">
					<div class = "body">
						<p>Request Details : -</p>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Purpose for additional Area
									</label>
									<input
										class="input--style-4"
										type="text"
										name="required-ground-area"
									/>
								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<label class="label">
										Intented purpose and meant for which
										aged people
									</label>
									<input
										class="input--style-4"
										type="text"
										name="purpose"
									/>
								</div>
							</div>
						</div>

						<div>
							<div class="input-group">
								<label class="label">
									Additional Details (Information about
									installation of benches, slides, etc.)
								</label>
								<input
									class="input--style-4"
									type="text"
									name="addn-info"
								/>
							</div>
						</div>
					<br />
					<hr />
					<br />

					<p> School Details : - </p>
					{SchoolDetails}
					</div>

					<div class="p-t-15">
						<button
							type="submit">
							Submit
						</button>
					</div>
				</form>
			),
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className="container">
			<div className="tabs">
				{tabs.map((tab, i) => (
					<button
						key={i}
						id={tab.id}
						disabled={currentTab === `${tab.id}`}
						onClick={handleTabClick}>
						{tab.tabTitle}
					</button>
				))}
			</div>
			<div className="content">
				{tabs.map((tab, i) => (
					<div key={i}>
						{currentTab === `${tab.id}` && (
							<div>
								<p>{tab.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
