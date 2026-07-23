import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '.env'), override: true });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { fullName, phone, email, productNeeded, message } = req.body || {};

  if (!fullName || !phone || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const recipientEmail = (process.env.TO_EMAIL || 'ys61972@gmail.com').trim();
  const senderEmail = (process.env.GMAIL_USER || 'ys61972@gmail.com').trim();
  const appPassword = (process.env.GMAIL_PASS || '').trim();

  if (!appPassword) {
    return res.status(500).json({
      error: 'Email service is not configured yet. Add GMAIL_PASS to your environment variables.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: `${fullName} <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New contact request from ${fullName}`,
      html: `
        <h3>New contact request</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product needed:</strong> ${productNeeded || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`);
});
