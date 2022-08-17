const express = require('express')
const NewUser = require('../Schema/UserSchema')

const Router = express.Router()

Router.post('/NewUser',(req,res)=>{
    NewUser.create(req.body)
    console.log(req.body)
    res.send({
        name : "karthik"
    })
})

Router.post('/',(req,res)=>{
    // NewAdmin.create(req.body)
    // console.log(req.body)

    NewUser.findOne({email:req.body.email},(e,user)=>{
        if(user==null){
            res.send({
                error:'error'
            })
            return ;
        }
        if(req.body.pass === user.password ){
            res.send({
                id:user.id
            })
            return;
        }
        res.send({
            error:'error'
        })
    })
})

module.exports = Router