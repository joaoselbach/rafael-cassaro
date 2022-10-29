import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: 'SSLv3'
  },
  auth: {
    user: 'cassaro.booking@hotmail.com',
    pass: 'Tattoo2022*'
  }
});

export default (req, res) => {
  const { name, email, phone, idea, size } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: 'cassaro.booking@hotmail.com',
      pass: 'Tattoo2022*'
    }
  });

  try {
    const emailRes = transporter.sendMail({
      from: 'cassaro.booking@hotmail.com',
      to: 'joao.selbach@hotmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<h2>You have a new contact form submission</h2>
      <p><strong>Name: </strong> ${name} <br>
      <p><strong>Email: </strong> ${email} <br>
      <p><strong>Phone: </strong> ${phone} <br>
      <p><strong>Idea: </strong> ${idea} <br>
      <p><strong>Size: </strong> ${size} <br>
      `,
    });

    try {
      const emailRes = transporter.sendMail({
        from: "cassaro.booking@hotmail.com",
        to: email,
        subject: `${name} your booking request has been received! Open for next steps.`,
        html: `<p><strong>${name}</strong>, your booking request has been received. Thank you for your interest in my work. I'm sure we'll make a masterpiece together.</p>
        <p>I want to dedicate a lot of attention to your project, so I ask for at least <strong>48 hours</strong> to get back to you, ok?</p>
        <p>I will send you an email thru <strong>contato.rafaelcassaro@gmail.com</strong> to talk more about your tattoo, answer all your questions, and schedule your session, so keep an eye out (and if you don't see it, check your spam folder).</p>
        <p>Thank you very much, and see you soon.</p>`,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(req.body);
};
