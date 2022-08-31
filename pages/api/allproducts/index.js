import product from "../../../models/product"
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
    if (req.method === 'POST') {
            let p = new product(req.body );
       
           await p.save();
           res.status(200).json({ success: 'success' })
        }
    else{
        const category=req.query.category;
        const type=req.query.type;
        if(category && !type){
            let data=await product.find({category});
            res.status(200).json(data)
        }
       else if(!category && type){
            let data=await product.find({type});
            res.status(200).json(data)
        }
       else if(category && type){
            let data=await product.find({ $and: [ {category}, {type} ] });
            res.status(200).json(data)
        }
        else{
            let data=await product.find({});
            res.status(200).json(data)


        }
    }
}