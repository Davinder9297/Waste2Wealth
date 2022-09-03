import mongoose from "mongoose";
import registeration from '../../../models/registeration';
import jwtDecode from 'jwt-decode';
import { parseCookies } from "nookies";

mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
    let _id=req.query._id;  
        let data=await registeration.findById(_id);
        res.status(200).json(data);
}