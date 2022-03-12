// importing the installed packages
const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');
const connectDB = require('./config/db');
const colors= require('colors');
const userRoutes = require('./routes/userRoutes');
const {notFound,errorHandler} = require('./middlewares/errorMiddleware');

// unlocking the functions of dotenv
const app = express();
dotenv.config();

// creating app variable with express();
connectDB();

// Telling the app to accept JSON data
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running");
});

app.use('/api/user',userRoutes);

// Error handling middlewares, if in case we tried to access any undefined route
app.use(notFound);
app.use(errorHandler);

// port details in env file is imported
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on PORT ${PORT} : http://localhost:${PORT}/`.blue.bold));