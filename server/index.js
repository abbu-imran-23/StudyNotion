import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import cors from "cors";
import UserRoutes from "./routes/User.js";
import dbConnection from "./config/database.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// );

// Setting up routes
app.use("/auth", UserRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Database Connection
dbConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});