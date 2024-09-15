import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Load environment variables
    const { GMAIL_USER, GMAIL_PASS, RECEIVER_EMAIL } = process.env;

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: GMAIL_USER, // Sender's Gmail account
        pass: GMAIL_PASS, // App-specific password
      },
    });

    try {
      // Send the email to RECEIVER_EMAIL (your email)
      await transporter.sendMail({
        from: `"Your Website" <${GMAIL_USER}>`,  // You will send the email from yourself
        to: RECEIVER_EMAIL,  // You will receive the email as well
        subject: `New contact from ${name}`,  // Email subject
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,  // Email body
      });

      // Success response
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
