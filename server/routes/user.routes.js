import express from "express"
import user from "../models/schema.js";
// import user from "../models/schema.js";
const routes = express.Router();

routes.post('/register',async (req, res) => {
    const { name, email, password } = req.body

    ///input field name checking////
    if(!name){
        return res.json({error:"name is required"})
    }

    /////////inout field password checking///
    if(!password || password.length< 6)
    {
        return res.json({
            error:"password is atleat 6 characters"
        })
    }

    

    /////input field email checking/////
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return res.json({ error: 'Invalid email format' });
    }
    /////checking user already exists or not////
    const existingUser=await user.findOne({email});
        if(existingUser){
            return res.json({error:"User Already register"})
        }
        else{
            const newUser = new user({
                name,
                email,
                password
            });
            
                // Save the user to the database
               try
               {
                 await newUser.save();
                 res.status(201).send({message:"Succesfully register"});
               }
                catch(err) {
                    res.status(202).send(err);
                }
            }
                })
        

    


///login workout/////
routes.post('/login',async (req, res) => {
    const {email, password } = req.body
    
    /////checking user already exists or not////
    const existingUser=await user.findOne({email});
        if(existingUser){
            if(password===existingUser.password){
                return  res.send({message:"login Successfully",user:user})
                }  
            
            else{
                return res.send({message:"incorrect password"})
            
            }
        }
        else{
            return res.status(402).send({message:"User doesnot exist"})
            }
    
})

//////////post a  workout/////
// routes.post('/',(req,res)=>{
// res.json({msg:'post your workout'})
// })
export default routes