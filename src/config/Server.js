const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Nodemailer 설정
const transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
        user: 'jaehyeok817@naver.com',
        pass: 'your-email-password', // Naver 이메일 비밀번호 또는 앱 비밀번호
    },
});

app.post('/send-email', (req, res) => {
    const { email, title, contents } = req.body;

    const mailOptions = {
        from: email,
        to: 'jaehyeok817@naver.com',
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