const express = require('express');
const Users = require('../../Model/User');
const router = express.Router()

router.get("/currentRole/:email" , async(req, res)=>{
    const email = req.params.email
    const findUser = await Users.findOne({email:email})
    const role = findUser?.role
    
    res.send({currentRole: role})
})

module.exports=router





