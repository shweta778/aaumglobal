import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sendEmail from "./emailHandler.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});