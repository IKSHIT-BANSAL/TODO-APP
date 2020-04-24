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

module.exports.removeTask=function(req,res){
    var id=req.query;
    console.log(id);
    var count=Object.keys(id).length;
    console.log(count);
    for(let i=0;i<count;i++){
        TODO.findByIdAndDelete(Object.keys(id),function(err){
            if(err){
                console.log("Error");
                return;
            }
        });
    }
    return res.redirect('back');
}