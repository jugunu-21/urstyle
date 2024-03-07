const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://khushi:khushi@urstyle.vpel3xp.mongodb.net/";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;
