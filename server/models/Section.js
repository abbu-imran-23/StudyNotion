import mongoose from "mongoose";

// Define the Section schema
const SectionSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SubSection",
		},
	],
});

// Export the Section model
const Section = mongoose.model("Section", SectionSchema);
export default Section;
