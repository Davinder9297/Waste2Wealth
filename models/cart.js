import mongoose from "mongoose";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
const ourschema=new mongoose.Schema({
    image:{
        type:String,   
    },
    title:{
        type:String,   
    },
    productid:{
        type:String,   
    },
    price:{
        type:String,   
    }, 
    totalprice:{
        type:Number,   
    }, 
    count:{
        type:Number,
        default:0,
    },   
});
mongoose.models={};
export default mongoose.model("cart",ourschema);