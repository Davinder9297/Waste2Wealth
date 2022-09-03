import mongoose from "mongoose";
import cart from "../../../models/cart";
import product from "../../../models/product"

mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    if(req.method==='POST'){
        const _id=req.body.id;
        const image=req.body.image;
        let data= await product.findById(_id);
        let check=await cart.findOne({image});
        if(check){
            await cart.findByIdAndUpdate({_id:check.id}, {$set:req.body});
        }
        else{
            let p=new cart({
                title:data.title,
                price:data.price,
                image:data.image,
                productid:data._id,
                count:1,
                totalprice:Number(data.price.replace(',',''))
            });
            await p.save();
        }
        
    }
   
    else{
        let d=await cart.find({});
        res.status(200).json(d);

    }

}