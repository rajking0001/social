const nodeMailer = require("nodemailer");
exports.sendEmail=async (options) =>{
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b61e387d9a939d",
          pass: "4939f06eb98fc1"
        }
      });

   const mailOptions = {
    from:"process.env.SMPT_MAIL",
    to:options.email,
    subject:options.subject,
    text:options.message,
   };
   await transporter.sendMail(mailOptions);
};