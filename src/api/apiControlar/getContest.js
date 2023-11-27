const Contest = require("../../Model/contest")

const getContest= async(req , res)=>{
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size
    const result = await Contest.find({status:"approved"})
    const allContestData = await Contest.find().skip(skip).limit(size)
    const totalContestCount = await Contest.estimatedDocumentCount()
    res.send({result , totalContestCount , allContestData})
}
module.exports=getContest