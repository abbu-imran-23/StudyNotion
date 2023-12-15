import nodemailer from "nodemailer";

const MailSender = async(email, title, body) => {
    try {
        
        // Create Transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            secure: false
        })

        let info = await transporter.sendMail({
            from: `"StudyNotion" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })

        console.log(info.response);
        return info;

    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

export default MailSender;