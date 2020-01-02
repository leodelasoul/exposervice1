const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance 
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors());
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "rickerle93@gmail.com",              //serverdaten
    pass: "leoricker12"
  }
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", cors(), function (request, response) {

  console.log("Got response: " + response.statusCode);
  var mailData = ""
  var data = request.body;
  var header = data[0]
  console.log(data);
  for (var key in data[1]) {
    // console.log(data[1][key].type)
      mailData = mailData + "\n" + key + " : " + data[1][key];

    
    }

  console.log(mailData);
  mailOptions = {
    from: `"<Sender’s name>", "<Sender’s email>"`,
    to: `<${user.email}>`,
    subject: `<${header}> von: ${data[1].firstName} `,
    // html: `<${data}>`
    text: `Daten:  ${mailData}`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
      response.status(400);
      response.send({ error: "Failed to send email" });
    }else {
      console.log('Message sent: %s', info.messageId);
    }
  });
});



app.get("/test", cors(), (reg, res) => {
  return "test"
});


let user = {
  email: "l.ricker93@web.de"                  //
}



