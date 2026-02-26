import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    console.log(autoCropUrl);    
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null

        //upload the file in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        log("File uploaded successfully on cloudinary",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //delete the locally saved temporary  file as the upload failed
        return null
    }
}

export { uploadOnCloudinary }