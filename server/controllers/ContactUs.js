import contactUsEmail from "../mailTemplates/ContactUs.js";
import MailSender from "../utils/MailSender.js";

const contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {
    const emailResponse = await MailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Response ", emailResponse)
    return res.status(200).json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending mail...",
    })
  }
}

export default contactUsController;
