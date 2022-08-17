const express = require('express');

const Router = express.Router();

const FormData = require("../Schema/FormSchema");

Router.post("/newrequest", (req, res) => {
    console.log(req.body);
    FormData.create(req.body);
    res.send(req.body)
})

Router.get("/newrequest", (req, res) => {
    res.send({name : "Rohith"})
})

module.exports = Router;