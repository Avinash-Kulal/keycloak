var session = require("express-session");
var Keycloack = require("keycloak-connect");
var key_cloak ;

var config = {
	clientId:process.env.CLIENT_ID,
	bearerOnly:false,
	serverUrl:process.env.SERVER_URL,
	realm:process.env.REALM,
	credentials:{
       		secret:process.env.CLIENT_SECRET
	 }
}

function initializeKeycloak(){
 var memoryStore = new session.MemoryStore();
	key_cloak =  new Keycloack({store:memoryStore},config);
 return key_cloak;
}
function getKeycloak(){
 if(key_cloak) return key_cloak;
 return initializeKeycloak();
}

module.exports = {
 initializeKeycloak,
 getKeycloak
}