
const mongoose = require('mongoose')

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = {
    connectToMongoDB,
}