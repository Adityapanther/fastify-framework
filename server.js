const fastify = require('fastify');
const app = fastify({logger: true});

// register routes
const dbConnector = require("./routes/db/dbConnector");
const rou = require("./routes/firstRoutes");

app.register(dbConnector);
app.register(rou);


const start = async function(){
    try{
       await app.listen("3000")
    }catch(e){
        app.log.error(e);
    }
}

start();