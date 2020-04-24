const express=require('express');
const port=8000;

// Database is fetched and used 
const db=require('./config/mongoose');

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

// To treat using database as object and key value pair
app.use(express.urlencoded());

//To use static files like css and js
app.use(express.static('assets'));

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){          //request is send here
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('My express is running on port',port);
});