import mongoose from "mongoose";
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:String,
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
    password:String
})
const user=new mongoose.model("user",userSchema)
export default user;