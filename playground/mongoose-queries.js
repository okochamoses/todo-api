const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ae6ebce5a9f2201900d1472';

// if(ObjectID.isValid(id)) {
//     console.log('Valid ID');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todos find one', todos);
// });

// Todo.findById(id).then((todos) => {
//     if(!todos) {
//         return console.log('ID not found');
//     }
//     console.log('Todos by ID', todos);
// }).catch((e) => console.log(e));

User.findById('5ae441ad690c6b1b54b39dd5').then((user) => {
    if(!ObjectID.isValid('5ae441ad690c6b1b54b39dd5')) {
        return console.log('ID is not valid');
    }
    console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => consle.log(e));