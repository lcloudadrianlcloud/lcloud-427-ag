import AWS from 'aws-sdk';

let client = new AWS.S3();
client.listObjects({Bucket: 'lcloud-427-ag'}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log('all files for bucket lcloud-427-ag');
        console.log(data);
    }
});

client.listObjects({Bucket: 'lcloud-427-ag', Prefix: 'filter'}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(`all files for bucket lcloud-427-ag with key 'filter'`);
        console.log(data);
    }
});

let params = {
    Bucket: 'lcloud-427-ag',
    Delete: {
        Objects: [
            {
                Key: 'filter'
            },

        ],
    },
}

client.deleteObjects(params, err => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(`delete files for bucket lcloud-427-ag with key 'filter'`);
    }
});


