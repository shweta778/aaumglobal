import nodemailer from "nodemailer";

const sendEmail = async (req, res) => {
    const { name, email, phone, company, serviceType, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use true for port 465, false for port 587
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECIPIENT_EMAIL, // Your recipient email
            subject: `New Quote Request from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service Type: ${serviceType}
        Message: ${message}
      `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
};

export default sendEmail;