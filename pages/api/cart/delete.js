import mongoose from "mongoose";
import cart from "../../../models/cart";

mongoose.connect("mongodb://localhost:27017/magento");
export default async function handler(req, res) {
const id=req.body.id;
await cart.findByIdAndDelete(id);
}