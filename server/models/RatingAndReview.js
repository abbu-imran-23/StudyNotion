import mongoose from "mongoose";

// Define the RatingAndReview schema
const RatingAndReviewSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	rating: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	course: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Course",
		index: true,
	},
});

// Export the RatingAndReview model
const RatingAndReview = mongoose.model("RatingAndReview", RatingAndReviewSchema);
export default RatingAndReview;
