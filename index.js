const express = require('express');
const port = 8000;
const app = express();
const moment = require('moment')
// const bodyParser = require('body-parser');

// acquering our mongoose file here
const db = require('./config/mongoose');

// below parsing our form data to show on home page
app.use(express.urlencoded());
// app.use(bodyParser.json());

// using express router for routing 
app.use('/', require('./routes'));

// calling assets folder for css and js file
app.use(express.static('assets'));



// Below code used to setup our view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// Below code will start and fire our server
app.listen(port, function(err){
    if(err){
        console.log(`Server can't run.. ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});
