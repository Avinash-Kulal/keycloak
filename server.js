const app = require("express")();
const session = require("express-session");
require("dotenv-defaults").config();

const keycloak = require('./config.keycloak.js').initializeKeycloak();
app.use(keycloak.middleware());

const authRouter = require('./router');


app.get('/',(req,res)=>{
	res.send('Welcom');
});


app.use('/auth',authRouter);

app.listen(process.env.PORT || 3636 ,_=>{
	console.log(`App listen on ${process.env.PORT || 3636}`);
});
