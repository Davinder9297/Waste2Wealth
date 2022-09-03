import mongoose from "mongoose";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
const ourschema=new mongoose.Schema({
    firstname:{
        type:String,    
    },
    lastname:{
        type:String,   
    },
    email:{
        type:String,   
        unique:true
    },
    address:{
        type:String,   
    },
    phone:{
        type:String,   
    },
    password:{
        type:String,   
    },
    cpassword:{
        type:String,   
    },
    date:{
        type:Date,   
        default:Date.now
    },
    
});
mongoose.models={};
export default mongoose.model("registeration",ourschema);