import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

app.post("/sendMail", async (req, res) => {
  const { name, email, phone, company, serviceType, message } = req.body;

  try {
    // ✅ Configure Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "quotes@aaumgloballogistics.in", // your Hostinger email
        pass: "YOUR_EMAIL_PASSWORD",           // email password or app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "quotes@aaumgloballogistics.in", // where you receive emails
      subject: `New Quote Request - ${serviceType}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service: ${serviceType}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
