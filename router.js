var router = require("express").Router();

var keycloak = require("./config.keycloak").getKeycloak();

router.get('/anonymous',function(req,res){
 res.send('Anonymous permission')
})

router.get('/user',keycloak.protect('user'),function(req,res){
 console.log(req.kauth)
 res.send('User permission')
})

router.get('/admin',keycloak.protect('admin'),function(req,res){
 res.send('Admin permission')
})

router.get('/all-user',keycloak.protect(['user','admin']),function(req,res){
 res.send('All user permission')
})
router.get('/protected',keycloak.protect(),(req,res)=>{
 res.send('<h1>Welcome You are logged in</h1> | <a href="/logout">Logout</a>');
})

module.exports = router;
