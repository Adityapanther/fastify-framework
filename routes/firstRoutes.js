async function routes(app, options){

    app.get("/user", (req, rep)=>{
        return "he all she";
    })
}

module.exports = routes;