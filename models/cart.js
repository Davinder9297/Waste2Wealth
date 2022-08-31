import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
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