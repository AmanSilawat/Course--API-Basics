const Twilio = require('twilio');

// first argument: ACCOUNT SID
// second argument: AUTH TOKEN
const client = new Twilio("AC228c2728f8758e809fed52e65aWrongNo", "a85f08159c3c1a5a9e4717a2abWrongNo")

client.messages
    .list()
    .then(messages =>
        console.log(`The mose recent message is ${messages[0].body}`)
    ).catch(err => console.error(err));

console.log('Gathering your msg log');