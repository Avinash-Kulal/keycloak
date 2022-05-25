const app = require("express")();
const session = require("express-session");
require("dotenv-defaults").config();


app.get('/',(req,res)=>{
	res.send('Home page')
})
app.get('/login',(req,res)=>{
 return res.redirect(process.env.SERVER_LOGIN_URL)
})

app.get('/logout',(req,res)=>{
	return res.redirect(process.env.SERVER_LOGOUT_URL)
})

app.get('/register',(req,res)=>{
	return res.redirect(process.env.SERVER_REGISTER_URL)
})
app.get('/protected',(req,res)=>{
 res.send('<h1>Welcome You are logged in</h1> | <a href="/logout">Logout</a>');
})

const keycloak = require('./config.keycloak.js').initializeKeycloak();
app.use(keycloak.middleware());


const authRouter = require('./router');


app.use('/auth',authRouter);

app.listen(process.env.PORT || 3636 ,_=>{
	console.log(`App listen on ${process.env.PORT || 3636}`);
});
