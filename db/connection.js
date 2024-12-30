const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const mongoURI = "mongodb+srv://kaushik:1234@todoapi.9cx0q.mongodb.net/?retryWrites=true&w=majority&appName=ToDoAPI";
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Connection Failed");
    }
};

module.exports = connectDB;