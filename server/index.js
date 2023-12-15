import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/database.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

dbConnection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});