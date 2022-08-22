const express = require('express')
const User = require('../Schema/UserSchema')

const Router = express.Router()

Router.post('/login', async (req,res)=>{
    // NewAdmin.create(req.body)
    
    console.log(req.body)
    console.log(req.body);
	// NewAdmin.create(req.body)
	try {
		const result = await User.findOne({
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
})

module.exports = Router