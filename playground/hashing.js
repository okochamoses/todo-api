const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');

console.log(token);

var decoded = jwt.verify(token, '123abc');

console.log(decoded);

// let message = 'This is a string';

// let hash = SHA256(message);

// console.log(hash.toString());


// var data = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// let resulrHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// resultHash === 