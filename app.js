const express = require('express');
const connectDB = require('./db/connection.js');
const router = require('./routes/taskRoutes.js');
const app = new express();
const PORT = 3000;

app.use(express.json());
app.use('/api',router);



connectDB();//Database connection
app.listen(PORT, ()=>{
    console.log(`Server running at PORT ${3000}`);
})