import mongoose from 'mongoose'
import express from "express";
import { dbname } from "../constants.js";

const app = express()
const Connection=async ()=>{
   
    try{
       const connectionInstances=await mongoose.connect("mongodb://maviasajjad:mavia123@ac-qnkiies-shard-00-00.f3qdsg6.mongodb.net:27017,ac-qnkiies-shard-00-01.f3qdsg6.mongodb.net:27017,ac-qnkiies-shard-00-02.f3qdsg6.mongodb.net:27017/?ssl=true&replicaSet=atlas-dlccri-shard-0&authSource=admin&retryWrites=true&w=majority");
 console.log (`DB connected successfully to (${connectionInstances.connection.host})`)
//  console.log(connectionInstances)
//  const port=process.env.PORT not workinng will see in future
//  console.log(port)
const port=4000;
 app.listen(port,()=>(console.log(`server is running at ${port}`)))
    }
    catch(error){
        console.log("Failed to connect",error)
        process.exit(1)

    }
}

export default Connection

