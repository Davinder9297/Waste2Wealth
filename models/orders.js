import mongoose from "mongoose";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
const ourschema=new mongoose.Schema({
    total:{
        type:Number,   
    }, 
    count:{
        type:Number,   
    },
    image:{
        type:String,   
    },
    title:{
        type:String,   
    },
    price:{
        type:String,   
    },
     
});
mongoose.models={};
export default mongoose.model("order",ourschema);