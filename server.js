const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: '/home/ubuntu/.env' });

const app = express();
const PORT = process.env.EMAIL_PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer 설정
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERV,
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// 메일 전송 API
app.post('/send', async (req, res) => {
    const { email, title, contents } = req.body;

    if (!email || !title || !contents) {
        return res.status(400).json({ error: '모든 필드를 입력해주세요.' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: title,
        html: 
            `My Portfolio 에서 메시지가 수신되었습니다.<br/>
            이메일 : ${email}<br/>
            제  목 : ${title}<br/>
            내  용 : ${contents}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: '메일이 성공적으로 전송되었습니다.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: '메일 전송에 실패했습니다.' });
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});