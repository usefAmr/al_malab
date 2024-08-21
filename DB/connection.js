import mongoose from "mongoose"
export const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL).then(result=>{console.log("mongoose connected")})
    .catch(err=>{console.log(`mongoose err ${err}`)})  
  };

export default connectDB