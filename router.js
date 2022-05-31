var router = require("express").Router();

var keycloak = require("./config.keycloak").getKeycloak();

router.get('/anonymous',function(req,res){
 res.send('Anonymous permission')
})

router.get('/user',keycloak.protect('user'),function(req,res){
 res.send('<h3>User permission | <a href="/logout">logout</a></h3>')
})

router.get('/admin',keycloak.protect('admin'),function(req,res){
 res.send('<h3>Admin permission | <a href="/logout">logout</a></h3>')
})

router.get('/all-user',keycloak.protect(['user','admin']),function(req,res){
 res.send('<h3>All user permission | <a href="/logout">logout</a></h3>')
})
router.get('/protected',keycloak.protect(),(req,res)=>{
 var content = req.kauth.grant.id_token.content;
 var name = content.name;
 res.send(`<center><h1>Welcome : <span style="color:red;text-decoration:underline">${name}</span> <br>You are logged in</h1> <h3>  <br><br> <a href="/auth/user">User</a> <br><br> <a href="/auth/admin">Admin</a> <br><br><a href="/logout">Logout</a></h3></center> `);
})

module.exports = router;
