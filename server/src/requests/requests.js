const express = require("express");

const Router = express.Router();

const User = require("../Schema/UserSchema");
const get_equipment = require("../Schema/Requests/getEquipmentSchema");
const get_ground = require("../Schema/Requests/getGroundsSchema");
const get_playfield = require("../Schema/Requests/getPlayfieldSchema");

const nodemailer = require("nodemailer");
var swearjar = require("swearjar");

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "khelindiasih@gmail.com",
		pass: "zroelddfprtzfqks",
	},
});

// Function to send Email for the given configuration of emails
function sendEmail(mailOptions) {
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
}

Router.post("/newrequest", async (req, res) => {
	let token = "";
	console.log(req.body);
	// FormData.create(req.body);
	if (req.body.request_type === "get_grounds") {
		token = await get_ground.find({ useremail: req.body.useremail });
		console.log(token);

		for (const i in token) {
			if (token[i].status === "Pending") {
				console.log("Request already found");
				console.log("Token is: " + token[0]._id.toString());
				res.send({ token: token });
				return;
			}
		}

		console.log("Creating new request");

		if (
			swearjar.profane(req.body.purpose) ||
			swearjar.profane(req.body.addn_info)
		) {
			console.log("Profanity found, terminating account.");
			await User.findOneAndDelete({ useremail: req.body.useremail });

			let responseText = `
			<html><head><b>
			Account Termination for violation of guidelines
			</b>
			</head>
			<body>
			<br>
			It has been observed that you have used unparlimentary language, for which we are now <span style = "color : red" ><b>Terminating</b></span> your account. You can apply in few days. 
			<br><br>
			Thank you,
			Khelo India. <br>
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: "Regarding termination of account	",
				html: responseText,
			};

			sendEmail(mailOptions);
			return;
		}

		const r = new get_ground({
			request_type: "get_grounds",
			useremail: req.body.useremail,
			school_addr: req.body.school_addr,
			approx_price: req.body.approx_price,
			ground_area: req.body.ground_area,
			purpose: req.body.purpose,
			addn_info: req.body.addn_info,
			status_of_ground: req.body.status_of_ground,
		});

		await r.save();

		token = await get_ground
			.find({ useremail: req.body.useremail })
			.sort({ _id: -1 });
		let responseText = `
			<html><head><b>
			Great to have you on board
			</b>
			</head>
			<body>
			We have received your request for 'Get a ground'. 
			Please use the following token number for futher application Status: ${token[0]._id.toString()} \n\nThank you.\nKhel India. 
			</body>
			</html>`;

		console.log(token);

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: req.body.useremail,
			subject: 'A new application for "Get a ground"',
			html: responseText,
		};

		sendEmail(mailOptions);
		if (token[0].ground_area < 500) {
			// have to reject
			console.log("Rejecting due to less area");

			await get_ground.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected to less area",
					},
				}
			);

			let responseText = `
			<html><head><b>
			Your application has been rejected
			</b>
			</head>
			<body>
			We have received your request for 'Get a ground'. 
			We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> due to lesser area constraint. <br> Please apply in few more days <br><br><b> Thank you <b><br> Khelo India.
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: 'Progress regarding "Get a ground" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}
		if (token[0].approx_price > 1000000) {
			// have to reject
			console.log("Rejecting due to very high approx price");

			await get_ground.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected due to high approx price",
					},
				}
			);

			let responseText = `
			<html><head><b>
			Your application has been rejected
			</b>
			</head>
			<body>
			We have received your request for 'Get a ground'. 
			We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> due to high approximate price <br> Please apply in few more days <br><br><b> Thank you <b><br> Khelo India.
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: 'Progress regarding "Get a ground" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}
		console.log(token[0]._id.toString());
		res.send({ token: token });
	} else if (req.body.request_type === "get_equipment") {
		token = await get_equipment.find({ useremail: req.body.useremail });
		console.log(token);

		for (const i in token) {
			if (token[i].status === "Pending") {
				console.log("Request already found");
				console.log("Token is: " + token[0]._id.toString());
				res.send({ token: token });
				return;
				break;
			}
		}

		if (
			swearjar.profane(req.body.name_of_equipment) ||
			swearjar.profane(req.body.addn_info)
		) {
			console.log("Profanity found, terminating account.");
			await User.findOneAndDelete({ useremail: req.body.useremail });

			let responseText = `
			<html><head><b>
			Account Termination for violation of guidelines
			</b>
			</head>
			<body>
			<br>
			It has been observed that you have used unparlimentary language, for which we are now <span style = "color : red" ><b>Terminating</b></span> your account. You can apply in few days. 
			<br><br>
			Thank you,
			Khelo India. <br>
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: "Regarding termination of account	",
				html: responseText,
			};

			sendEmail(mailOptions);
			return;
		}

		console.log("Creating new request");
		const r = new get_equipment({
			request_type: "get_equipment",
			useremail: req.body.useremail,
			name_of_equipment: req.body.name_of_equipment,
			number_of_items: req.body.number_of_items,
			approx_price: req.body.approx_price,
			addn_info: req.body.addn_info,
		});

		await r.save();

		token = await get_equipment
			.find({ useremail: req.body.useremail })
			.sort({ _id: -1 });
		let responseText = `
			<html><head><b>
			Great to have you on board
			</b>
			</head>
			<body>
			We have received your request for 'Get sports equipment'. 
			Please use the following token number for futher application Status: <b>${token[0]._id.toString()}</b> \n\nThank you.\nKhel India. 
			</body>
			</html>`;

		console.log(token);

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: req.body.useremail,
			subject: 'A new application for "Get Sports Equipment"',
			html: responseText,
		};

		sendEmail(mailOptions);
		if (token[0].number_of_items > 5000) {
			// have to reject
			console.log("Rejecting due to high number of items");

			await get_ground.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected to high number of items",
					},
				}
			);

			let responseText = `
			<html><head><b>
			Your application has been rejected
			</b>
			</head>
			<body>
			We have received your request for 'Get Sports Equipment'. 
			We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> has been rejected due to high number of requests. We are currently not accepting number of items more than 5000. <br> Please apply in few more days <br><br><b> Thank you <b><br> Khelo India.
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: 'Progress regarding "Get a sports" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}
		if (token[0].approx_price > 1000000) {
			// have to reject
			console.log("Rejecting due to very high approx price");

			await get_equipment.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected due to high approx price",
					},
				}
			);

			let responseText = `
			<html><head><b>
			Your application has been rejected
			</b>
			</head>
			<body>
			We have received your request for 'Get sports equipment'. 
			We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> due to high approximate price <br> Please apply in few more days <br><br><b> Thank you <b><br> Khelo India.
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject:
					'Progress regarding "Get Sports Equipment" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}
		console.log(token[0]._id.toString());
		res.send({ token: token });
	} else if (req.body.request_type === "get_playfield") {
		token = await get_playfield.find({ useremail: req.body.useremail });
		console.log(token);

		for (const i in token) {
			if (token[i].status === "Pending") {
				console.log("Request already found");
				console.log("Token is: " + token[0]._id.toString());
				res.send({ token: token });
				return;
			}
		}

		if (
			swearjar.profane(req.body.required_for) ||
			swearjar.profane(req.body.addn_info)
		) {
			console.log("Profanity found, terminating account.");
			await User.findOneAndDelete({ useremail: req.body.useremail });

			let responseText = `
			<html><head><b>
			Account Termination for violation of guidelines
			</b>
			</head>
			<body>
			<br>
			It has been observed that you have used unparlimentary language, for which we are now <span style = "color : red" ><b>Terminating</b></span> your account. You can apply in few days. 
			<br><br>
			Thank you,
			Khelo India. <br>
			</body>
			</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: "Regarding termination of account	",
				html: responseText,
			};

			sendEmail(mailOptions);
			return;
		}

		console.log("Creating new request");

		const r = new get_playfield({
			useremail: req.body.useremail,
			required_for: req.body.required_for,
			intended_age: req.body.intended_age,
			approx_price: req.body.approx_price,
			addn_info: req.body.addn_info,
			approx_usage_per_week: req.body.approx_usage_per_week,
		});

		await r.save();

		token = await get_playfield
			.find({ useremail: req.body.useremail })
			.sort({ _id: -1 });

		let responseText = `
			<html><head><b>
			Great to have you on board
			</b>
			</head>
			<body>	
			We have received your request for 'Get a playfield'. 
			Please use the following token number for futher application Status: ${token[0]._id.toString()} <br><br>Thank you.<br>>Khelo India. 
			</body>
			</html>`;

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: req.body.useremail,
			subject: 'A new application for "Get a playfield"',
			text: responseText,
		};

		sendEmail(mailOptions);

		if (token[0].approx_usage_per_week > 500) {
			// have to reject
			console.log("Rejecting due to high usage");

			await get_playfield.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected to high usage",
					},
				}
			);

			let responseText = `
				<html><head><b>
				Your application has been rejected
				</b>
				</head>
				<body>
				We have received your request for 'Get a playfield'. 
				We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> has been rejected due to higher number of people. 
				We are currently not accepting frequency > 500 per week.
				<br> Please apply in few more days <br><br><b> Thank you </b><br> Khelo India.
				</body>
				</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: 'Progress regarding "Get a playfield" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}

		if (token[0].approx_price > 1000000) {
			// have to reject
			console.log("Rejecting due to very high approx price");

			await get_playfield.updateOne(
				{ _id: token[0]._id },
				{
					$set: {
						status: "Rejected",
						remarks: "Rejected due to high approx price",
					},
				}
			);

			let responseText = `
				<html><head><b>
				Your application has been rejected
				</b>
				</head>
				<body>
				We have received your request for 'Get a playfield'. 
				We are sorry to say that your application with following token number: <span style = "color : red" ><b>${token[0]._id.toString()}</span></b> has been rejected due to high approximate price <br> Please apply in few more days <br><br><b> Thank you <b><br> Khelo India.
				</body>
				</html>`;

			let mailOptions = {
				from: "khelindiasih@gmail.com",
				to: req.body.useremail,
				subject: 'Progress regarding "Get a playfield" application',
				html: responseText,
			};

			sendEmail(mailOptions);
		}

		console.log(token[0]._id.toString());
		res.send({ token: token });
	}
});

