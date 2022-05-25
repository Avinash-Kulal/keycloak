var router = require("express").Router();

var keycloak = require("./config.keycloak").getKeycloak();

router.get('/anonymous',function(req,res){
 res.send('Anonymous permission')
})

router.get('/user',keycloak.protect('user'),function(req,res){
 res.send('User permission')
})

router.get('/admin',keycloak.protect('admin'),function(req,res){
 res.send('Admin permission')
})

router.get('/all-user',keycloak.protect(['user','admin']),function(req,res){
 res.send('All user permission')
})

module.exports = router;
