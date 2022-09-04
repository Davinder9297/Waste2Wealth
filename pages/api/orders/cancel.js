import mongoose from "mongoose";
import order from "../../../models/orders";

mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
const id=req.body.id;
await order.findByIdAndDelete(id);
}