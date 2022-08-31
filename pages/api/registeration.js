import registeration from "../../models/registeration";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
    let d=await registeration.findOne({email:req.body.email})
        if(req.method==='POST'){
            let p=new registeration(req.body);
            if(req.body.password !==req.body.cpassword){
                res.json({error:"Passwords must be same"});
            }
            else{
                if(d!=null){
                    res.json({error:"Email already exist"})
                }
                else{
                    await p.save();    
                    res.status(200).json({success:"success"});
                }
                
            }            
        }
        else{  
                let data= await registeration.find({});
                res.status(200).json(data);
        }
}