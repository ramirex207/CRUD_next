import {Schema, models, model} from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        minlength:6,
        required:true,
    },
});
export default models.User || model("User",userSchema)