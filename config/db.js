const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://Dev:LdIsYJvaPchMNcbX@cluster0.hswlgym.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB connection string

const connectDB = async () => {
    try {
        mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected')
    } catch (error) {
        console.log('MongoDB connection error:', error)
    }
}

module.exports = connectDB