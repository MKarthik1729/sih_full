const express = require("express");
const BodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const Admin = require("./src/admin/admin");
const User = require("./src/user/user");
const Request = require("./src/requests/requests");

dotenv.config();
const app = express();
app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
// console.log(process.env.Mongo_URL)

app.use("/admin", Admin);
app.use("/user", User);
app.use("/requests", Request);

mongoose
	.connect(process.env.Mongo_URL, {
		serverSelectionTimeoutMS: 5000,
	})
	.catch((err) => console.log(err.reason))
	.then(
		app.listen(5000, (e) => {
			console.log('Listening to port 5000');
			console.log("connected to the database");
		})
	);
