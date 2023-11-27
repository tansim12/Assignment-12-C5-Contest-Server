const Contest = require("../../Model/contest")

const getContest= async(req , res)=>{
    const result = await Contest.find({status:"approved"})
    res.send(result)
}
module.exports=getContest