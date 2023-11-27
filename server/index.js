import dotenv from "dotenv"
import express from 'express';
import Connection from './database/db.js';
import routes from "./routes/authRoutes.js";
import cors from "cors"

// dotenv.config();
const app=express(); 
// {path:'./env'}
app.use(cors({
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}));
const port=process.env.PORT
console.log("sa",port)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
   
// app.use(cors());
// const username=process.env.USER_NAME
// const password=process.env.PASSWORD
// const port=5000

Connection();
// username,password


// global middle ware

app.use((req,res,next)=>{
    

    console.log(req.path,req.method)
    next()
})

app.use('/api/workout',routes)



// app.listen(process.env.PORT || port,()=>(console.log(`server is running at ${PORT}`)))