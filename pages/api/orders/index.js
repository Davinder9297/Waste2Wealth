import mongoose from "mongoose";
import registeration from "../../models/registeration";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    // console.log(req.body);
    // res.json(req.body)
    const password=req.body.password;
            const email=req.body.email;
            if(email && password){
                let data= await registeration.findOne({ $and: [ {password}, {email} ] });
res.status(200).json(data);
            }
            
}