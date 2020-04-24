const TODO=require('../models/Todo');

module.exports.create=function(req,res){
    TODO.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTodo){
        if(err){
            console.log('Error in creating in TODO');
            return;
        }
        console.log(newTodo);
        return res.redirect('/');
    });
};

