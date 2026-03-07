// const mongoose=require("mongoose");

// const userSchema=new mongoose.Schema({
//         email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,   // ✅ CHANGE THIS
//         required: true
//     }
// },{
//     timestamps:true
// });
// module.exports=mongoose.model("User",userSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

 email:{
  type:String,
  required:true
 },

 password:{
  type:String,
  required:true
 },

 otp:Number,
 otpExpire:Date

});

export default mongoose.model("User",userSchema);
