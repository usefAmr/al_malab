import mongoose from "mongoose"
export const connectDB = async () => {
    return await mongoose.connect("mongodb+srv://usef:123@cluster0.5c2zv7b.mongodb.net/mal3bna").then(result=>{console.log("mongoose connected")})
    .catch(err=>{console.log(`mongoose err ${err}`)})  
  };

export default connectDB