const express=require('express');
const port=8000;

// Database is fetched and used 
const db=require('./config/mongoose');
const TODO=require('./models/Todo');

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

// To treat using database as object and key value pair
app.use(express.urlencoded());

//To use static files like css and js
app.use(express.static('assets'));

//use express router
app.use('/',require('./routes'));

// app.get('/',function(req,res){          //send request to views for rendering data

//     TODO.find({},function(err,todo){
//         if(err){
//             console.log('Error in getting data from database');
//             return;
//         }
//         return res.render('home',{
//             title:"My Express TODO",
//             Mylist:todo,
//         });
//     })
// });

// app.post('/add-list',function(req,res){         //Data added to the database here
//     TODO.create({
//         description:req.body.description,
//         date:req.body.date,
//         category:req.body.category
//     },function(err,newTodo){
//         if(err){
//             console.log('Error in creating in TODO');
//             return;
//         }
//         console.log(newTodo);
//         return res.redirect('/');
//     });
// });

// app.get('/delete-todo',function(req,res){       //Delete function for deleting data from database
//     var id=req.query;
//     console.log(id);
//     var count=Object.keys(id).length;
//     console.log(count);
//     for(let i=0;i<count;i++){
//         TODO.findByIdAndDelete(Object.keys(id),function(err){
//             if(err){
//                 console.log("Error");
//                 return;
//             }
//         });
//     }
//     return res.redirect('back');
// });

app.listen(port,function(err){          //request is send here
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('My express is running on port',port);
});