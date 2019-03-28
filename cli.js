import AWS from 'aws-sdk';

let client = new AWS.S3();
client.listObjects({}, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});

