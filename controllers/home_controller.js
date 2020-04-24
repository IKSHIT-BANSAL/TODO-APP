const TODO=require('../models/Todo');

module.exports.home=function(req,res){
    TODO.find({},function(err,todo){
        if(err){
            console.log('Error in getting data from database');
            return;
        }
        return res.render('home',{
            title:"My Express TODO",
            Mylist:todo,
        });
    })
}