Router.post("/change_status", async (req, res) => {
	const type = req.body.req_type;
	console.log(req.body);

	if (type === "get_ground") {
		if (req.body.change_status_to === "Accepted") {
			await get_ground.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Accepted by Sports Executive",
					},
				}
			);
		} else if (req.body.change_status_to === "Rejected") {
			await get_ground.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Manually Rejected by Sports Executive",
					},
				}
			);
		}

		let responseText = "";
		if (req.body.change_status_to === "Accepted") {
			responseText = `
			We are pleased to announce that your application for "Getting a ground" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khelo India.\n\nThank you.
			`;
		} else {
			responseText = `We are sorry to say that your application for "Getting a ground" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`;
		}

		const user = await get_ground.findOne({ _id: req.body.id });
		console.log(user.useremail);

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: user.useremail,
			subject: "Progress in your request for Khelo India",
			text: responseText,
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	if (type === "get_equipment") {
		if (req.body.change_status_to === "Accepted") {
			await get_equipment.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Accepted by Sports Executive",
					},
				}
			);
		} else if (req.body.change_status_to === "Rejected") {
			await get_equipment.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Manually Rejected by Sports Executive",
					},
				}
			);
		}

		let responseText = "";
		if (req.body.change_status_to === "Accepted") {
			responseText = `We are pleased to announce that your application for "Getting equipment" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khelo India.\n\nThank you.`;
		} else {
			responseText = `We are sorry to say that your application for "Getting equipment" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`;
		}

		const user = await get_equipment.findOne({ _id: req.body.id });
		console.log(user.useremail);

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: user.useremail,
			subject: "Progress in your request for Khelo India",
			text: responseText,
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	if (type === "get_playfield") {
		if (req.body.change_status_to === "Accepted") {
			await get_playfield.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Accepted by Sports Executive",
					},
				}
			);
		} else if (req.body.change_status_to === "Rejected") {
			await get_playfield.updateOne(
				{ _id: req.body.id },
				{
					$set: {
						status: req.body.change_status_to,
						remarks: "Manually Rejected by Sports Executive",
					},
				}
			);
		}

		let responseText = "";
		if (req.body.change_status_to === "Accepted") {
			responseText = `We are pleased to announce that your application for "Getting a playfield" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khelo India.\n\nThank you.`;
		} else {
			responseText = `We are sorry to say that your application for "Getting a playfield" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`;
		}

		const user = await get_playfield.findOne({ _id: req.body.id });
		console.log(user.useremail);

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: user.useremail,
			subject: "Progress in your request for Khelo India",
			text: responseText,
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	res.send({ status: "Changed" });
});

