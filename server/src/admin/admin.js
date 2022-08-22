const express = require("express");
const NewAdmin = require("../Schema/AdminSchema");

const Router = express.Router();

Router.post("/login", async (req, res) => {
	console.log(req.body);
	// NewAdmin.create(req.body)
	try {
		const result = await NewAdmin.findOne({
			username: req.body.username,
			password: req.body.password,
		});
		//res.send({ result, status: "success" });
		if(result){
			res.json(result);
		}
		else{
			res.json(null);
		}

	} catch (e) {
		res.json(null);
		console.log(e);
	}
});

module.exports = Router;
