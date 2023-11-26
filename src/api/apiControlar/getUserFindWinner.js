const Contest = require("../../Model/contest")

const getUserFindWinner = async(req, res)=>{
    const email= req.params.email
    const result = await Contest.find({"winner.email":email})
    const winnerCount = result.length
    res.send({result , winnerCount})

}
module.exports=getUserFindWinner