Router.get("/getallrequests", async (req, res) => {
	const result1 = await get_ground.find();
	const result2 = await get_equipment.find();
	const result3 = await get_playfield.find();

	res.send({
		get_ground: result1,
		get_equipment: result2,
		get_playfield: result3,
	});
});

Router.post("/getallrequests", async (req, res) => {
	const email = req.body.email;
	console.log(email);

	const getGroundRequests = await get_ground.find({ useremail: email });
	const getEquipmentRequests = await get_equipment.find({ useremail: email });
	const getPLayfieldRequests = await get_playfield.find({ useremail: email });

	// console.log(getGroundRequests, getEquipmentRequests, getPLayfieldRequests);
	res.send([getGroundRequests, getEquipmentRequests, getPLayfieldRequests]);
});

Router.post("/search_for_request", async (req, res) => {
	const token = req.body.token;
	const mail = req.body.searching_useremail;
	console.log(token, mail);

	let result = await get_equipment.findById(token);

	if (result !== null && result.useremail === mail) {
		console.log(result);
		res.send({ result, request_type: "get_equipment" });
		return;
	}

	result = await get_playfield.findById(token);

	if (result !== null && result.useremail === mail) {
		console.log(result);
		res.send({ result, request_type: "get_playfield" });
		return;
	}

	result = await get_ground.findById(token);

	if (result !== null && result.useremail === mail) {
		console.log(result);
		res.send({ result, request_type: "get_grounds" });
		return;
	}

	res.json({ error: "error" });

	console.log("OOPS! Result not found");
});

module.exports = Router;
