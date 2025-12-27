import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB =async ()=>{
    if (!process.env.MONGODB_URL) {
    console.error("Error: MONGODB_URL is not defined in .env");
    process.exit(1);
    }
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB CONNECTION FAILED",error);
    }
}

export default connectDB;

