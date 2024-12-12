require('dotenv').config({ path: '/home/ubuntu/.env' });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.EMAIL_PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer 설정
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERV,
    host: process.env.EMAIL_HOST,
    port: PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

app.post('/send-email', (req, res) => {
    const { email, title, contents } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: title,
        text: contents,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});