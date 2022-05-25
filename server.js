const app = require("express")();
const session = require("express-session");
require("dotenv-defaults").config();

app.get('/',(req,res)=>{
	res.send('Welcom');
});

app.listen(process.env.PORT || 3636 ,_=>{
	console.log(`App listen on ${process.env.PORT || 3636}`);
});
