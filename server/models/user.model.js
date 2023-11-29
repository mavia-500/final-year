import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new Schema({
    name:{
     type:String,
     required:[true,"Enter valid user name"],
     lowercase:true,
     index:true,
     trim:true,
     unique:true

    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique:[true,'Email is already register'],
        required: [true,'Email is required'],
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
    password:{
      type:String,
      required:[true,'Password is required']
    }
},
{
  timestamps:true
})
userSchema.pre("save",async function(next){
 if(this.isModified("password")){
  this.password=bcrypt.hash(this.password,10)

next();
}
next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
  return jwt.sign(
  {
    _id: this._id,
    email: this.email,
    name: this.name
  },
  process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}
userSchema.methods.generateAccessToken=function(){
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,{
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )  
}
export const user=mongoose.model("user",userSchema)
