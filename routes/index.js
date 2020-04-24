const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');
const userController=require('../controllers/users_controller');

router.get('/',homeController.home);

router.post('/add-list',userController.create);

router.get('/delete-todo',userController.removeTask);

module.exports=router;