const express = require("express");
const User = require("../Schema/UserSchema");

const Router = express.Router();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "khelindiasih@gmail.com",
		pass: "zroelddfprtzfqks",
	},
});

function sendEmail(mailOptions) {
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

Router.post("/login", async (req, res) => {
	// NewAdmin.create(req.body)

	console.log(req.body);
	// console.log(req.body);
	// NewAdmin.create(req.body)
	try {
		const result = await User.findOne({
			username: req.body.username,
			password: req.body.password,
		});
		//res.send({ result, status: "success" });
		if (result) {
			res.json(result);
		} else {
			res.json(null);
		}
	} catch (e) {
		res.json(null);
		console.log(e);
	}
});

Router.post("/signup", async (req, res) => {
	console.log(req.body);

	const result = await User.findOne({
		username: req.body.username,
		password: req.body.password,
	});
	//res.send({ result, status: "success" });
	if (result) {
		res.json(result);
	} else {
		// save
		const newUser = new User({
			useremail: req.body.useremail,
			password: req.body.password,
			designation: req.body.designation,
			address: req.body.address,
			city: req.body.city,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			phone: req.body.phone,
		});

		await newUser.save();

		const token = await User.findOne({ useremail: req.body.useremail });
		console.log(token);

		let responseText = `We are happy to have you onboard. We have created a new account successfully. Welcome to "Khelo India". A place where government meets people. Your application has been successfully created and the User ID generated is : ${token._id.toString()}`;

		let mailOptions = {
			from: "khelindiasih@gmail.com",
			to: req.body.useremail,
			subject: "Khelo India welcomes you",
			text: responseText,
		};

		sendEmail(mailOptions);

		res.send({ result: newUser });
	}
});

module.exports = Router;
