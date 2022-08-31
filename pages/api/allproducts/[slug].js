import product from "../../../models/product"
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
        const _id=req.query.slug; 
            let data=await product.findOne({_id});
            res.status(200).json(data);
      
}