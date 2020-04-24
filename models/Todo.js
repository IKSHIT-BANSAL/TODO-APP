const mongoose=require('mongoose');  //Database mongoose is required

const TodoSchema=new mongoose.Schema({   //Schema for database mongoose is created
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Todo',TodoSchema);       //Todo is name given to database schema

module.exports=Todo;        //mongoose file is exported