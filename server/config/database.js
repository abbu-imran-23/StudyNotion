import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

const dbConnection = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log("Database Connection Successfull"))
    .catch((error) => {
        console.log(`Error in Database connection : ${error}`);
        process.exit(1);
    })
}

export default dbConnection;