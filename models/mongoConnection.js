const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB connected`);
    } catch (error) {
        console.log(error.message);
    }
};