import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/magento");
const ourschema=new mongoose.Schema({
    category:{
        type:String,    
    },
    slug:{
        type:String,   
    },
    type:{
        type:String,   
    },
    available:{
        type:Number,   
    },
    image:{
        type:String,   
    },
    title:{
        type:String,   
    },
    feature:{
        type:String,   
    },
    price:{
        type:String,   
    },
    oldprice:{
        type:String,   
    },
    
});
mongoose.models={};
export default mongoose.model("product",ourschema);