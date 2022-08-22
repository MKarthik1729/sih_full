const express = require("express");

const Router = express.Router();

const FormData = require("../Schema/FormSchema");

const get_equipment = require("../Schema/Requests/getEquipmentSchema");
const get_ground = require("../Schema/Requests/getGroundsSchema");
const get_playfield = require("../Schema/Requests/getPlayfieldSchema");

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
				number_of_items: req.body.number_of_items,
				approx_price: req.body.approx_price,
			});

			await r.save();

			token = await get_equipment.find({ useremail: req.body.useremail });
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
				approx_usage: req.body.approx_usage,
				consent_letter: req.body.consent_letter,
			});

			await r.save();

			token = await get_playfield.find({ useremail: req.body.useremail });
			console.log(token[0]._id.toString());
			res.send({ token: token });
		}
	}
});

Router.get("/allrequests", async (req, res) => {
	const result = await get_ground.find();
	console.log(result);
	res.send(result);
});

Router.post("/validate", async (req, res) => {
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
