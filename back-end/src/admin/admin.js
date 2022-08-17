const express = require('express')
const NewAdmin = require('../Schema/AdminSchema')

const Router = express.Router()

Router.post('/happy',(req,res)=>{
    NewAdmin.create(req.body)
    console.log(req.body)

    res.send({
        name : "karthik"
    })
})

Router.post('/NewAdmin',(req,res)=>{
    // try{
        NewAdmin.create(req.body,function(err) {
            if (err) return res.json(err);
            res.send({
                name : "karthik"
            })
        })

    // }
    // catch(e){
    //     res.send({
    //         error:e
    //     })
    // }
    
    
})
Router.post('/',(req,res)=>{
    // NewAdmin.create(req.body)
    try {
        NewAdmin.findOne({email:req.body.email},(e,user)=>{
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
    } catch (error) {
        
    }

    
})


module.exports = Router