import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sparshgupta:sparsh123@cluster0.ybm8jrz.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}