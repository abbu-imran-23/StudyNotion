import mongoose from "mongoose";

// Define the Course schema
const CourseSchema = new mongoose.Schema(
    {
        courseName: { type: String },
        courseDescription: { type: String },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        whatYouWillLearn: {
            type: String,
        },
        courseContent: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
            },
        ],
        ratingAndReviews: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview",
            },
        ],
        price: {
            type: Number,
        },
        thumbnail: {
            type: String,
        },
        tag: {
            type: [String],
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: "Category",
        },
        studentsEnroled: [
            {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
            },
        ],
        instructions: {
            type: [String],
        },
        status: {
            type: String,
            enum: ["Draft", "Published"],
        },
        createdAt: { type: Date, default: Date.now },
    }
)

// Export the Course model
const Course = mongoose.model("Course", CourseSchema)
export default Course;