const express = require("express");

const Router = express.Router();

const get_equipment = require("../Schema/Requests/getEquipmentSchema");
const get_ground = require("../Schema/Requests/getGroundsSchema");
const get_playfield = require("../Schema/Requests/getPlayfieldSchema");

const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'khelindiasih@gmail.com',
		pass: 'zroelddfprtzfqks'
	}
});


// Function to send Email for the given configuration of emails
function sendEmail(mailOptions) {
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

Router.post("/newrequest", async (req, res) => {
	let token = "";
	console.log(req.body);
	// FormData.create(req.body);
	if (req.body.request_type === "get_grounds") {
		// Request type should be: -------------------------------------------------------
		// {
		//     "useremail" : "karthik.k20@iiits.in",
		//     "request_type" : "get_grounds",
		//     "ground_shape": "Rectangle",
		// 	"ground_height": 69696,
		// 	"ground_width": 6969,
		// 	"needed_improvement_info": "Guddha balga undaali plough chesi neat ga",
		// 	"approx_price": 69420
		// }

		token = await get_ground.find({ useremail: req.body.useremail });

		if (token.length > 0) {
			console.log("Request already found");
			console.log("Token is: " + token[0]._id.toString());
			res.send({ token: token });
		} else {
			const r = new get_ground({
				useremail: req.body.useremail,
				ground_area: req.body.ground_area,
				purpose : req.body.purpose,
				addn_info: req.body.addn_info,
			});

			await r.save();

			token = await get_ground.find({ useremail: req.body.useremail });
			let responseText = `We have received your request for 'Get a ground'. Please use the following token number for futher application Status: ${token[0]._id.toString()} \n\nThank you.\nKhel India.`;
			
			let mailOptions = {
				from: 'khelindiasih@gmail.com',
				to: req.body.useremail,
				subject: 'A new application for "Get a ground"',
				text: responseText
			};
			
			sendEmail(mailOptions);

			console.log(token[0]._id.toString());
			res.send({ token: token });
		}
	} else if (req.body.request_type === "get_equipment") {
		// Request type should be: -------------------------------------------------------

		// {
		//     "useremail" : "karthik.k20@iiits.in",
		//     "request_type" : "get_equipment",
		//     "name" : "Rubber Balls",
		//     "number_of_items" : 50,
		//     "approx_price" : 6969
		// }

		token = await get_equipment.find({ useremail: req.body.useremail });
		console.log(token);
		if (token.length > 0) {
			console.log("Token is: " + token[0]._id.toString());
			res.send({ token: token });
		} else {
			const r = new get_equipment({
				useremail: req.body.useremail,
				name: req.body.name,
				number_of_items_and_reason: req.body.number_of_items_and_reason,
				addn_info: req.body.addn_info,
			});

			await r.save();

			token = await get_equipment.find({ useremail: req.body.useremail });
			let responseText = `We have received your request for 'Get equipment'. Please use the following token number for futher application Status: ${token[0]._id.toString()} \n\nThank you.\nKhel India.`;
			
			let mailOptions = {
				from: 'khelindiasih@gmail.com',
				to: req.body.useremail,
				subject: 'A new application for "Get a equipment"',
				text: responseText
			};
			
			sendEmail(mailOptions);

			console.log(token[0]._id.toString());
			res.send({ token: token });
		}
	} else if (req.body.request_type === "get_playfield") {
        // Request type should be: -------------------------------------------------------
        
		// {
		//     "useremail" : "karthik.m20@iiits.in",
		//     "request_type" : "get_playfield",
		//     "required_for": "Pook gallu",
		//     "approx_usage": "Mathi leni modda gaallaki",
		//     "consent_letter": true
		// }

		token = await get_playfield.find({ useremail: req.body.useremail });
		console.log(token);
		if (token.length > 0) {
			console.log("Token is: " + token[0]._id.toString());
			res.send({ token: token });
		} else {
			const r = new get_playfield({
				useremail: req.body.useremail,
				required_for: req.body.required_for,
				intended_age_and_reason: req.body.intended_age_and_reason,
				addn_info: req.body.addn_info,
			});

			await r.save();
			
			token = await get_playfield.find({ useremail: req.body.useremail });
			let responseText = `We have received your request for 'Get a playfield'. Please use the following token number for futher application Status: ${token[0]._id.toString()} \n\nThank you.\nKhel India.`;
			
			let mailOptions = {
				from: 'khelindiasih@gmail.com',
				to: req.body.useremail,
				subject: 'A new application for "Get a playfield"',
				text: responseText
			};
			
			sendEmail(mailOptions);

			console.log(token[0]._id.toString());
			res.send({ token: token });
		}
	}
});

Router.post('/change_status', async (req, res) => {
	const type = req.body.req_type
	console.log(req.body);

	if(type === 'get_ground'){
		await get_ground.updateOne({_id : req.body.id}, { $set : {status : req.body.change_status_to}})
		
		let responseText = "";
		if(req.body.change_status_to === 'Accepted'){
			responseText = `We are pleased to announce that your application for "Getting a ground" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khel India.\n\nThank you.`
		}else{
			responseText = `We are sorry to say that your application for "Getting a ground" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`
		}

		const user = await get_ground.findOne({_id: req.body.id})
		console.log(user.useremail)

		let mailOptions = {
			from: 'khelindiasih@gmail.com',
			to: user.useremail,
			subject: 'Progress in your request for Khel India',
			text: responseText
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	if(type === 'get_equipment'){
		let responseText = "";
		if(req.body.change_status_to === 'Accepted'){
			responseText = `We are pleased to announce that your application for "Getting equipment" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khel India.\n\nThank you.`
		}else{
			responseText = `We are sorry to say that your application for "Getting equipment" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`
		}
		await get_equipment.updateOne({_id : req.body.id}, { $set : {status : req.body.change_status_to}})
		
		const user = await get_equipment.findOne({_id: req.body.id})
		console.log(user.useremail)

		let mailOptions = {
			from: 'khelindiasih@gmail.com',
			to: user.useremail,
			subject: 'Progress in your request for Khel India',
			text: responseText
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	if(type === 'get_playfield'){
		let responseText = "";
		if(req.body.change_status_to === 'Accepted'){
			responseText = `We are pleased to announce that your application for "Getting a playfield" with request id : ${req.body.id} has been appproved. \n\nOur co-ordinator will come into contact with you very soon. \n\n\nOnce again, congratulations for getting your application approved. Welcome to Khel India.\n\nThank you.`
		}else{
			responseText = `We are sorry to say that your application for "Getting a playfield" with request id : ${req.body.id} has been rejected. \n\nYou can re-apply in 14 working days again. Thank you.`
		}
		await get_playfield.updateOne({_id : req.body.id}, { $set : {status : req.body.change_status_to}})
		
		const user = await get_playfield.findOne({_id: req.body.id})
		console.log(user.useremail)

		let mailOptions = {
			from: 'khelindiasih@gmail.com',
			to: user.useremail,
			subject: 'Progress in your request for Khel India',
			text: responseText
		};

		console.log("Changed");

		sendEmail(mailOptions);
	}

	res.send({ status: "Changed" });
})

Router.get("/getallrequests", async (req, res) => {
	const result1 = await get_ground.find();
	const result2 = await get_equipment.find();
	const result3 = await get_playfield.find();

	res.send({get_ground: result1, get_equipment: result2, get_playfield: result3});
});

Router.post("/search_for_request", async (req, res) => {
	const token = req.body.token;
	console.log(token);

	let result = await get_equipment.findById(token);

	if (result !== null) {
		console.log(result);
		res.send({ result, request_type: "get_equipment" });
	}

	result = await get_playfield.findById(token);

	if (result !== null) {
		console.log(result);
		res.send({ result, request_type: "get_playfield" });
	}

	result = await get_ground.findById(token);

	if (result !== null) {
		console.log(result);
		res.send({ result, request_type: "get_grounds" });
	}

	console.log("OOPS! Result not found");
});


module.exports = Router;
