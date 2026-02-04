import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://user:password@cluster0.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}
