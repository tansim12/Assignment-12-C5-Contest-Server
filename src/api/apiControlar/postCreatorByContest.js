const Contest = require("../../Model/contest")

const postCreatorByContest =async (req , res)=>{
    const info = req.body
    const newInfo = new Contest(info)
     await newInfo.save()
    res.send({success:true})
}
module.exports=postCreatorByContest