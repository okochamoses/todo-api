const {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB database', err);
    }
    console.log('Connected to database');
    var db = client.db('TodoApp');
    
    // //deleteMany()
    // db.collection('Todos').deleteMany({text: "Eat dinner"}).then((result) => {
    //     console.log(result);
    // });
    
    // //deleteOne()
    // db.collection('Todos').deleteMany({text: "Eat dinner"}).then((result) => {
    //     console.log(result);
    // });
    
    // //findOneAndDelete()
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Moses Okocha'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({name: 'Bilbo Baggins'}).then((result) => {
        console.log(result);
    });
    
    // client.close();
});