import mongoose from 'mongoose'
// import { dbname } from "../constants.js";

const Connection=async ()=>{
   
    try{
       const connectionInstances=await mongoose.connect(process.env.DATABASE_URI)
        console.log (`DB connected successfully to (${connectionInstances.connection.host})`)
    }
    catch(error){
        console.log("Failed to connect",error)
        process.exit(1)

    }
}

export default Connection

