var fastify = require('fastify');
var app = fastify({logger: true});

// register routes

app.register(require('./routes/firstRoutes'));

app.get('/', (req, res) =>{
    return "hello";
})

app.listen("3000", (err, addr)=>{
    if(err) throw "server not running";
    app.log.info(`server running on ${addr}`);
})