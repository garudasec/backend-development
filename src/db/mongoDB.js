import dns from "dns";
// force Node.js to use reliable public DNS servers
dns.setServers(['1.1.1.1', '8.8.8.8']); 

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)  // process exit code
        
    }
}


export default connectDB