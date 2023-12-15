import mongoose from "mongoose";
import MailSender from "../utils/MailSender.js"
// const emailTemplate = require("../mail/templates/emailVerificationTemplate");

// Define the OTP schema
const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Define a function to send email
async function sendVerificationEmail(email, otp) {
	// Send the email
	try {
		const mailResponse = await MailSender(
			email,
			"Verification Email",
            otp
			// emailTemplate(otp)
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

// Export the OTP model
const OTP = mongoose.model("OTP", OTPSchema);
export default OTP;
