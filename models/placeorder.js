import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
const ourschema=new mongoose.Schema({
    title:{
        type:String,   
    },
    image:{
        type:String,   
    },
    quantity:{
        type:String,   
    },
    oldprice:{
        type:String,   
    },
    price:{
        type:String,   
    },
    date:{
     default:Date.UTC
    },
    
});
mongoose.models={};
export default mongoose.model("order",ourschema);