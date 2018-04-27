const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Moses Okocha',
        age: 23,
        location: 'Lagos, Nigeria',
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});