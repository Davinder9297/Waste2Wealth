import product from "../../../models/product"
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
        const q=req.query.q.trim(); 
            let data=await product.find({ $or: [ {category: {$regex : `.*${q}.*`}},{title: {$regex : `.*${q}.*`}},{slug: {$regex : `.*${q}.*`}},{type: {$regex : `.*${q}.*`}},{feature: {$regex : `.*${q}.*`}},{price: {$regex : `.*${q}.*`}},{oldprice: {$regex : `.*${q}.*`}} ] });
            res.status(200).json(data);
}