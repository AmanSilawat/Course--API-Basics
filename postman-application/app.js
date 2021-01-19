// require("dotenv").config();
// ! npm i express body-parser
const express = require("express");
const bodyParser = require("body-parser");
const TwilioClient = require('twilio')
const app = express();
const port = 3000;

const client = new Twilio("AC228c2728f8758e809fed52e65aWrongNo", "a85f08159c3c1a5a9e4717a2abWrongNo")
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// This is a single page application and it's all rendered in public/index.html
app.use(express.static("public"));
// Parse the body of requests automatically
app.use(bodyParser.json());

app.get("/api/compliments", async (req, res) => {
    // TODO: Get a list of messages sent from a specific number
    const sentMessages = await client.message.list({from: twilioPhoneNumber});
    // TODO: Gather only the body of those messages for sending to the client
    const compliments = sentMessages.map(message => message.body);
    res.json(compliments);
});

app.post("/api/compliments", async (req, res) => {
    const to = req.body.to;
    const from = process.env.TWILIO_PHONE_NUMBER;
    const body = `${req.body.sender} says: ${req.body.receiver} is ${req.body.compliment}. See more compliments at ${req.headers.referer}`;
    // TODO: Send a message
    res.json({ success: false });
});

app.listen(port, () => console.log(`Prototype is listening on port ${port}!`));