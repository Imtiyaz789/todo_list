// accessing the mongoose library
const mongoose = require('mongoose');

// Connecting to database folder
mongoose.connect('mongodb://localhost/tasks_list_db');

// Checking db is connected or not
const db = mongoose.connection;

// if not connected then print this error
db.on('error', console.error.bind(console, 'Database is not Connected'));

// if db is connected successfully
db.once('open', function(){
    console.log('Database is connected successfully');
});