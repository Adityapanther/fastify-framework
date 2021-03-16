async function hell(app, options) {
    const collection = await app.mongo.db.collection('name');


    app.get('/', async (req, res) => {
        return {"greeting":"hello"};
    })

    app.get("/user", async (req, rep) =>{
        return {"user":"he all she"};
    })

    app.get('/name', async (req, rep)=>{
        var na = await collection.find().toArray();
        if(na.length === 0){
            throw new Error("no document found")
        }else{
            return na[0]
        }
    })
}

module.exports = hell;