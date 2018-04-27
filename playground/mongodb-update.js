const {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB database', err);
    }
    console.log('Connected to database');
    var db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectId('5ae3718f81a06f636bf447f0')
    },{
        $set:{
            name: 'Moses Okocha'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // client.close();
});