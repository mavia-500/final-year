import dotenv from "dotenv"
import express from 'express';
import Connection from './database/db.js';
import {app} from "./app.js"
import routes from "./routes/authRoutes.js";
// import cors from "cors"

dotenv.config();
const appe=express(); 
// {path:'./env'}
// app.use(cors({
    // origin:'http://localhost:5173', 
    // credentials:true,            //access-control-allow-credentials:true
    // optionSuccessStatus:200,
// }));
// const port=process.env.PORT
// console.log("sa",port)
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
   
// app.use(cors());
// const username=process.env.USER_NAME
// const password=process.env.PASSWORD
// const port=5000

Connection()
.then(()=>{
    const port=4000;
 appe.listen(port || 8000,()=>(console.log(`server is running at ${port}`)))

})
.catch(err=>{
    console.log("Connection failed",err)
})


// global middle ware

appe.use((req,res,next)=>{
    

    console.log(req.path,req.method)
    next()
})

appe.use('/api/workout',routes)



// app.listen(process.env.PORT || port,()=>(console.log(`server is running at ${PORT}`))