import dotenv from "dotenv"
import express from 'express';
import Connection from './database/db.js';
import routes from "./routes/authRoutes.js";
import cors from "cors"

const app=express(); 
app.use(cors({
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}));

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
   
// app.use(cors());
const username=process.env.USER_NAME
const password=process.env.PASSWORD
const PORT=4000

Connection(username,password)


// global middle ware

app.use((req,res,next)=>{
    

    console.log(req.path,req.method)
    next()
})

app.use('/api/workout',routes)



app.listen(PORT,()=>(console.log(`server is running at ${PORT}`)))