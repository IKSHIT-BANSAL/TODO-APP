const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/TO-DO-App');          //Connection is established here

var db=mongoose.connection;         

db.on('error',console.error.bind(console,'error connecting to the database')); //checking whether connection is successful

db.once('open',function(){
    console.log('Connected to database successfully');      //printing message as connection is made
});