// // //"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "yahoo.com",
    port: 587,
    // secure: true,
    secureConnection: true,
    requireTLS: true, // true for 465, false for other ports
    auth: {
      user: "shaniashraf1992@gmail.com", // generated ethereal user
      pass: "shaniashraf1992", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "shaniashraf1992@gmail.com", // sender address
    to: "zeeshanashraf765@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail.com",
//   // host: "74.125.140.109:465",
//   // secure: true,
//   // requireTLS: true,
//   auth: {
//     user: "tipster.adigitalbatchadvisor@gmail.com",
//     pass: "tipster123",
//   },
// });

// const mailOptions = {
//   from: "tipster.adigitalbatchadvisor@gmail.com",
//   to: "z6680362@gmail.com",
//   subject: "sdadsadsd",
//   html: "dsafds",
// };

// transporter.sendMail(mailOptions, function (err, info) {
//   if (err) {
//     console.log("Error Ocuured " + err);
//   } else {
//     console.log("Email Send Successfully" + info.response);
//   }
// });

// const nodemailer = require('nodemailer');
// const sendEmail = (options) => {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//       user: 'your.gmail.account@gmail.com',
//       pass: 'your.password',
//     },
//   });
//   let mailOptions = {
//     from: 'your.gmail.account@gmail.com',
//     to: 'receivers.email@domain.com',
//     subject: 'Test',
//     text: 'Hello World!',
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error.message);
//     }
//     console.log('success');
//   });
// };

// const nodemailer = require("nodemailer");

// // const sendEmail = () => {
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "tipster.adigitalbatchadvisor@gmail.com", // process.env.EMAIL_ADDRESS,
//     pass: "tipster123", // process.env.EMAIL_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: "tipster.adigitalbatchadvisor@gmail.com",
//   to: "z6680362@gmail.com",
//   subject: "fdjskdkf",
//   html: "mx",
// };

// transporter.sendMail(mailOptions, function (err, info) {
//   if (err) {
//     console.log("Error Ocuured " + err);
//   } else {
//     console.log("Email Send Successfully" + info.response);
//   }
// });
// };

/*const nodemailer = require('nodemailer');
const sendEmail = (options) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'your.gmail.account@gmail.com',
      pass: 'your.password',
    },
  });
  let mailOptions = {
    from: 'your.gmail.account@gmail.com',
    to: 'receivers.email@domain.com',
    subject: 'Test',
    text: 'Hello World!',
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error.message);
    }
    console.log('success');
  });
};*/
// module.exports = sendEmail
