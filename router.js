var router = require("express").Router();

router.get('/anonymous',function(req,res){
 res.send('Anonymous')
})

router.get('/user',function(req,res){
 res.send('User')
})

router.get('/admin',function(req,res){
 res.send('Admin')
})

router.get('/all-user',function(req,res){
 res.send('All user')
})

module.exports = router;
