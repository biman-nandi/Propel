import Mailgen from "mailgen";
import nodemailer from "nodemailer";
import { ApiError } from "./api-error.js";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Propel",
      link: "https://propel.js/",
    },
  });

  const emailHtml = mailGenerator.generate(options.mailgenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "bimannandi.work@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    throw new ApiError(500, "Error while sending mail ", error);
  }
};

const emailVerificationMailgenContent = (username, verificationLink) => {
  return {
    body: {
      name: username,
      intro: "Welcome to Propel! We're very excited to have you on board.",
      action: {
        instructions: "To get started with Propel, please click here:",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationLink,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, forgotPasswordLink) => {
  return {
    body: {
      name: username,
      intro:
        "We received a request to reset the password for your Propel account. Click the button below to choose a new one.",
      action: {
        instructions: "To create a new password, click the link below:",
        button: {
          color: "#22BC66",
          text: "Forgot Password",
          link: forgotPasswordLink,
        },
      },
      outro:
        "If you didn’t request this change, you can safely ignore this email. Your password will remain secure.",
    },
  };
};

export {
  sendEmail,
  forgotPasswordMailgenContent,
  emailVerificationMailgenContent,
};
