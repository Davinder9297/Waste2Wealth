import mongoose from "mongoose";
import registeration from '../../../models/registeration';
import jwtDecode from 'jwt-decode';
import { parseCookies } from "nookies";

mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
    // console.log(req.query);
    let _id=req.query._id;  
        let data=await registeration.findById(_id);
        res.status(200).json(data);
          console.log(data);
}