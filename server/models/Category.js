import mongoose from "mongoose";

// Define the Tags schema
const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	],
});

// Export the Tags model
const Category = mongoose.model("Category", CategorySchema);
export default Category;
