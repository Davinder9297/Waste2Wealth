import mongoose from "mongoose";
import registeration from "../../models/registeration";
import jwt from 'jsonwebtoken'
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    const password=req.body.password;
            const email=req.body.email;
            let data= await registeration.findOne({ $and: [ {password}, {email} ] });
            if(email && password && data){
                let token=jwt.sign({user:data._id},"mynameisdavinderkumar");
res.status(200).json({data,token});
            }
            else{
                res.json({error:"Invaild email address or password"})
            }
            
}