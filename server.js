const app = require("express")();
const session = require("express-session");
require("dotenv-defaults").config();

const keycloak = require('./config.keycloak.js').initializeKeycloak(app);
app.use(keycloak.middleware({
	logout:'/logout' //by default
}));


app.get('/',(req,res)=>{
	res.send('Home page')
})
app.get('/login',(req,res)=>{
 return res.redirect(process.env.SERVER_LOGIN_URL)
})

app.get('/register',(req,res)=>{
	return res.redirect(process.env.SERVER_REGISTER_URL)
})

const authRouter = require('./router');
app.use('/auth',authRouter);

app.listen(process.env.PORT || 3636 ,_=>{
	console.log(`App listen on ${process.env.PORT || 3636}`);
});
