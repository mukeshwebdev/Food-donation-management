const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const db = "mongodb://localhost:27017/"; // Assigning your connection string directly
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
