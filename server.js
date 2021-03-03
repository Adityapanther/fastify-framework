var fastify = require('fastify');
var app = fastify({logger: true});

app.get('/', (req, res) =>{
    res.send("hello i am")
})

app.listen("3000", (err, addr)=>{
    if(err) throw "server not running";
    app.log.info(`server running on ${addr}`);
})