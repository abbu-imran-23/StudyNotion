import mongoose from "mongoose";

// Define the CourseProgress schema
const CourseProgressSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
})

// Export the CourseProgress model
const CourseProgress = mongoose.model("CourseProgress", CourseProgressSchema);
export default CourseProgress;
