import {v2 as cloudinary} from "cloudinary"; ////plate from to upload file,pic,video
import fs from "fs"; //build in in nodejs file system


cloudinary.config({
    cloud_name:'mahviasajjad',
    api_key:'',
    api_secret:''
});

///the above all things you get from cloudinary and place in .ENV AND then used it here


///making method to upload files
const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null

        //upload the file on cloudinary

        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}
export {uploadOnCloudinary}