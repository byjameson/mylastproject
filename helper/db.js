const mongoose = require('mongoose');

module.exports = () => {

mongoose.connect('mongodb://movie_user:abcd1234@ds131784.mlab.com:31784/movie-api', {useNewUrlParser: true});

mongoose.connection.on('open', () => {

console.log("MongoDb: Connected.");

});



mongoose.connection.on('error', (err) => {

console.log("MongoDb: NOT WORK .", err);

});

mongoose.Promise = global.Promise;
};
