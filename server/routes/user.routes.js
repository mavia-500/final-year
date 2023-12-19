import express ,{Router} from "express"
import {registerUser}  from "../controllers/user.controller.js";
const routes = Router();

routes.route('/register').post (registerUser)
console.log("routes is working")
export  {routes};