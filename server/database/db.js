import mongoose from 'mongoose'

const Connection=async (username,password)=>{
   
    URL=`mongodb://${username}:${password}@ac-xtm82v3-shard-00-00.eqqg4mg.mongodb.net:27017,ac-xtm82v3-shard-00-01.eqqg4mg.mongodb.net:27017,ac-xtm82v3-shard-00-02.eqqg4mg.mongodb.net:27017/?ssl=true&replicaSet=atlas-wmwpry-shard-0&authSource=admin&retryWrites=true&w=majority`
   
    try{
 await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
 console.log("connected successfully")
    }
    catch(error){
        console.log("error while connecting",error)

    }
}

export default Connection

