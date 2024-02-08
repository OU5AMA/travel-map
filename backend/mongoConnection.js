const { ServerApiVersion, MongoClient } = require("mongodb");

const uri = "mongodb+srv://user:test123@cluster0.tkqlr7t.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongoDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to the DB");
    } finally {
        await client.close();
        console.log("You've left the DB!");
    }
}

module.exports = { connectToMongoDB };
