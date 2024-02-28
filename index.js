const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');



const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
    
 // Routes
 app.use('/users', userRoutes); 

 // Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`User Api Running on port: ${PORT}`);
});

}).catch((error) => {
    console.error('failed to connect with mongoDB', error);
})