import mongoose from "mongoose";
import cart from "../../../models/cart";

mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
const id=req.body.id;
await cart.findByIdAndDelete(id);
}