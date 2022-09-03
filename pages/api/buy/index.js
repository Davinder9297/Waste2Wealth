import mongoose from "mongoose";
import buy from "../../../models/buy";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    // console.log(req.body);
    if(req.method==='POST'){
    //     if(req.body.paymentmethod==='Card'){
    //         if(req.body.email!=="" && req.body.nameoncard!=="" && req.body.cardnumber!=="" && req.body.expirationdate!=="" && req.body.cvc!=="" && req.body.address!=="" && req.body.city!=="" && req.body.region!=="" && req.body.postalcode!=="" && req.body.netbankingoption!==""){
    //             let p=new buy(req.body);
    //             await p.save();
    //             res.status(200).json({success:"success"})  
    //             }
    //     }
    //     else{
            let p=new buy(req.body);
                await p.save();
                res.status(200).json({success:"success"}) 
        }

    // }
    else{
        let data=await buy.find({});
        res.status(200).json(data);
    }      
}