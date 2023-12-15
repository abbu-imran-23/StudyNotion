import mongoose from "mongoose";

// Define the SubSection schema
const SubSectionSchema = new mongoose.Schema(
    {
        title: { type: String },
        timeDuration: { type: String },
        description: { type: String },
        videoUrl: { type: String },
    }
);

// Export the SubSection model
const SubSection = mongoose.model("SubSection", SubSectionSchema);
export default SubSection;
