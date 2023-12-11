import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()
app.use(cors({
    origin:'http://localhost:5173', //
    Credential:true
}))

// allow to accept json data
app.use(express.json({limit:"16kb"}))

// allow to accept url data
app.use(express.urlencoded({
    extended:true,
    limit:"16kb" //how much data limit
}))

///for folder images and files
app.use(express.static("public"))

///for cookies
app.use(cookieParser())


////importing and using routes
// import userRoutes from "./routes/user.routes.js"


///using routes 
// app.use("/api/v1/user", userRoutes)

export {app}