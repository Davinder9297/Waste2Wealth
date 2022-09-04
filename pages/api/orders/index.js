import mongoose from "mongoose";
import order from "../../../models/orders";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    if(req.method==='POST'){
        let p=new order(req.body);
        await p.save();
        res.status(200).json({ success: 'success' })

    }
    else{
let data=await order.find({});
res.json(data);
    }
    
            
}