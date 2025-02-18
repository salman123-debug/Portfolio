const express = require('express');

const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/send-email',async(req,res)=>{
    const {name,email,message} = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
        
    let mailOptions = {
        from: `${name} <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:'+info.response);
        res.json({success:true, message:'Email sent successfully'});
    } catch (error) {
        console.log('Error sending email',error);
        res.status(500).json({success:false, message:'Error sending email'})
    }


})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})