const asyncHandler=(requestHandler)=>{
   return( (req,res,next)=>{
    console.log("asyn handler is working properly")
    Promise.resolve(requestHandler(req,res,next)).catch(err=>next(err))
    
    }
   )
}
export {asyncHandler}



////////another method
// {async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }
//     catch(error){
// res.status(error.code || 500).json({
//     success:false,
//     message:error.message
// })
//     }

// }

// }