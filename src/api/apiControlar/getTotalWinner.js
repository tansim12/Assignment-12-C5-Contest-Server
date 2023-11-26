const Contest = require("../../Model/contest")

const totalWinner = async(req , res)=>{
    
const result = await Contest.find()
const totalWinnerData =   result?.filter(item=> item.winner_status=== true)
const allWinnerImage = totalWinnerData?.map(item=>item?.winner.image)
const totalContestCreate = result?.length
const contestActiveNow = result?.length - totalWinnerData?.length
res.send({allWinnerImage , contestActiveNow , totalContestCreate })
}

module.exports = totalWinner