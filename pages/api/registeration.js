import registeration from "../../models/registeration";
import mongoose from "mongoose";
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
        if(req.method==='POST'){
            let p=new registeration(req.body);
            if(req.body.password !==req.body.cpassword){
                res.json({error:"Passwords must be same"});
            }
            else{
                let d=await registeration.findOne({email:req.body.email})
                if(d!=null){
                    res.json({error:"Email already exist"})
                }
                else{
                    await p.save(); 
                    let data=await registeration.findOne({email:req.body.email})
                   let token=jwt.sign({user:data._id},"mynameisdavinderkumar");   

                    res.status(200).json({token});
                }
                
            }            
        }
        else{  
                let data= await registeration.find({});
                res.status(200).json(data);
        }
}