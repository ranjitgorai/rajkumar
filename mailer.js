var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
  host: 'smtp-pulse.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'gorai.ranjit13@gmail.com',
      pass: 'W3M75gXCD8'
  }
});

module.exports = smtpTransport;
